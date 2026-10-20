/**
 * SKILLS — grouped by category. No proficiency percentages by design.
 * `appliedIn` links a skill to projects where it was used (shown as evidence chips).
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

const HB = { label: "Halligan Bar", href: "/cast-in-steel/2024-halligan-bar" };
const SW = { label: "Washington Sword", href: "/cast-in-steel/2025-washington-sword" };
const AXE = { label: "Horseman's Axe", href: "/cast-in-steel/2026-horsemans-axe" };
const MACE = { label: "Flanged Mace", href: "/cast-in-steel/2027-flanged-mace" };
const ROVER = { label: "Senior Design", href: "/projects/automated-safety-inspection-system" };
const CNC = { label: "CNC Commissioning", href: "/projects/cnc-installation-commissioning" };
const AUTO = { label: "Automation", href: "/projects/manufacturing-automation" };
const REL = { label: "Reliability", href: "/projects/reliability-maintenance-systems" };
const THESIS = { label: "Thesis", href: "/research" };

export const skillCategories: SkillCategory[] = [
  {
    id: "cad",
    title: "CAD, Design & Analysis",
    code: "01",
    description: "Turning requirements into geometry that can be manufactured — and checking it before it's made.",
    skills: [
      { name: "Onshape", appliedIn: [AXE, MACE] },
      { name: "SolidWorks & SolidWorks Simulation", appliedIn: [HB, SW, AXE] },
      { name: "Mechanical CAD modeling & assemblies", appliedIn: [ROVER, AXE] },
      { name: "Sheet-metal design & flat patterns", appliedIn: [ROVER] },
      { name: "Engineering drawings & GD&T interpretation", appliedIn: [ROVER, CNC] },
      { name: "Finite element analysis (FEA)", appliedIn: [ROVER, AXE, SW] },
      { name: "CFD & heat-transfer analysis", appliedIn: [ROVER] },
      { name: "Design for manufacturing & casting", appliedIn: [AXE, SW, MACE] },
      { name: "Design for additive manufacturing", appliedIn: [MACE] },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    code: "02",
    description: "Hands-on process knowledge from the foundry, the machine shop and the fab bench.",
    skills: [
      { name: "Metal casting — full lifecycle", appliedIn: [AXE, SW, HB] },
      { name: "MAGMA casting simulation", appliedIn: [AXE, SW] },
      { name: "3D-printed sand molds", appliedIn: [AXE, SW, MACE] },
      { name: "CNC operations, setup & calibration", appliedIn: [CNC] },
      { name: "CNC programming & workholding", appliedIn: [CNC, AXE] },
      { name: "SprutCAM" },
      { name: "CNC plasma cutting — Torchmate CAD/CAM", appliedIn: [ROVER] },
      { name: "Press brake, shear & sheet-metal forming", appliedIn: [ROVER] },
      { name: "Welding & fabrication", appliedIn: [ROVER] },
      { name: "Heat treatment", appliedIn: [AXE, SW] },
      { name: "Assembly, fit-up & quality inspection" },
    ],
  },
  {
    id: "automation",
    title: "Automation, Controls & Electronics",
    code: "03",
    description: "Integrating mechanical, electrical and control systems so machines work as one.",
    skills: [
      { name: "Industrial automation", appliedIn: [AUTO, THESIS] },
      { name: "Electromechanical systems integration", appliedIn: [ROVER, CNC] },
      { name: "CNC controller troubleshooting", appliedIn: [CNC] },
      { name: "Sensors & instrumentation", appliedIn: [ROVER] },
      { name: "Arduino & embedded programming", appliedIn: [ROVER] },
      { name: "Raspberry Pi", appliedIn: [ROVER] },
      { name: "TI MSP430 · FPGA (Altera Cyclone II)" },
      { name: "MATLAB · Simulink" },
      { name: "Multisim · Quartus" },
      { name: "Feedback control" },
      { name: "Oscilloscope, multimeter & circuit debugging" },
      { name: "PLC controls", note: "Developing" },
    ],
  },
  {
    id: "testing",
    title: "Testing, Reliability & Data",
    code: "04",
    description: "Proving parts and equipment do what they should — and keep doing it.",
    skills: [
      { name: "Charpy impact testing", appliedIn: [AXE] },
      { name: "Hardness testing", appliedIn: [AXE] },
      { name: "Liquid penetrant & ultrasonic inspection", appliedIn: [AXE] },
      { name: "Magnetic particle inspection" },
      { name: "Design of experiments & statistical analysis", appliedIn: [ROVER] },
      { name: "Preventive maintenance & MES (Odoo)", appliedIn: [REL] },
      { name: "Equipment diagnostics", appliedIn: [CNC] },
      { name: "Strength & load testing" },
      { name: "Data analysis · TensorFlow / machine learning" },
    ],
  },
];

export const certifications = ["CNC Programming", "Smart Manufacturing", "CMMC", "Forklift Operation", "CPR & First Aid"];
