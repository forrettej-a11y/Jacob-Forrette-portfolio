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
      "Four consecutive SFSA competitions with D.W. Clark as foundry partner — a 4140 Halligan bar, then three years as team leader: a 17-4 PH reproduction of George Washington's sword, a CA6NM stainless horseman's axe, and a seven-flange mace now in development.",
    categories: ["Metal Casting", "Mechanical Design", "Manufacturing Engineering"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "in-progress",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: "2024 – 2027",
    cover: { kind: "fabrication", caption: "2026 axe head casting after shakeout", src: "/images/cast-in-steel/collection-cover.jpg" },
    highlights: ["4 competition years", "Team leader 2025–2027", "MAGMA casting simulation", "3D-printed sand molds"],
    sections: [],
  },

  /* ============================================ 2 — SENIOR DESIGN CAPSTONE */
  {
    slug: "automated-safety-inspection-system",
    featuredOrder: 2,
    title: "Automated Safety Inspection System",
    shortTitle: "Safety Inspection Rover",
    tagline:
      "Senior design capstone: a low-cost, remotely operated tracked rover that collects gas, environmental, visual and LiDAR data from confined spaces before anyone has to go in.",
    summary:
      "A welded sheet-steel tracked rover with an Arduino GIGA controller, nine MQ gas sensors, BME280 environmental sensing, LiDAR, a camera, ten-fan active cooling and dual 18 V battery power. I led mechanical design and systems integration — from CAD, FEA and thermal analysis to CNC plasma cutting, forming and welding the chassis.",
    categories: ["Robotics", "Electromechanical Engineering", "Mechanical Design"],
    disciplines: ["Robotics", "Electromechanical", "Mechanical Design"],
    status: "completed",
    institution: "Wentworth Institute of Technology",
    organization: "ELMC 5000 — Senior Design",
    period: "Jan 2025 – Aug 2026",
    cover: { kind: "cad", caption: "ASIS rover — final CAD assembly", src: `${SD}/cad-assembly.jpg` },
    specs: [
      { label: "Project type", value: "Senior design capstone (ELMC 5000)" },
      { label: "My role", value: "Mechanical & Systems Integration Lead" },
      { label: "Envelope", value: "≈ 15 × 13 × 12 in (L × W × H)" },
      { label: "Chassis", value: "Welded ~0.075 in sheet steel, tab-and-slot" },
      { label: "Mobility", value: "Two independently driven track assemblies" },
      { label: "Controller", value: "Arduino GIGA R1 WiFi" },
      { label: "Power", value: "Two Milwaukee M18 batteries · 12 V and 5 V rails" },
      { label: "Sensing", value: "9× MQ gas · internal + external BME280 · RPLIDAR" },
      { label: "Vision", value: "Forward-facing camera" },
      { label: "Cooling", value: "Ten 30 mm fans with filtered openings" },
      { label: "Target budget", value: "$2,000" },
      { label: "Certification", value: "Proof-of-concept — not rated for hazardous locations" },
    ],
    highlights: ["Mechanical & integration lead", "CNC plasma + press-brake chassis", "FEA · CFD · thermal analysis", "Mobility DOE on 4 surfaces"],
    contribution: {
      role: "Mechanical & Systems Integration Lead",
      personal: [
        "Designed the chassis and all supporting components in CAD, including sheet-metal panels, tab-and-slot joints, ventilation and sensor openings, and front/rear bash bars",
        "Ran FEA on the chassis and CFD / heat-transfer analysis of the enclosure to place vents, insulation and fans",
        "Developed the ten-fan active cooling layout and revised it through integration",
        "Converted the chassis to flat patterns, created Torchmate CAD/CAM plasma toolpaths, and operated the CNC plasma cutter",
        "Trimmed on the power shear, formed panels on the press brake, and stitch welded the chassis",
        "Redesigned the track mounting to bolt directly to the steel chassis, removing an aluminum adapter plate",
        "Designed carbon-fiber-reinforced 3D-printed mounts for the controller, converters, fuse blocks, camera, LiDAR and sensors",
        "Integrated the electrical, sensing, power, cooling and computing subsystems into the final prototype",
        "Designed and ran the track-repeatability experiment across four surfaces",
      ],
      team: [
        "Electrical architecture, power distribution, grounding and wiring harness",
        "Sensor calibration and electrical troubleshooting",
        "Controller firmware, sensor acquisition and wireless dashboard",
        "LiDAR navigation and return-to-home behavior",
        "Subsystem and full-prototype test program",
      ],
      teamMembers: [
        { name: "Jacob Forrette", role: "Mechanical & Systems Integration Lead" },
        { name: "Luis Leins", role: "Electrical, Controls & Systems Lead" },
        { name: "Alec Peruzzi", role: "Computer Engineering & Backend Systems Lead" },
      ],
      note: "Advisors: Prof. J. McCusker and Prof. S. Basnet, Wentworth Institute of Technology.",
    },
    sections: [
      {
        id: "problem",
        title: "Problem statement",
        body: [
          "Industrial inspections often involve OSHA-defined confined spaces — large enough to enter, with limited entry and exit, and not meant for continuous occupancy. Permit-required confined spaces (29 CFR 1910.146) can hold hazardous atmospheres, engulfment risks and restrictive layouts, and emergencies in them can turn into multiple-casualty events when unprotected people attempt a rescue.",
          "ASIS set out to reduce the need for personnel to enter these spaces for preliminary inspection: a low-cost, remotely operated rover that collects environmental, visual and distance information before anyone goes in.",
        ],
      },
      {
        id: "requirements",
        title: "Objectives",
        bullets: [
          "Design and fabricate a mobile platform for representative confined or restricted environments",
          "Provide live visual feedback through an onboard camera and lighting",
          "Collect environmental sensor data that can flag potentially hazardous conditions",
          "Maintain reliable communication and operator control",
          "Navigate around representative obstacles while staying stable",
          "Record inspection information for documentation and maintenance analysis",
          "Validate mobility, sensing, communication and overall performance with a structured test plan",
        ],
      },
      {
        id: "mechanical-architecture",
        title: "Mechanical architecture",
        body: [
          "The final rover is a welded sheet-steel chassis on two removable tracked drive assemblies, about 15 in long, 13 in wide and 12 in tall. Tracks were chosen over wheels for stability and traction on concrete, tile, carpet, grass and debris.",
          "The design went through eleven documented iterations — from an initial block-style chassis to a component-based layout, sensor and ventilation openings, the sheet-metal conversion, the direct track-mount redesign, reinforced mounts and insulation, camera and LiDAR supports, a taller body with cover-mounted battery and converters, external warning LEDs, and finally front and rear bash bars. Every major component has its own mount and can be removed without tearing down the rover.",
        ],
        diagram: {
          title: "Mechanical subsystems",
          type: "blocks",
          nodes: [
            { id: "chassis", label: "Sheet-steel chassis", detail: "~0.075 in, tab-and-slot, stitch welded", group: "Structure" },
            { id: "bash", label: "Front & rear bash bars", group: "Structure" },
            { id: "tracks", label: "Two track assemblies", detail: "Bolted directly to chassis", group: "Mobility" },
            { id: "mounts", label: "CF-reinforced printed mounts", detail: "Controller, converters, sensors", group: "Packaging" },
            { id: "cover", label: "Removable cover", detail: "Carries battery and converters", group: "Packaging" },
            { id: "cooling", label: "10 × 30 mm fans", detail: "Filtered intake openings", group: "Thermal" },
            { id: "insul", label: "Insulated internal platform", group: "Thermal" },
          ],
        },
        media: [
          { kind: "cad", caption: "Front view — final assembly", src: `${SD}/cad-front.jpg` },
          { kind: "cad", caption: "Internal component layout", src: `${SD}/cad-layout.jpg` },
          { kind: "cad", caption: "Sheet-metal chassis", src: `${SD}/cad-chassis.jpg` },
        ],
      },
      {
        id: "fabrication",
        title: "Fabrication",
        body: [
          "Chassis panels were exported as flat patterns with bend allowances, tabs and slots, then nested in Torchmate CAD/CAM — internal holes and slots cut before exterior profiles so parts stayed stable on the plasma table. After plasma cutting, parts were trimmed on the power shear and formed on the press brake, accounting for springback so tabs and holes aligned.",
          "The chassis was stitch welded — alternating weld locations to limit heat input and distortion in the thin sheet — and checked for squareness through assembly.",
        ],
        media: [
          { kind: "drawing", caption: "Chassis flat pattern", src: `${SD}/flat-pattern.jpg` },
          { kind: "drawing", caption: "Chassis engineering drawing", src: `${SD}/drawing-1.jpg` },
          { kind: "drawing", caption: "Assembly drawing", src: `${SD}/drawing-assembly.jpg` },
        ],
      },
      {
        id: "analysis",
        title: "Structural & thermal analysis",
        body: [
          "Before fabrication, FEA checked stress and deformation at bends, mounting holes, track attachment points and structural transitions under the weight of batteries, tracks and electronics.",
          "CFD and heat-transfer studies modeled airflow through the enclosure, conduction through the steel and heat from internal components, guiding the placement of ventilation, insulation and the ten cooling fans.",
        ],
        media: [
          { kind: "diagram", caption: "FEA — von Mises stress", src: `${SD}/fea-stress.jpg` },
          { kind: "diagram", caption: "FEA — displacement", src: `${SD}/fea-displacement.jpg` },
          { kind: "diagram", caption: "Thermal simulation", src: `${SD}/thermal-1.jpg` },
        ],
      },
      {
        id: "electrical-architecture",
        title: "Electrical architecture",
        body: [
          "The final system runs on an Arduino GIGA R1 WiFi with two independent 18 V Milwaukee M18 batteries. The primary battery feeds the tracks, controls, LiDAR, BME280 sensors and fans through regulated 12 V and 5 V rails; the second provides a dedicated 5 V supply for the nine MQ gas sensors.",
          "Earlier iterations used an Arduino Uno, Raspberry Pi, Bluetooth module and analog multiplexer — removed from the final build to cut wiring, power draw and complexity. Later additions included a TCA9548A I²C multiplexer, fuse protection, a rebuilt harness and external GO/NO-GO warning LEDs.",
        ],
        diagram: {
          title: "Final electrical configuration",
          type: "blocks",
          caption: "Electrical design was led by Luis Leins; mechanical packaging and integration by Jacob Forrette.",
          nodes: [
            { id: "b1", label: "M18 battery #1", detail: "Tracks, controls, LiDAR, fans", group: "Power" },
            { id: "b2", label: "M18 battery #2", detail: "Dedicated 5 V for MQ sensors", group: "Power" },
            { id: "rails", label: "12 V + 5 V regulated rails", group: "Power" },
            { id: "fuse", label: "Fuse protection", group: "Power" },
            { id: "giga", label: "Arduino GIGA R1 WiFi", detail: "Main controller + wireless dashboard", group: "Control" },
            { id: "i2c", label: "TCA9548A I²C mux", group: "Control" },
            { id: "mq", label: "9 × MQ gas sensors", group: "Sensing" },
            { id: "bme", label: "BME280 × 2", detail: "Internal + external", group: "Sensing" },
            { id: "lidar", label: "RPLIDAR", group: "Sensing" },
            { id: "cam", label: "Forward camera", group: "Sensing" },
            { id: "led", label: "GO / NO-GO LEDs", group: "Indication" },
          ],
        },
        media: [{ kind: "schematic", caption: "Electrical schematic (team)", src: `${SD}/schematic.jpg` }],
      },
      {
        id: "testing",
        title: "Testing — track repeatability experiment",
        body: [
          "I designed and ran a mobility experiment: the rover executed the same programmed course with 90° turns on tile, carpet, grass and concrete, measuring turn angle, final-position error, estimated track slip, lateral drift and completion time.",
        ],
        specs: [
          { label: "Tile", value: "Slip 4.10% · final error 0.19 m · turn error 2.60° · 49.7 s" },
          { label: "Concrete", value: "Slip 7.72% · final error 0.31 m · turn error 1.52° · 54.7 s" },
          { label: "Carpet", value: "Slip 10.83% · final error 0.42 m · turn error 4.40° · 58.6 s" },
          { label: "Grass", value: "Slip 17.10% · final error 0.63 m · turn error 5.28° · 68.5 s" },
        ],
      },
      {
        id: "results",
        title: "Results & limitations",
        body: [
          "The rover traveled and turned on all four surfaces, but identical open-loop motor commands produced different motion on each — so open-loop control isn't adequate for accurate autonomous navigation. Future versions should combine encoder feedback, LiDAR correction, inertial sensing and slip compensation.",
          "In a 30-minute lab cooling test the enclosure stabilized at 23.7 °C against 21.1 °C ambient (+2.6 °C). Testing also surfaced real limitations: track slip, incomplete sensor calibration, inconsistent navigation, 5 V instability, and failures of the Arduino GIGA and a motor encoder.",
        ],
        specs: [
          { label: "1 · Mobile platform", value: "Met as proof of concept" },
          { label: "2 · Live visual feedback", value: "Partially met", note: "Camera powered; reliable continuous stream not achieved" },
          { label: "3 · Environmental sensing", value: "Partially met", note: "Sensors read out; not calibrated with certified reference gas" },
          { label: "4 · Communication & control", value: "Partially met", note: "Range and latency not quantified" },
          { label: "5 · Obstacle navigation", value: "Partially met", note: "LiDAR detection and return-to-home shown; slip limited repeatability" },
          { label: "6 · Inspection records", value: "Not fully validated" },
          { label: "7 · Structured test plan", value: "Met as proof of concept" },
        ],
      },
    ],
    timeline: {
      title: "Senior design development",
      entries: [
        { id: "s1", label: "Phase 1", title: "Problem & requirements", status: "completed", summary: "OSHA confined-space research, objectives and constraints." },
        { id: "s2", label: "Phase 2", title: "Concept & CAD", status: "completed", summary: "Decision matrices for mobility, chassis method, materials, cooling and power." },
        { id: "s3", label: "Phase 3", title: "Analysis", status: "completed", summary: "Chassis FEA and enclosure CFD / heat-transfer studies." },
        { id: "s4", label: "Phase 4", title: "Fabrication", status: "completed", summary: "CNC plasma, shear, press brake and stitch welding." },
        { id: "s5", label: "Phase 5", title: "Integration", status: "completed", summary: "Eleven mechanical iterations; electrical redesign to dual-battery GIGA system." },
        { id: "s6", label: "Phase 6", title: "Testing & report", status: "completed", summary: "Subsystem, DOE and full-prototype testing; final report Aug 2026." },
      ],
    },
    models: [{ title: "Rover chassis assembly", src: "/models/senior-design-chassis.glb" }],
    gallery: [
      { kind: "cad", caption: "Final assembly", src: `${SD}/cad-assembly.jpg` },
      { kind: "cad", caption: "Cover with hinges", src: `${SD}/cad-cover.jpg` },
      { kind: "cad", caption: "Internal layout", src: `${SD}/cad-layout.jpg` },
      { kind: "drawing", caption: "Chassis drawing", src: `${SD}/drawing-2.jpg` },
      { kind: "drawing", caption: "Flat pattern", src: `${SD}/flat-pattern.jpg` },
      { kind: "diagram", caption: "Thermal simulation", src: `${SD}/thermal-2.jpg` },
      { kind: "diagram", caption: "FEA — stress", src: `${SD}/fea-stress.jpg` },
      { kind: "schematic", caption: "Electrical schematic", src: `${SD}/schematic.jpg` },
      { kind: "final", caption: "Completed prototype", src: `${SD}/prototype-01.jpg` },
      { kind: "video", caption: "Drive test", src: "/videos/senior-design-drive-test.mp4" },
    ],
    documents: [
      { title: "Final technical report", kind: "report", file: "/documents/senior-design/final-report.pdf" },
      { title: "Chassis drawings", kind: "drawing", file: "/documents/senior-design/chassis-drawings.pdf" },
    ],
    disclaimer:
      "ASIS is a proof-of-concept academic prototype. It is not intended for explosive atmospheres, standing water, extreme temperatures, heavy dust or severe terrain, is not certified for hazardous locations, and should not be used as the sole means of determining whether a confined space is safe to enter.",
  },

  /* ================================================== 3 — MASTER'S THESIS */
  {
    slug: "hmlv-flexible-automation",
    href: "/research",
    featuredOrder: 3,
    title: "Master's Thesis — HMLV Manufacturing Automation",
    shortTitle: "Master's Thesis",
    tagline: "Flexible automation strategies for reducing downtime and improving production in high-mix, low-volume manufacturing.",
    summary:
      "Graduate research into where flexible automation genuinely pays off when products, quantities and processes change constantly — using real production data from D.W. Clark and simulation to compare manual and automated operations.",
    categories: ["Graduate Research", "Industrial Automation", "Manufacturing Engineering"],
    disciplines: ["Research", "Industrial Automation", "Manufacturing"],
    status: "research",
    institution: "Wentworth Institute of Technology",
    period: "M.S. — expected August 2027",
    cover: { kind: "diagram", caption: "Research framework", src: "/images/research/cover.jpg" },
    highlights: ["HMLV manufacturing", "Flexible automation", "Inter-operation downtime", "D.W. Clark production data"],
    sections: [],
  },

  /* ====================================== 4 — CNC INSTALLATION & COMMISSIONING */
  {
    slug: "cnc-installation-commissioning",
    featuredOrder: 4,
    title: "Industrial CNC Equipment Installation & Commissioning",
    shortTitle: "CNC Installation & Commissioning",
    tagline:
      "Leading startup, commissioning and overhaul of multi-axis CNC vertical lathes — and troubleshooting mechanical, electrical and controller faults across large production equipment.",
    summary:
      "At D.W. Clark I led startup, commissioning and overhaul of multi-axis CNC vertical lathes — coordinating mechanical repairs, controller updates and outside service providers — and troubleshot mechanical systems, electrical components and CNC controller logic on large CNC machines, material-handling manipulators and heat-treat work centers.",
    categories: ["Manufacturing Engineering", "Electromechanical Systems", "Industrial Machinery"],
    disciplines: ["Industrial Machinery", "Electromechanical", "Manufacturing"],
    status: "completed",
    organization: "D.W. Clark",
    period: "Aug 2025 – Dec 2025",
    cover: { kind: "photo", caption: "Vertical turning lathe", src: `${CNC}/cover.jpg` },
    specs: [
      { label: "Company", value: "D.W. Clark — Taunton, MA" },
      { label: "Role", value: "Production & Operations Co-op" },
      { label: "Equipment", value: "Multi-axis CNC vertical lathes" },
      { label: "Also supported", value: "Material-handling manipulators · heat-treat work centers" },
      { label: "Control platforms", value: "Okuma and Fanuc" },
      { label: "Scope", value: "Startup, commissioning, overhaul, troubleshooting, process methods" },
    ],
    highlights: ["Led VTL startup & commissioning", "Controller updates", "Electrical fault diagnosis", "Workholding & ring segmenting"],
    contribution: {
      role: "Production & Operations Co-op",
      personal: [
        "Led startup, commissioning and overhaul of multi-axis CNC vertical lathes",
        "Coordinated mechanical repairs, controller updates and external service providers",
        "Troubleshot and improved mechanical systems, electrical components and CNC controller logic across large CNC machines, material-handling manipulators and heat-treat work centers",
        "Designed and implemented machining methods, workholding and ring-segmenting processes to improve efficiency and repeatability",
        "Designed improved in-process material staging and inventory systems to reduce downtime",
        "Designed and optimized machining fixtures and shop layouts to improve process flow",
      ],
      note: "Installations also involve riggers, electricians, OEM service and plant staff.",
    },
    sections: [
      {
        id: "problem",
        title: "The engineering problem",
        body: [
          "A large CNC vertical lathe is several systems at once — structure and foundation, spindle and axis drives, hydraulics and lubrication, and a CNC control tying everything together. Bringing one into production, or back after an overhaul, means each system has to be correct and then proven to work together.",
          "Once in service, faults rarely announce which system they belong to. An axis alarm can be mechanical, electrical or controller logic, so troubleshooting depends on understanding how the subsystems interact.",
        ],
      },
      {
        id: "equipment",
        title: "Equipment & systems",
        diagram: {
          title: "VTL system breakdown",
          type: "blocks",
          nodes: [
            { id: "frame", label: "Structure & foundation", detail: "Leveling, alignment", group: "Mechanical" },
            { id: "table", label: "Table & spindle", group: "Mechanical" },
            { id: "axes", label: "Axis drives & ways", group: "Mechanical" },
            { id: "hyd", label: "Hydraulics & lubrication", group: "Mechanical" },
            { id: "power", label: "Power & distribution", group: "Electrical" },
            { id: "servo", label: "Servo & spindle drives", group: "Electrical" },
            { id: "io", label: "I/O & interlocks", group: "Electrical" },
            { id: "cnc", label: "CNC control", detail: "Okuma / Fanuc", group: "Controls" },
            { id: "logic", label: "Controller logic & parameters", group: "Controls" },
          ],
        },
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting workflow",
        body: ["A structured path from symptom to root cause — and then proof that the fix worked — rather than swapping parts until the alarm clears:"],
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
        title: "Commissioning & coordination",
        body: [
          "Startup and overhaul work spans trades and vendors: mechanical repair and alignment, controller updates, and outside service providers all have to be sequenced so the machine comes back up cleanly. Coordinating that sequence was a core part of the role.",
        ],
        pending: "Add representative (non-confidential) examples of commissioning or troubleshooting problems and how they were resolved.",
      },
      {
        id: "process",
        title: "Machining methods & process improvement",
        body: [
          "Beyond keeping machines running, I designed and implemented machining methods, workholding and ring-segmenting processes to improve efficiency and repeatability, and redesigned in-process material staging and inventory to reduce downtime in daily production.",
        ],
      },
      {
        id: "confidentiality",
        title: "A note on confidentiality",
        body: [
          "Details proprietary to D.W. Clark or its customers — part numbers, customer names, production data and internal procedures — are deliberately left out of this page.",
        ],
      },
    ],
    gallery: [
      { kind: "photo", caption: "VTL commissioning", src: `${CNC}/gallery-01.jpg` },
      { kind: "photo", caption: "Electrical troubleshooting", src: `${CNC}/gallery-02.jpg` },
      { kind: "photo", caption: "Workholding", src: `${CNC}/gallery-03.jpg` },
    ],
  },

  /* ============================================ 5 — AUTOMATION & ROBOTICS */
  {
    slug: "manufacturing-automation",
    featuredOrder: 5,
    title: "Manufacturing Automation & Robotic Systems",
    shortTitle: "Industrial Manufacturing Automation",
    tagline:
      "Automation initiatives in a high-mix foundry and machine shop — automated grinding, heat-treat material handling, machine integration and monitoring, and automated job scheduling.",
    summary:
      "Automation work at D.W. Clark spanning a completed heat-treat furnace VFD controls upgrade, automated grinding and material removal, material handling for heat-treatment equipment, CNC and machine-control integration, machine monitoring and automated job scheduling — each labeled by status, from completed work to concepts under study.",
    categories: ["Industrial Automation", "Robotics", "Manufacturing Systems"],
    disciplines: ["Industrial Automation", "Robotics", "Manufacturing"],
    status: "in-progress",
    organization: "D.W. Clark",
    period: undefined,
    cover: { kind: "photo", caption: "Automated cell", src: `${AUTO}/cover.jpg` },
    specs: [
      { label: "Company", value: "D.W. Clark — Taunton, MA" },
      { label: "Environment", value: "High-mix, low-volume foundry & machine shop" },
      { label: "Status key", value: "Each initiative is labeled individually below" },
    ],
    highlights: ["Heat-treat VFD controls", "Automated grinding", "Heat-treat material handling", "Automated scheduling"],
    contribution: {
      personal: [],
      note: "My specific role on each initiative will be listed within its case study.",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Automation in a high-mix foundry and machine shop is rarely one big project. It's a series of initiatives — automating a specific operation, connecting a machine to the rest of the workflow, or making equipment status visible — that together move the operation toward running with less manual intervention.",
          "Several of these initiatives are also the case studies for my master's thesis, which compares them against the manual or semi-automated processes they would replace. They're labeled individually so it's clear what is complete, in progress, or still being evaluated.",
        ],
      },
    ],
    caseStudies: [
      {
        id: "heat-treat-vfd",
        title: "Heat-treat furnace upgrade & controls integration",
        status: "completed",
        summary: "Upgraded and integrated existing heat-treat furnace systems, implementing new variable-frequency-drive (VFD) controls and mechanical reinforcements.",
        bullets: ["VFD controls", "Mechanical reinforcement", "Systems integration"],
        details: [
          { label: "My role", value: "Production & Operations Co-op — upgrade and integration" },
          { label: "Timeframe", value: "Aug – Dec 2025" },
          { label: "Control-system description", note: "Details to be added (non-confidential)" },
        ],
        media: [{ kind: "photo", caption: "Furnace controls upgrade", src: `${AUTO}/heat-treat-vfd.jpg` }],
      },
      {
        id: "automated-grinding",
        title: "Automated grinding & material removal",
        summary: "Automated or robotic grinding to replace manual grinding of cast parts — evaluated on processing time per part, surface quality, repeatability, operator involvement and changeover between different parts.",
        details: [
          { label: "My role" },
          { label: "System architecture" },
          { label: "Automation sequence" },
          { label: "Performance evaluation", note: "Thesis comparison vs. manual grinding — pending data" },
        ],
        media: [
          { kind: "photo", caption: "Equipment", src: `${AUTO}/grinding-equipment.jpg` },
          { kind: "diagram", caption: "Process flowchart", src: `${AUTO}/grinding-flow.jpg` },
        ],
      },
      {
        id: "heat-treat-handling",
        title: "Automated material handling for heat treatment",
        status: "research",
        summary: "Loading and unloading large heat-treatment equipment — comparing manual or semi-automated transfer with automation on load/unload time, transfer time between stations, temperature variation, repeatability and operator involvement, while still handling parts of different sizes and weights.",
        details: [
          { label: "Current process baseline", note: "Time-study data collection planned" },
          { label: "Proposed automation", note: "Under evaluation" },
        ],
        media: [{ kind: "diagram", caption: "Material-handling concept", src: `${AUTO}/heat-treat-concept.jpg` }],
      },
      {
        id: "cnc-integration",
        title: "CNC equipment & machine-control integration",
        summary: "Integrating CNC equipment and machine controls into the wider manufacturing workflow.",
        details: [{ label: "My role" }, { label: "Equipment involved" }, { label: "Integration approach" }],
        media: [{ kind: "diagram", caption: "Integration architecture", src: `${AUTO}/cnc-integration.jpg` }],
      },
      {
        id: "scheduling",
        title: "Automated machine-shop scheduling & job tracking",
        status: "research",
        summary: "A scheduling system that uses machine specifications, estimated machining times, alloy, fixturing, part geometry and existing queues to assign jobs and push work instructions to production managers — compared against manual scheduling on scheduling time, utilization, queue time, delays and estimate accuracy.",
        bullets: ["Machine utilization", "Queue time", "Estimate accuracy", "Work instructions"],
        details: [{ label: "Concept documentation", note: "Thesis case study" }],
      },
      {
        id: "lights-out",
        title: "Lights-dim / lights-out manufacturing concepts",
        status: "planned",
        summary: "Future-state concepts for running selected operations with minimal attendance — identifying candidate operations and what would need to be true (part handling, monitoring, process stability) to make it work.",
        bullets: ["Candidate-operation screening", "Part loading and handling", "Remote monitoring and fault response", "Process stability prerequisites"],
      },
    ],
    gallery: [
      { kind: "photo", caption: "Automation equipment", src: `${AUTO}/gallery-01.jpg` },
      { kind: "diagram", caption: "Process flowchart", src: `${AUTO}/gallery-02.jpg` },
    ],
  },

  /* ============================================== 6 — RELIABILITY & PM */
  {
    slug: "reliability-maintenance-systems",
    featuredOrder: 6,
    title: "Manufacturing Reliability & Preventive Maintenance Systems",
    shortTitle: "Equipment Reliability & Maintenance",
    tagline:
      "Developing and deploying preventive maintenance procedures and MES workflows in Odoo — turning maintenance from reactive repair into tracked, data-driven work.",
    summary:
      "At D.W. Clark I developed and deployed preventive maintenance procedures and MES workflows that enabled digital tracking of equipment maintenance and improved uptime, alongside equipment inventory, maintenance documentation and troubleshooting of recurring machine problems.",
    categories: ["Reliability Engineering", "Maintenance Engineering", "Manufacturing"],
    disciplines: ["Reliability", "Manufacturing"],
    status: "in-progress",
    organization: "D.W. Clark",
    period: undefined,
    cover: { kind: "screenshot", caption: "Maintenance tracking", src: `${REL}/cover.jpg` },
    specs: [
      { label: "Company", value: "D.W. Clark — Taunton, MA" },
      { label: "Platform", value: "Odoo / MES" },
      { label: "Scope", value: "PM procedures, MES workflows, equipment tracking, recurring-issue troubleshooting" },
    ],
    highlights: ["PM procedures", "Odoo / MES workflows", "Digital maintenance tracking", "Recurring-failure troubleshooting"],
    contribution: {
      personal: [
        "Developed and deployed preventive maintenance procedures",
        "Built MES workflows in Odoo enabling digital maintenance tracking",
        "Equipment inventory and tracking",
        "Machine maintenance procedures and documentation",
        "Troubleshooting recurring machine problems",
        "Data collection for maintenance performance",
      ],
    },
    sections: [
      {
        id: "approach",
        title: "Reliability-engineering approach",
        body: [
          "Equipment reliability improves when maintenance stops being a list of repairs and becomes a source of information: know what equipment exists, define how each machine should be maintained, record what actually happens to it, and use that history to find the problems that keep coming back.",
          "Odoo/MES is the system of record — equipment inventory, PM schedules and work orders live in one place, so maintenance history is attached to the machine rather than someone's memory.",
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
        body: ["Preventive maintenance plans define what gets inspected, lubricated, adjusted or replaced on each machine and how often — written as procedures someone can follow consistently and tracked digitally in the MES."],
        pending: "Add how PM tasks and intervals were developed (OEM manuals, failure history, operator input).",
      },
      {
        id: "recurring",
        title: "Troubleshooting recurring problems",
        body: ["A recurring failure means the underlying cause hasn't been addressed. Maintenance history makes recurring problems visible, which turns them into targets for root-cause troubleshooting rather than repeated repairs."],
        pending: "Add a representative (non-confidential) example.",
      },
      {
        id: "metrics",
        title: "Maintenance performance data",
        body: ["The measures the maintenance data is structured to support — no values are published here."],
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
      { kind: "diagram", caption: "Maintenance workflow", src: `${REL}/workflow.jpg` },
    ],
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
