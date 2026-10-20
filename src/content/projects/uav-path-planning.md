---
an: AN-002
order: 2
title: UAV 3D Path Planning
short: UAV 3D path planning
domain: Guidance research
org: Next Generation Digital Systems Lab, USC
role: Research Fellow, CURVE Research Fellowship · advised by Prof. Sandeep Gupta
dates: Sep 2024 – present
status: ongoing
lead: Compared A*, RRT*, and Hybrid A* for quadcopter and fixed-wing UAVs across 100+ constrained 3D environments, then ported the planners to C++ for real-time re-planning on embedded hardware.
indexSpec: "Up to 25% shorter paths"
stack: [C++, Python]
keySpecs:
  - { param: Flight path distance, value: "Up to 25% shorter", cond: "Total path length, 3D simulations" }
  - { param: Computational complexity, value: "40% lower", cond: "Heuristic search optimizations; enables real-time re-planning" }
  - { param: Test environments, value: "100+", cond: "Constrained simulated 3D environments" }
  - { param: Algorithms, value: "A*, RRT*, Hybrid A*", cond: "Quadcopter and fixed-wing platforms" }
  - { param: Implementation, value: "Python → C++", cond: "C++ for speed and deterministic memory" }
---

## Abstract

Finding efficient, collision-free 3D paths for UAVs through cluttered environments, fast enough to re-plan in real time on embedded hardware.

## Vehicle constraints

Quadcopters can hover and turn in place, so grid A* plus smoothing works. Fixed-wing aircraft have a minimum turn radius, which is why Hybrid A*, built from kinematically feasible motion primitives, matters. Simulations were built for both platforms.

## Method

- Literature review of ~10 peer-reviewed papers (2021 to 2025) across classical graph search, meta-heuristics, and deep reinforcement learning. Findings: hybrid algorithms consistently beat standalone methods, and real-world validation is a major gap in the field.
- Implemented and compared A*, RRT*, and Hybrid A* across 100+ constrained simulated 3D environments.
- Prototyped in Python, then ported to C++ for speed and deterministic memory, closer to what runs on a flight computer.

## Results

- Up to 25% reduction in total flight path distance.
- Heuristic search optimizations cut computational complexity by 40%, enabling real-time re-planning under tight embedded runtime constraints.
- Presented at the CURVE symposium.
