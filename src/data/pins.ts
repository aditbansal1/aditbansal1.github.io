import { EMAIL, GITHUB, LINKEDIN } from './site';

export type Pin = {
  n: number;
  name: string;
  type: 'CORE' | 'I/O';
  fn: string;
  href?: string;
  external?: boolean;
};

/** Left side, pins 1–8 top to bottom: skills, each with where it was used. */
export const leftPins: Pin[] = [
  { n: 1, name: 'CAN-FD', type: 'CORE', fn: 'Command and telemetry bus to two moteus actuator controllers; sub-5 ms command latency (AN-001)' },
  { n: 2, name: 'ZEPHYR', type: 'CORE', fn: 'Zephyr RTOS: 50 Hz fixed-period control thread, CAN API, native_sim test target (AN-001)' },
  { n: 3, name: 'C++', type: 'CORE', fn: 'Flight software with no heap and constexpr safety limits (AN-001); planner port for deterministic memory (AN-002)' },
  { n: 4, name: 'DTS', type: 'CORE', fn: 'Devicetree overlays and Kconfig enabling the CAN-FD peripheral as the chosen CAN bus (AN-001)' },
  { n: 5, name: 'SOCKETCAN', type: 'CORE', fn: 'Bus sniffing with candump to verify IDs, frame lengths, replies, and timing (AN-001)' },
  { n: 6, name: 'SCOPE', type: 'CORE', fn: 'Oscilloscope probing of physical-layer CAN signals (AN-001)' },
  { n: 7, name: 'PYTHON', type: 'CORE', fn: 'Path-planner prototypes (AN-002); config pipeline and FastAPI service (AN-003)' },
  { n: 8, name: 'MATLAB', type: 'CORE', fn: 'Simulink MPPT control models (AN-004); kinematics reference model for unit tests (AN-001)' },
];

/** Right side, pins 16–9 top to bottom (DIP numbering runs counter-clockwise). */
export const rightPins: Pin[] = [
  { n: 16, name: 'AN-001', type: 'I/O', fn: 'Application Note: Ranger thrust vector control flight software', href: '/notes/ranger/' },
  { n: 15, name: 'AN-002', type: 'I/O', fn: 'Application Note: UAV 3D path planning', href: '/notes/uav-path-planning/' },
  { n: 14, name: 'AN-003', type: 'I/O', fn: 'Application Note: network configuration automation', href: '/notes/echostar/' },
  { n: 13, name: 'AN-004', type: 'I/O', fn: 'Application Note: solar MPPT control modeling', href: '/notes/solar-mppt/' },
  { n: 12, name: 'AN-005', type: 'I/O', fn: 'Application Note: string processor research', href: '/notes/string-processor/' },
  { n: 11, name: 'EMAIL', type: 'I/O', fn: EMAIL, href: `mailto:${EMAIL}` },
  { n: 10, name: 'GITHUB', type: 'I/O', fn: 'github.com/aditbansal1', href: GITHUB, external: true },
  { n: 9, name: 'LINKEDIN', type: 'I/O', fn: 'linkedin.com/in/adit-bansal', href: LINKEDIN, external: true },
];
