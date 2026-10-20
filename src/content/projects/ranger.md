---
an: AN-001
name: Ranger TVC
order: 1
title: Ranger Thrust Vector Control Flight Software
short: Ranger TVC flight software
domain: Flight software
org: USC Liquid Propulsion Lab
role: Embedded Software Engineer, GNC team
dates: Jan 2026 – present
status: preliminary
statusNote: TVC firmware is in bench testing.
lead: Deterministic 50 Hz thrust vector control firmware on Zephyr RTOS that steers the Ranger VTVL hopper’s gimbaled engine through two CAN-FD actuators, guarded by a latched-fault safety supervisor.
indexSpec: "< 5 ms command latency"
stack: [Zephyr RTOS, C++, CAN-FD, Devicetree, Kconfig, moteus, ztest, SocketCAN]
hardware: Teensy 4.x-class flight computer (NXP i.MX RT1062, Cortex-M7); two lead-screw linear actuators (pitch, yaw), each a brushless motor on a moteus controller
keySpecs:
  - { param: Command latency, value: "< 5 ms", cond: "Per actuator, send to reply, measured with the CPU cycle counter" }
  - { param: Control loop, value: "50 Hz", cond: "Fixed-period kernel timer; period, jitter, cycle time, overruns logged" }
  - { param: Gimbal command limits, value: "±12°, 30 °/s", cond: "Clamp and slew limit applied to every command" }
  - { param: Host unit tests, value: "~50", cond: "Zephyr native_sim + ztest" }
  - { param: Bus, value: "CAN-FD", cond: "Command + status query (~43 B) in one 64-byte frame per actuator" }
---

## Abstract

Ranger is the USC Liquid Propulsion Lab’s VTVL (vertical takeoff, vertical landing) hopper, aiming to be the first hopper vehicle built by a college team. A VTVL vehicle is an inverted pendulum: unstable without active control. Its liquid bipropellant engine sits on a gimbal, and thrust vector control steers the vehicle by tilting the engine. GNC computes the desired gimbal angles; this firmware turns them into safe actuator motion.

## Architecture

Four layers. The math, protocol, and safety logic carry no RTOS or hardware dependencies, so every path is unit-testable on a laptop.

| Layer | Responsibility |
|---|---|
| Kinematics | Gimbal angle to actuator length (law of cosines on the pivot/mount triangle) to motor revolutions |
| Protocol | Encodes commands and decodes replies in moteus’s CAN-FD format. Fixed buffers, no heap |
| Supervisor | State machine holding all safety logic |
| Transport | Thin layer over Zephyr’s CAN API |

A dedicated 50 Hz thread on a fixed-period kernel timer ties it together. One control cycle: the timer fires; grab the latest pitch/yaw commands; run the safety state machine on last cycle’s replies; clamp and rate-limit; convert to motor revolutions; send one CAN-FD frame per actuator (position command plus status request); wait up to 5 ms for both replies; decode; publish telemetry.

## Design decisions

| Decision | Rationale |
|---|---|
| Fixed-period timer, not sleep | No drift. No dynamic allocation, bounded work per cycle |
| Thread priority | Below the main vehicle controller, above sensor threads |
| CAN-FD over classic CAN | A command plus status query is ~43 bytes: one 64-byte FD frame instead of several classic frames |
| One hardware acceptance filter per actuator | Each feeds its own message queue, so hardware sorts replies before the thread sees them |
| Non-blocking sends | With no ACK on the bus, a blocking send hangs forever. Missing replies are caught by the reply timeout |
| 50 Hz supervision loop | moteus closes its own current and position loops at tens of kHz; 50 Hz is the setpoint and supervision rate |
| Mutex-guarded handoff | One small shared struct with the main controller, locked only for a few copies; no bus I/O or logging inside the lock |

## Safety

A small FDIR layer.

- **State machine:** STARTUP, CLEARING, READY, ENABLED, plus HOMING and a latched FAULT. Enables only when both actuators respond, are homed, stopped, and measured near center.
- **Every command:** reject NaN and infinity, clamp to ±12°, slew-limit to 30 °/s, clamp actuator length to its legal envelope, and send velocity, acceleration, and watchdog limits to the motor controller.
- **Latched faults:** three missed replies in a row, controller fault, controller watchdog, wrong mode, tracking error. On fault, healthy axes slew to center and faulted axes stop, because centered thrust is the safest attitude.
- **Bench gate:** refuses to enable until actuator direction has been confirmed on the bench.
- **Bumpless transfer:** the rate limiter starts from measured position, so the setpoint never jumps on enable.

## Verification

- Sub-5 ms command latency, measured per actuator from send to reply with the CPU cycle counter.
- Stable 50 Hz loop with period, jitter, cycle time, and overruns logged in telemetry.
- ~50 host unit tests (Zephyr native_sim + ztest) covering inverse kinematics against the MATLAB reference model, exact frame bytes against the moteus protocol docs, malformed-reply rejection, and every state transition and fault path.
- Bench test mode that sweeps each axis slowly and logs commanded against measured position.
- Bus verified with SocketCAN and a USB-CAN adapter (candump) for IDs, frame lengths, replies, and timing; CAN signals probed on an oscilloscope.

## Errata

Bugs found and fixed.

| # | Symptom | Cause | Fix |
|---|---|---|---|
| 1 | Next cycle could read the wrong reply | A reply arriving after the deadline sat in the queue and was read as the answer to a new command | Flush each reply queue right before sending |
| 2 | Safety limits could silently be zero | A global constructor used a constant from another file computed at runtime; C++ does not define cross-file init order | Made it `constexpr` with a compile-time square root and a `static_assert` |
| 3 | Bench code hung forever | Blocking send with no ACK on the bus | Non-blocking send plus reply timeout |
| 4 | Controller could stall for milliseconds | Logging inside a lock | Moved logging outside the critical section |
| 5 | Undefined behavior | Converting NaN to int in a log statement | `isfinite` check first |

## Future revisions

CAN-FD bit-rate switching, modeling cross-coupling between the two axes, hardware-in-the-loop testing, fault injection, and redundant position sensing.
