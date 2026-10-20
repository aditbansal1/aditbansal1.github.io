export type SkillRow = { param: string; cond: string; refs: string[] };
export type SkillGroup = { group: string; rows: SkillRow[]; also?: string };

/** Electrical Characteristics. Conditions only where a project proves the skill. */
export const skills: SkillGroup[] = [
  {
    group: 'Systems & Hardware',
    rows: [
      { param: 'Zephyr RTOS', cond: '50 Hz control thread on a fixed-period kernel timer; Zephyr CAN API; native_sim + ztest', refs: ['AN-001'] },
      { param: 'Devicetree / Kconfig', cond: 'Overlay enabling the CAN-FD peripheral as the board’s chosen CAN bus', refs: ['AN-001'] },
    ],
    also: 'Circuit design, PCB design (Altium, KiCad), sensors',
  },
  {
    group: 'Languages',
    rows: [
      { param: 'C++', cond: 'Fixed buffers, no heap, constexpr limits with static_assert; C++ planner port', refs: ['AN-001', 'AN-002'] },
      { param: 'Python', cond: 'Path-planner prototypes; document-parsing pipeline behind FastAPI', refs: ['AN-002', 'AN-003'] },
      { param: 'MATLAB / Simulink', cond: 'Closed-loop MPPT models across 50+ scenarios; IK reference model', refs: ['AN-004', 'AN-001'] },
    ],
    also: 'C, Java',
  },
  {
    group: 'Protocols',
    rows: [
      { param: 'CAN-FD', cond: 'moteus command + status query (~43 B) in one 64-byte frame; < 5 ms send-to-reply', refs: ['AN-001'] },
      { param: 'SocketCAN', cond: 'USB-CAN adapter + candump to verify IDs, frame lengths, replies, timing', refs: ['AN-001'] },
      { param: 'REST APIs', cond: 'FastAPI service driving an n8n workflow and JIRA tickets', refs: ['AN-003'] },
    ],
    also: 'SPI, I2C, UART, BGP routing',
  },
  {
    group: 'Tools',
    rows: [
      { param: 'Oscilloscopes', cond: 'Probing physical-layer CAN signals on the flight computer bus', refs: ['AN-001'] },
    ],
    also: 'Git, Linux shell, Docker, Kubernetes, logic analyzers',
  },
];
