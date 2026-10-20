/**
 * SKILLS — grouped by category. No proficiency percentages by design.
 * `appliedIn` links a skill to project slugs where it was used (shown as evidence chips).
 * `note` is for honest qualifiers such as "developing".
 */

export interface Skill {
  name: string;
  note?: string;
  appliedIn?: { label: string; href: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  code: string;
  description: string;
  skills: Skill[];
}

const AXE = { label: "Horseman's Axe", href: "/cast-in-steel/2026-horsemans-axe" };
const MACE = { label: "Flanged Mace", href: "/cast-in-steel/2027-flanged-mace" };
const ROVER = { label: "Senior Design", href: "/projects/automated-safety-inspection-system" };
const CNC = { label: "CNC Commissioning", href: "/projects/cnc-installation-commissioning" };
const AUTO = { label: "Automation", href: "/projects/manufacturing-automation" };
const REL = { label: "Reliability", href: "/projects/reliability-maintenance-systems" };
const CIS = { label: "Cast in Steel", href: "/cast-in-steel" };

export const skillCategories: SkillCategory[] = [
  {
    id: "cad",
    title: "CAD & Design",
    code: "01",
    description: "Turning requirements into geometry that can actually be manufactured.",
    skills: [
      { name: "Onshape", appliedIn: [MACE] },
      { name: "Mechanical CAD modeling", appliedIn: [AXE, MACE, ROVER] },
      { name: "Engineering drawings" },
      { name: "Mechanical assembly design", appliedIn: [ROVER] },
      { name: "Design for manufacturing", appliedIn: [AXE] },
      { name: "Design for additive manufacturing", appliedIn: [MACE] },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    code: "02",
    description: "Hands-on process knowledge from the foundry, the machine shop and the fab bench.",
    skills: [
      { name: "CNC machining" },
      { name: "SprutCAM" },
      { name: "Metal casting", appliedIn: [CIS] },
      { name: "3D-printed sand molds", appliedIn: [AXE, MACE] },
      { name: "Welding & fabrication", appliedIn: [ROVER] },
      { name: "Heat treatment", appliedIn: [AXE] },
      { name: "Mechanical assembly", appliedIn: [ROVER] },
      { name: "Manufacturing process design" },
    ],
  },
  {
    id: "automation",
    title: "Automation & Controls",
    code: "03",
    description: "Integrating mechanical, electrical and control systems so machines work as one.",
    skills: [
      { name: "Industrial automation", appliedIn: [AUTO] },
      { name: "Electromechanical integration", appliedIn: [ROVER, CNC] },
      { name: "Sensors & instrumentation", appliedIn: [ROVER] },
      { name: "Arduino", appliedIn: [ROVER] },
      { name: "Raspberry Pi", appliedIn: [ROVER] },
      { name: "MATLAB" },
      { name: "Simulink" },
      { name: "Feedback control" },
      { name: "Machine troubleshooting", appliedIn: [CNC] },
      { name: "PLC controls", note: "Developing" },
    ],
  },
  {
    id: "testing",
    title: "Testing & Reliability",
    code: "04",
    description: "Proving parts and equipment do what they should — and keep doing it.",
    skills: [
      { name: "Nondestructive testing", appliedIn: [AXE] },
      { name: "Magnetic particle inspection" },
      { name: "Hardness testing", appliedIn: [AXE] },
      { name: "Charpy impact testing", appliedIn: [AXE] },
      { name: "Preventive maintenance", appliedIn: [REL] },
      { name: "Equipment diagnostics", appliedIn: [CNC] },
      { name: "Mechanical testing" },
      { name: "Engineering validation" },
    ],
  },
];
