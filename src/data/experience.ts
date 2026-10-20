export type Revision = { rev: string; date: string; role: string; org: string; note: string; an?: string };

/** Revision History, newest first. */
export const revisions: Revision[] = [
  { rev: 'E', date: 'Jun – Aug 2026', role: 'Network Engineering Intern', org: 'EchoStar Corporation / Boost Mobile, Littleton, CO', note: 'Config-intake pipeline: multiple days to under 15 minutes.', an: 'AN-003' },
  { rev: 'D', date: 'Jan 2026 – present', role: 'Embedded Software Engineer, GNC team', org: 'USC Liquid Propulsion Lab', note: 'Thrust vector control firmware for the Ranger VTVL hopper.', an: 'AN-001' },
  { rev: 'C', date: 'Jan 2025 – present', role: 'Vice President (Brotherhood)', org: 'Beta Theta Pi, USC', note: 'Lead an elected officer team for a 60+ member chapter and 1,500+ alumni; raised over $5,000 for charity.' },
  { rev: 'B', date: 'Sep 2024 – present', role: 'Research Fellow, CURVE Research Fellowship', org: 'Next Generation Digital Systems Lab, USC', note: 'Real-time UAV path planning, advised by Prof. Sandeep Gupta.', an: 'AN-002' },
  { rev: 'A', date: 'Apr – Jul 2024', role: 'Researcher', org: 'Government Engineering College, Bikaner, India', note: 'Closed-loop MPPT control modeling in MATLAB/Simulink.', an: 'AN-004' },
];
