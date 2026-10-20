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
    company: "DW Clark",
    location: "Taunton, Massachusetts",
    description:
      "Work at DW Clark progressed from a mechanical engineering co-op into production and operations engineering, and then into full-time industrial engineering — spanning CNC equipment, manufacturing operations, automation, facilities and equipment reliability.",
    roles: [
      {
        id: "industrial",
        title: "Industrial Engineering",
        type: "Full-time",
        dates: undefined,
      },
      {
        id: "production-ops",
        title: "Production & Operations Engineering",
        type: "Engineering",
        dates: undefined,
      },
      {
        id: "co-op",
        title: "Mechanical Engineering Co-op",
        type: "Co-op",
        dates: undefined,
      },
    ],
    areas: [
      { title: "Mechanical Engineering", detail: "Mechanical design and engineering support for equipment and facilities." },
      { title: "CNC Equipment", detail: "Installation, startup, troubleshooting and repair of CNC machinery, including multi-axis vertical turning lathes." },
      { title: "Manufacturing Operations", detail: "Supporting day-to-day production and operations." },
      { title: "Industrial Automation", detail: "Automated grinding, machine integration and monitoring initiatives." },
      { title: "Robotics & Facilities", detail: "Robotic systems and facilities engineering support." },
      { title: "Equipment Maintenance", detail: "Preventive maintenance development and tracking in Odoo/MES." },
      { title: "Process Improvement", detail: "Identifying and improving manufacturing processes." },
      { title: "Manufacturing Layout Design", detail: "Layout of equipment and workflow on the production floor." },
      { title: "Fabrication & Machine Integration", detail: "Fabrication and integration of machines into production." },
    ],
    relatedProjects: ["cnc-installation-commissioning", "manufacturing-automation", "reliability-maintenance-systems"],
  },
];
