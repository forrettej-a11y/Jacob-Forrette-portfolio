/**
 * PROFESSIONAL EXPERIENCE
 *
 * Role names reflect the progression as described; confirm exact official titles
 * and add dates. Leave `dates` undefined to display "Dates to be added".
 * Add per-role responsibilities in `highlights` only when you've confirmed them.
 */
import type { ProjectStatus } from "@/lib/types";

export interface Role {
  id: string;
  title: string;
  type: string;
  dates?: string;
  /** Optional — set "in-progress" to mark the current role. */
  status?: ProjectStatus;
  summary?: string;
  highlights?: string[];
}

export interface Employer {
  company: string;
  location: string;
  description: string;
  roles: Role[];
  /** Areas of work across the whole time at the company. */
  areas: { title: string; detail: string }[];
  relatedProjects: string[]; // project slugs
}

export const experience: Employer[] = [
  {
    company: "D.W. Clark",
    location: "Taunton, Massachusetts",
    description:
      "Work at D.W. Clark progressed from a mechanical engineering co-op supporting the foundry into a production and operations co-op — spanning casting, CNC equipment, heat-treat systems, manufacturing operations and equipment reliability.",
    roles: [
      {
        id: "production-ops",
        title: "Production and Operations Co-op",
        type: "Co-op",
        dates: "Aug 2025 – Dec 2025",
        highlights: [
          "Troubleshot and improved mechanical systems, electrical components and CNC controller logic across large CNC machines, material-handling manipulators and heat-treat work centers",
          "Led startup, commissioning and overhaul of multi-axis CNC vertical lathes, coordinating mechanical repairs, controller updates and external service providers",
          "Designed and implemented machining methods, workholding and ring-segmenting processes to improve efficiency and repeatability",
          "Developed and deployed preventive maintenance procedures and MES workflows, enabling digital tracking and improved equipment uptime",
          "Designed improved in-process material staging and inventory systems to reduce downtime and support daily production",
          "Upgraded and integrated heat-treat furnace systems, implementing new VFD controls and mechanical reinforcements",
          "Designed and optimized machining fixtures and shop layouts to improve process flow",
        ],
      },
      {
        id: "co-op",
        title: "Mechanical Engineering Co-op",
        type: "Co-op",
        dates: "Dec 2024 – Aug 2025",
        summary: "Full time Dec 2024 – May 2025; part time May – Aug 2025.",
        highlights: [
          "Supported the full casting lifecycle — design, mold modeling, melting and pouring, post-processing, and non-destructive testing of cast components",
          "Operated and maintained CNC machining equipment to produce parts from engineering drawings and GD&T requirements",
          "Assisted with CAD modeling and worked with engineering staff to refine casting designs and optimize downstream machining",
        ],
      },
    ],
    areas: [
      { title: "Casting Lifecycle", detail: "Design, mold modeling, melting and pouring, post-processing and NDT of cast components." },
      { title: "CNC Equipment", detail: "Startup, commissioning, overhaul and troubleshooting of multi-axis CNC vertical lathes." },
      { title: "Machine Troubleshooting", detail: "Mechanical, electrical and controller-logic faults on CNC machines, manipulators and heat-treat centers." },
      { title: "CNC Machining", detail: "Operating CNC equipment to drawings and GD&T; machining methods and workholding." },
      { title: "Process Improvement", detail: "Ring-segmenting processes, material staging and inventory systems to reduce downtime." },
      { title: "Preventive Maintenance", detail: "PM procedures and Odoo/MES workflows for digital tracking and uptime." },
      { title: "Heat-Treat Systems", detail: "Furnace upgrades and integration with new VFD controls and mechanical reinforcements." },
      { title: "Fixtures & Shop Layout", detail: "Machining fixtures and shop layouts designed for process flow." },
      { title: "Vendor Coordination", detail: "Mechanical repairs, controller updates and external service providers." },
    ],
    relatedProjects: ["cnc-installation-commissioning", "manufacturing-automation", "reliability-maintenance-systems"],
  },
];
