/**
 * PROJECTS
 *
 * Every entry renders through the same reusable template (/projects/[slug]).
 * - To add a project: copy an entry, change the slug, fill in what you have.
 * - `featuredOrder` controls the homepage order (omit to keep it off the homepage).
 * - `href` sends a card to a dedicated page instead of the template (Cast in Steel, Research).
 * - Leave `value` off a spec or add `pending` to a section rather than inventing details.
 */
import type { Project } from "@/lib/types";

const SD = "/images/projects/senior-design";
const CNC = "/images/projects/cnc";
const AUTO = "/images/projects/automation";
const REL = "/images/projects/reliability";

export const projects: Project[] = [
  /* =================================================== 1 — CAST IN STEEL */
  {
    slug: "cast-in-steel",
    href: "/cast-in-steel",
    featuredOrder: 1,
    title: "Cast in Steel — Four-Year Collection",
    shortTitle: "Cast in Steel",
    tagline: "Four years of designing and manufacturing competition steel castings for the SFSA.",
    summary:
      "Four consecutive years of the Steel Founders' Society of America competition — culminating in leading the team behind a CA6NM stainless horseman's axe, and now a seven-flange mace designed for 3D-printed sand molds.",
    categories: ["Metal Casting", "Mechanical Design", "Manufacturing Engineering"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "in-progress",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: "Four competition years",
    cover: { kind: "final", caption: "Cast in Steel collection", src: "/images/cast-in-steel/collection-cover.jpg" },
    highlights: ["4 competition years", "Team lead — 2026", "CA6NM stainless", "3D-printed sand molds"],
    sections: [],
  },

  /* ============================================ 2 — SENIOR DESIGN CAPSTONE */
  {
    slug: "automated-safety-inspection-system",
    featuredOrder: 2,
    title: "Automated Safety Inspection System",
    shortTitle: "Safety Inspection Rover",
    tagline:
      "Senior design capstone: a remotely operated tracked rover carrying gas sensing, LiDAR, cameras and lighting for preliminary inspection of hazardous or confined spaces.",
    summary:
      "A custom steel-chassis tracked rover with onboard Arduino and Raspberry Pi electronics, environmental and gas sensors, LiDAR, camera and lighting — built so a first look into a confined or potentially hazardous space doesn't require sending a person in.",
    categories: ["Robotics", "Electromechanical Engineering", "Mechanical Design"],
    disciplines: ["Robotics", "Electromechanical", "Mechanical Design"],
    status: "completed",
    institution: "Wentworth Institute of Technology",
    organization: "Senior Design Capstone",
    period: "B.S. capstone — completed 2026",
    cover: { kind: "final", caption: "Prototype rover", src: `${SD}/cover.jpg` },
    specs: [
      { label: "Project type", value: "Senior design capstone" },
      { label: "Platform", value: "Tracked rover, custom steel chassis" },
      { label: "Operation", value: "Remotely operated" },
      { label: "Control electronics", value: "Arduino microcontroller + Raspberry Pi" },
      { label: "Sensing", value: "Gas & environmental sensors, LiDAR" },
      { label: "Vision", value: "Camera with onboard lighting" },
      { label: "Power", value: "Battery with voltage regulation" },
      { label: "Safety", value: "Emergency stop" },
      { label: "Certification", value: "Prototype — not rated for hazardous-area entry" },
    ],
    highlights: ["Custom steel chassis", "Track-system design", "LiDAR + gas sensing", "Cooling & power integration"],
    contribution: {
      role: "Mechanical design, fabrication & integration",
      personal: [
        "Mechanical design and CAD modeling",
        "Chassis fabrication",
        "Track-system development",
        "Component integration and electronics packaging",
        "Cooling-system analysis",
        "Power-distribution integration",
        "Camera and sensor mounting",
        "Testing and documentation",
      ],
      team: [
        "Arduino microcontroller integration",
        "Raspberry Pi computing",
        "LiDAR, environmental and gas sensing",
        "Camera and lighting systems",
        "Battery power and voltage regulation",
        "Emergency stop and electrical safety",
        "Remote operation",
        "Prototype testing",
      ],
      teamMembers: [],
      note: "Team member names and roles will be added. The team column lists the overall system scope delivered by the group.",
    },
    sections: [
      {
        id: "problem",
        title: "Problem statement",
        body: [
          "Confined spaces and areas with a possible hazardous atmosphere — tanks, vaults, pits, crawlspaces — are typically assessed by a person with a handheld gas monitor, often before anyone knows what the conditions inside actually are.",
          "The goal of this capstone was a remotely operated platform that can make that first, preliminary assessment: drive in, report atmospheric readings and imagery, and map its surroundings, so the people planning an entry have information before committing to it.",
        ],
      },
      {
        id: "requirements",
        title: "System requirements",
        body: ["Functional requirements derived from the project scope:"],
        bullets: [
          "Remote operation from outside the inspected space",
          "Tracked mobility suitable for uneven, confined terrain",
          "Gas and environmental sensing with readings available to the operator",
          "Camera with onboard lighting for visual inspection in the dark",
          "LiDAR for ranging and spatial awareness",
          "Self-contained battery power with regulated supply rails",
          "Emergency stop and safe electrical design",
          "Thermal management for enclosed electronics",
        ],
        pending: "Add quantitative targets (size envelope, run time, speed, sensor ranges) from the requirements document.",
      },
      {
        id: "mechanical-architecture",
        title: "Mechanical architecture",
        body: [
          "The rover is built on a custom steel chassis that carries the drive, battery, electronics enclosure and sensor mounts, with a tracked drivetrain for mobility over uneven, confined terrain.",
          "Mechanical packaging was a central problem: the electronics, battery, sensors and cooling all had to fit inside the chassis envelope while giving the camera and LiDAR clear sightlines.",
        ],
        diagram: {
          title: "Mechanical subsystems",
          type: "blocks",
          nodes: [
            { id: "chassis", label: "Steel chassis", detail: "Custom fabricated frame", group: "Structure" },
            { id: "mounts", label: "Sensor & camera mounts", group: "Structure" },
            { id: "tracks", label: "Track system", detail: "Drive, idlers, tensioning", group: "Mobility" },
            { id: "drive", label: "Drive motors", group: "Mobility" },
            { id: "enclosure", label: "Electronics packaging", group: "Packaging" },
            { id: "cooling", label: "Cooling system", detail: "Airflow for enclosed electronics", group: "Packaging" },
          ],
        },
        media: [
          { kind: "cad", caption: "Chassis — CAD assembly", src: `${SD}/cad-chassis.jpg` },
          { kind: "drawing", caption: "Chassis — engineering drawing", src: `${SD}/drawing-chassis.jpg` },
        ],
      },
      {
        id: "electrical-architecture",
        title: "Electrical architecture",
        body: [
          "The electrical system is split between an Arduino microcontroller and a Raspberry Pi, powered from an onboard battery through voltage regulation. An emergency stop provides a direct way to make the system safe.",
        ],
        diagram: {
          title: "Electrical subsystems",
          type: "blocks",
          caption: "Subsystem grouping only — the detailed schematic will be added as a downloadable document.",
          nodes: [
            { id: "batt", label: "Battery", group: "Power & Safety" },
            { id: "reg", label: "Voltage regulation", group: "Power & Safety" },
            { id: "estop", label: "Emergency stop", group: "Power & Safety" },
            { id: "pi", label: "Raspberry Pi", detail: "Onboard computing", group: "Compute & Control" },
            { id: "ard", label: "Arduino", detail: "Microcontroller I/O", group: "Compute & Control" },
            { id: "gas", label: "Gas sensors", group: "Sensing" },
            { id: "env", label: "Environmental sensors", group: "Sensing" },
            { id: "lidar", label: "LiDAR", group: "Sensing" },
            { id: "cam", label: "Camera + lighting", group: "Vision" },
          ],
        },
        media: [{ kind: "schematic", caption: "Power distribution schematic", src: `${SD}/schematic-power.jpg` }],
      },
      {
        id: "sensor-integration",
        title: "Sensor integration",
        body: [
          "Gas and environmental sensors, LiDAR and the camera each have different mounting needs — gas sensors need exposure to the surrounding air, the LiDAR needs an unobstructed field of view, and the camera and lights need to be aimed and protected. Mounting them, and bringing their wiring cleanly into the electronics package, was part of my integration work.",
        ],
        pending: "Add sensor models, mounting details and how data reaches the operator.",
        media: [{ kind: "fabrication", caption: "Sensor and camera mounting", src: `${SD}/fab-sensors.jpg` }],
      },
      {
        id: "cooling",
        title: "Cooling-system analysis",
        body: [
          "Enclosing the electronics protects them, but it also traps heat from the Raspberry Pi, regulators and motor drivers. I analyzed the cooling requirements and integrated a cooling solution into the chassis packaging.",
        ],
        pending: "Add heat-load estimate, cooling approach and any temperature measurements from testing.",
      },
      {
        id: "fabrication",
        title: "Fabrication",
        body: ["I fabricated the steel chassis and built up the track system, mounts and packaging for the prototype."],
        media: [
          { kind: "fabrication", caption: "Chassis fabrication", src: `${SD}/fab-chassis.jpg` },
          { kind: "fabrication", caption: "Track system assembly", src: `${SD}/fab-tracks.jpg` },
          { kind: "fabrication", caption: "Electronics packaging", src: `${SD}/fab-electronics.jpg` },
        ],
      },
      {
        id: "testing",
        title: "Testing methodology",
        body: ["The prototype was tested as an integrated system and documented as part of the capstone deliverables."],
        pending: "Add test plan: mobility, sensor function, remote operation, thermal and run-time tests, with pass/fail criteria.",
      },
      {
        id: "results",
        title: "Results & limitations",
        specs: [
          { label: "Mobility testing", note: "Results to be added" },
          { label: "Sensor function", note: "Results to be added" },
          { label: "Remote operation", note: "Results to be added" },
          { label: "Thermal performance", note: "Results to be added" },
        ],
        bullets: [
          "Academic prototype — not certified, rated or approved for entry into classified hazardous locations",
          "Readings support preliminary assessment only and are not a substitute for calibrated, certified gas-detection equipment or a confined-space entry program",
        ],
      },
      {
        id: "showcase",
        title: "Final prototype",
        media: [
          { kind: "final", caption: "Completed prototype", src: `${SD}/final-01.jpg` },
          { kind: "video", caption: "Prototype demonstration", src: "/videos/senior-design-demo.mp4" },
        ],
      },
    ],
    timeline: {
      title: "Senior design development",
      entries: [
        { id: "s1", label: "Phase 1", title: "Problem & requirements", status: "completed", summary: "Defined the inspection problem and system requirements." },
        { id: "s2", label: "Phase 2", title: "Concept & CAD", status: "completed", summary: "Mechanical architecture, chassis and track design, packaging in CAD." },
        { id: "s3", label: "Phase 3", title: "Fabrication", status: "completed", summary: "Steel chassis, track system and mounts fabricated." },
        { id: "s4", label: "Phase 4", title: "Integration", status: "completed", summary: "Electronics, power distribution, sensors, camera and cooling integrated." },
        { id: "s5", label: "Phase 5", title: "Testing", status: "completed", summary: "Integrated prototype testing." },
        { id: "s6", label: "Phase 6", title: "Documentation", status: "completed", summary: "Final report and presentation." },
      ],
    },
    models: [{ title: "Rover chassis assembly", src: "/models/senior-design-chassis.glb" }],
    gallery: [
      { kind: "cad", caption: "Full assembly — CAD", src: `${SD}/gallery-cad-01.jpg` },
      { kind: "cad", caption: "Track system — CAD", src: `${SD}/gallery-cad-02.jpg` },
      { kind: "drawing", caption: "Chassis drawing", src: `${SD}/gallery-drawing-01.jpg` },
      { kind: "schematic", caption: "Wiring schematic", src: `${SD}/gallery-schematic-01.jpg` },
      { kind: "fabrication", caption: "Welding the chassis", src: `${SD}/gallery-fab-01.jpg` },
      { kind: "fabrication", caption: "Integration", src: `${SD}/gallery-fab-02.jpg` },
      { kind: "final", caption: "Prototype", src: `${SD}/gallery-final-01.jpg` },
      { kind: "video", caption: "Drive test", src: "/videos/senior-design-drive-test.mp4" },
    ],
    documents: [
      { title: "Final technical report", kind: "report", file: "/documents/senior-design/final-report.pdf" },
      { title: "Chassis drawings", kind: "drawing", file: "/documents/senior-design/chassis-drawings.pdf" },
      { title: "Electrical schematics", kind: "drawing", file: "/documents/senior-design/schematics.pdf" },
      { title: "Final presentation", kind: "presentation", file: "/documents/senior-design/presentation.pdf" },
    ],
    disclaimer:
      "This rover is an academic prototype. It is not certified, rated or approved for entry into hazardous or classified locations, and it does not replace certified gas-detection equipment or a formal confined-space entry procedure.",
  },

  /* ================================================== 3 — MASTER'S THESIS */
  {
    slug: "hmlv-flexible-automation",
    href: "/research",
    featuredOrder: 3,
    title: "Master's Thesis — HMLV Manufacturing Automation",
    shortTitle: "Master's Thesis",
    tagline: "Flexible automation in high-mix, low-volume manufacturing.",
    summary:
      "Graduate research into how automation affects production, quality and downtime between operations when products, quantities and processes change constantly.",
    categories: ["Graduate Research", "Industrial Automation", "Manufacturing Engineering"],
    disciplines: ["Research", "Industrial Automation", "Manufacturing"],
    status: "research",
    institution: "Wentworth Institute of Technology",
    period: "M.S. — expected August 2027",
    cover: { kind: "diagram", caption: "Research framework", src: "/images/research/cover.jpg" },
    highlights: ["HMLV manufacturing", "Flexible automation", "Inter-operation downtime", "Economic feasibility"],
    sections: [],
  },

  /* ====================================== 4 — CNC INSTALLATION & COMMISSIONING */
  {
    slug: "cnc-installation-commissioning",
    featuredOrder: 4,
    title: "Industrial CNC Equipment Installation & Commissioning",
    shortTitle: "CNC Installation & Commissioning",
    tagline:
      "Installing, starting up and troubleshooting large multi-axis CNC vertical turning lathes — across mechanical, electrical and control systems.",
    summary:
      "Professional work at DW Clark bringing large multi-axis CNC vertical turning lathes into service and keeping CNC equipment running: alignment and setup, electrical and control-system fault diagnosis, repairs, and verification with contractors.",
    categories: ["Manufacturing Engineering", "Electromechanical Systems", "Industrial Machinery"],
    disciplines: ["Industrial Machinery", "Electromechanical", "Manufacturing"],
    status: "completed",
    organization: "DW Clark",
    period: undefined,
    cover: { kind: "photo", caption: "Vertical turning lathe installation", src: `${CNC}/cover.jpg` },
    specs: [
      { label: "Company", value: "DW Clark — Taunton, MA" },
      { label: "Equipment", value: "Multi-axis CNC vertical turning lathes" },
      { label: "Control platforms", value: "Okuma and Fanuc" },
      { label: "Scope", value: "Installation, startup, troubleshooting, repair, maintenance" },
      { label: "Interfaces", value: "Contractors, operators, maintenance" },
    ],
    highlights: ["Multi-axis VTL installation", "Okuma & Fanuc controls", "Electrical fault diagnosis", "Contractor coordination"],
    contribution: {
      role: "Engineering — installation, troubleshooting & repair",
      personal: [
        "Installation and startup of multi-axis CNC vertical turning lathes",
        "Mechanical systems troubleshooting",
        "Electrical fault diagnosis",
        "Control-system troubleshooting",
        "CNC equipment repairs",
        "Equipment alignment and setup",
        "Machine maintenance",
        "Coordination with contractors",
        "Operational testing and verification",
      ],
      note: "Installations involve riggers, electricians, OEM service and plant staff; this list reflects my own responsibilities.",
    },
    sections: [
      {
        id: "problem",
        title: "The engineering problem",
        body: [
          "A large CNC vertical turning lathe is several systems at once — heavy structure and foundation, spindle and axis drives, hydraulics and lubrication, and a CNC control tying everything together. Getting one into production means each of those has to be installed correctly and then proven to work together.",
          "Once in service, faults rarely announce which system they belong to. An axis alarm can be mechanical, electrical or a parameter issue, so troubleshooting depends on understanding how the subsystems interact rather than treating each in isolation.",
        ],
      },
      {
        id: "equipment",
        title: "Equipment & systems",
        diagram: {
          title: "VTL system breakdown",
          type: "blocks",
          nodes: [
            { id: "frame", label: "Structure & foundation", detail: "Leveling, anchoring, alignment", group: "Mechanical" },
            { id: "table", label: "Table & spindle", group: "Mechanical" },
            { id: "axes", label: "Axis drives & ways", group: "Mechanical" },
            { id: "hyd", label: "Hydraulics & lubrication", group: "Mechanical" },
            { id: "power", label: "Power & distribution", group: "Electrical" },
            { id: "servo", label: "Servo & spindle drives", group: "Electrical" },
            { id: "io", label: "I/O & interlocks", group: "Electrical" },
            { id: "cnc", label: "CNC control", detail: "Okuma / Fanuc", group: "Controls" },
            { id: "params", label: "Parameters & alarms", group: "Controls" },
          ],
        },
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting workflow",
        body: [
          "A structured path from symptom to root cause — and then proof that the fix worked — rather than swapping parts until the alarm clears:",
        ],
        diagram: {
          title: "Fault diagnosis workflow",
          type: "flow",
          nodes: [
            { id: "t1", label: "Observe", detail: "Symptom, conditions, when it occurs" },
            { id: "t2", label: "Review", detail: "Alarm history, recent changes" },
            { id: "t3", label: "Isolate", detail: "Mechanical, electrical or control" },
            { id: "t4", label: "Test", detail: "Measure and confirm the cause" },
            { id: "t5", label: "Repair", detail: "Correct the root cause" },
            { id: "t6", label: "Verify", detail: "Run and confirm under load" },
            { id: "t7", label: "Document", detail: "Record for the next occurrence" },
          ],
        },
      },
      {
        id: "integration",
        title: "Mechanical & electrical integration",
        body: [
          "Installation and repair work spans the boundary between trades: aligning and setting up the machine mechanically, confirming electrical connections and interlocks, and working through control-system behavior during startup. Coordinating that sequence with contractors is a large part of keeping an installation on track.",
        ],
        pending: "Add representative (non-confidential) examples of integration problems and how they were resolved.",
      },
      {
        id: "verification",
        title: "Testing & verification",
        body: [
          "Before a machine is handed over to production it is run through operational testing to confirm motion, control behavior and safety functions work as intended.",
        ],
        pending: "Add the verification steps you typically follow at startup.",
      },
      {
        id: "confidentiality",
        title: "A note on confidentiality",
        body: [
          "Details that are proprietary to DW Clark or its customers — part numbers, customer names, production data and internal procedures — are deliberately left out of this page.",
        ],
      },
    ],
    gallery: [
      { kind: "photo", caption: "VTL installation", src: `${CNC}/gallery-01.jpg` },
      { kind: "photo", caption: "Alignment and setup", src: `${CNC}/gallery-02.jpg` },
      { kind: "photo", caption: "Electrical cabinet troubleshooting", src: `${CNC}/gallery-03.jpg` },
      { kind: "photo", caption: "Machine repair", src: `${CNC}/gallery-04.jpg` },
    ],
  },

  /* ============================================ 5 — AUTOMATION & ROBOTICS */
  {
    slug: "manufacturing-automation",
    featuredOrder: 5,
    title: "Manufacturing Automation & Robotic Systems",
    shortTitle: "Industrial Manufacturing Automation",
    tagline:
      "Automation initiatives at DW Clark — automated grinding, CNC and machine-control integration, machine monitoring, and lights-dim manufacturing concepts.",
    summary:
      "A collection of industrial automation initiatives spanning automated grinding systems, CNC equipment and control integration, workflow automation and machine monitoring, along with forward-looking lights-dim and lights-out manufacturing concepts.",
    categories: ["Industrial Automation", "Robotics", "Manufacturing Systems"],
    disciplines: ["Industrial Automation", "Robotics", "Manufacturing"],
    status: "in-progress",
    organization: "DW Clark",
    period: undefined,
    cover: { kind: "photo", caption: "Automated cell", src: `${AUTO}/cover.jpg` },
    specs: [
      { label: "Company", value: "DW Clark — Taunton, MA" },
      { label: "Focus", value: "Grinding automation, machine integration, monitoring" },
      { label: "Status key", value: "Each initiative is labeled individually below" },
    ],
    highlights: ["Automated grinding", "Machine control integration", "Machine monitoring", "Lights-dim concepts"],
    contribution: {
      personal: [],
      note: "My specific role on each initiative will be listed within its case study.",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Automation in a job-shop or foundry environment is rarely a single large project. It is a series of initiatives — each one automating a specific operation, connecting a machine to the rest of the workflow, or making equipment status visible — that together move the operation toward running with less manual intervention.",
          "The initiatives below are labeled individually so it is clear which are complete, which are in progress, and which are still concepts.",
        ],
      },
    ],
    caseStudies: [
      {
        id: "automated-grinding",
        title: "Automated grinding systems",
        summary:
          "Automating grinding operations to reduce manual handling and make the process more repeatable.",
        details: [
          { label: "My role" },
          { label: "System architecture" },
          { label: "Control-system description" },
          { label: "Automation sequence" },
          { label: "Engineering challenges" },
          { label: "Performance evaluation", note: "Only verified results will be published" },
        ],
        media: [
          { kind: "diagram", caption: "System architecture", src: `${AUTO}/grinding-architecture.jpg` },
          { kind: "photo", caption: "Equipment", src: `${AUTO}/grinding-equipment.jpg` },
          { kind: "diagram", caption: "Process flowchart", src: `${AUTO}/grinding-flow.jpg` },
        ],
      },
      {
        id: "cnc-integration",
        title: "CNC equipment & machine-control integration",
        summary:
          "Integrating CNC equipment and machine controls into the wider manufacturing workflow.",
        details: [
          { label: "My role" },
          { label: "Equipment involved" },
          { label: "Integration approach" },
          { label: "Engineering challenges" },
        ],
        media: [
          { kind: "diagram", caption: "Integration architecture", src: `${AUTO}/cnc-integration.jpg` },
          { kind: "photo", caption: "Equipment", src: `${AUTO}/cnc-integration-photo.jpg` },
        ],
      },
      {
        id: "monitoring",
        title: "Workflow automation & machine monitoring",
        summary:
          "Making machine status and utilization visible to support production decisions and process improvement.",
        bullets: ["Machine monitoring", "Equipment utilization", "Production optimization", "Manufacturing workflow automation"],
        details: [
          { label: "My role" },
          { label: "Data collected" },
          { label: "How the data is used" },
        ],
        media: [{ kind: "screenshot", caption: "Monitoring dashboard", src: `${AUTO}/monitoring-dashboard.jpg` }],
      },
      {
        id: "lights-out",
        title: "Lights-dim / lights-out manufacturing concepts",
        status: "planned",
        summary:
          "Future-state concepts for running selected operations with minimal or no attendance — identifying which operations are candidates and what would need to be true (part handling, monitoring, process stability) to make it work.",
        bullets: [
          "Candidate-operation screening",
          "Part loading and handling requirements",
          "Remote monitoring and fault response",
          "Process stability prerequisites",
        ],
        details: [{ label: "Concept documentation" }],
        media: [{ kind: "diagram", caption: "Concept architecture", src: `${AUTO}/lights-out-concept.jpg` }],
      },
    ],
    gallery: [
      { kind: "photo", caption: "Automation equipment", src: `${AUTO}/gallery-01.jpg` },
      { kind: "diagram", caption: "Process flowchart", src: `${AUTO}/gallery-02.jpg` },
      { kind: "video", caption: "Automation sequence", src: "/videos/automation-sequence.mp4" },
    ],
  },

  /* ============================================== 6 — RELIABILITY & PM */
  {
    slug: "reliability-maintenance-systems",
    featuredOrder: 6,
    title: "Manufacturing Reliability & Preventive Maintenance Systems",
    shortTitle: "Equipment Reliability & Maintenance",
    tagline:
      "Building preventive maintenance and equipment tracking in Odoo/MES — turning maintenance from reactive repair into information that improves equipment reliability.",
    summary:
      "Developing and supporting preventive maintenance programs, machine maintenance procedures, equipment inventory and tracking in Odoo/MES, and the data collection needed to find and fix recurring machine problems.",
    categories: ["Reliability Engineering", "Maintenance Engineering", "Manufacturing"],
    disciplines: ["Reliability", "Manufacturing"],
    status: "in-progress",
    organization: "DW Clark",
    period: undefined,
    cover: { kind: "screenshot", caption: "Maintenance tracking", src: `${REL}/cover.jpg` },
    specs: [
      { label: "Company", value: "DW Clark — Taunton, MA" },
      { label: "Platform", value: "Odoo / MES" },
      { label: "Scope", value: "PM development, procedures, tracking, recurring-issue troubleshooting" },
    ],
    highlights: ["Preventive maintenance", "Odoo / MES tracking", "Maintenance procedures", "Recurring-failure troubleshooting"],
    contribution: {
      personal: [
        "Preventive maintenance development",
        "Maintenance tracking using Odoo/MES",
        "Machine maintenance procedures",
        "Equipment inventory and tracking",
        "Troubleshooting recurring machine problems",
        "Maintenance documentation",
        "Data collection for maintenance performance",
      ],
    },
    sections: [
      {
        id: "approach",
        title: "Reliability-engineering approach",
        body: [
          "Equipment reliability improves when maintenance stops being a list of repairs and becomes a source of information. The approach is to know what equipment exists, define how each machine should be maintained, record what actually happens to it, and use that history to find the problems that keep coming back.",
          "Odoo/MES is the system of record: equipment inventory, preventive-maintenance schedules and work orders all live in one place, so maintenance history is attached to the machine rather than to someone's memory.",
        ],
        diagram: {
          title: "Maintenance information loop",
          type: "flow",
          caption: "Each pass through the loop should leave the equipment — and the maintenance plan — a little better.",
          nodes: [
            { id: "r1", label: "Equipment register", detail: "Inventory of assets" },
            { id: "r2", label: "PM plans", detail: "Procedures & intervals" },
            { id: "r3", label: "Work orders", detail: "Planned & corrective" },
            { id: "r4", label: "History", detail: "Failures, causes, time" },
            { id: "r5", label: "Analysis", detail: "Recurring problems" },
            { id: "r6", label: "Improve", detail: "Fix root cause, revise PM" },
          ],
        },
      },
      {
        id: "pm-development",
        title: "Preventive maintenance development",
        body: [
          "Preventive maintenance plans define what gets inspected, lubricated, adjusted or replaced on each machine and how often — written as procedures someone can follow consistently.",
        ],
        pending: "Add how PM tasks and intervals were developed (OEM manuals, failure history, operator input).",
      },
      {
        id: "recurring",
        title: "Troubleshooting recurring problems",
        body: [
          "A recurring failure is a signal that the underlying cause hasn't been addressed. Maintenance history makes recurring problems visible, which turns them into targets for root-cause troubleshooting rather than repeated repairs.",
        ],
        pending: "Add a representative (non-confidential) example.",
      },
      {
        id: "metrics",
        title: "Maintenance performance data",
        body: [
          "Collecting consistent maintenance data makes it possible to measure reliability over time. These are the standard measures the data is structured to support — no values are published here.",
        ],
        specs: [
          { label: "MTBF", value: "Mean time between failures", note: "Operating time ÷ number of failures" },
          { label: "MTTR", value: "Mean time to repair", note: "Total repair time ÷ number of repairs" },
          { label: "PM compliance", value: "Planned tasks completed on schedule" },
          { label: "Planned vs. reactive", value: "Share of maintenance work that was planned" },
        ],
      },
    ],
    gallery: [
      { kind: "screenshot", caption: "Odoo maintenance dashboard", src: `${REL}/dashboard-01.jpg` },
      { kind: "screenshot", caption: "Equipment record", src: `${REL}/dashboard-02.jpg` },
      { kind: "diagram", caption: "Maintenance workflow", src: `${REL}/workflow.jpg` },
    ],
    documents: [{ title: "Sample PM procedure (redacted)", kind: "manufacturing", file: "/documents/reliability/sample-pm-procedure.pdf" }],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function projectHref(p: { slug: string; href?: string }) {
  return p.href ?? `/projects/${p.slug}`;
}

export const featuredProjects = projects
  .filter((p) => p.featuredOrder !== undefined)
  .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
