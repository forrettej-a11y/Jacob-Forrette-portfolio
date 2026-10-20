/**
 * CAST IN STEEL — FOUR-YEAR COLLECTION
 *
 * Content sourced from the team technical reports (2024 Halligan bar, 2025 George Washington
 * sword, 2026 horseman's axe) and the 2027 historical-authenticity report. Each year renders
 * through the shared project template at /cast-in-steel/[slug].
 */
import type { Project, TimelineEntry } from "@/lib/types";

const HB = "/images/cast-in-steel/2024-halligan";
const SW = "/images/cast-in-steel/2025-sword";
const AXE = "/images/cast-in-steel/2026-axe";
const MACE = "/images/cast-in-steel/2027-mace";

const ADVISOR = "Serdar Tumkor, Ph.D. (Faculty Advisor)";

export const castInSteelOverview = {
  title: "Cast in Steel",
  subtitle: "Four Years of Engineering Design & Manufacturing",
  organization: "Steel Founders' Society of America (SFSA)",
  institution: "Wentworth Institute of Technology",
  foundryPartner: "D.W. Clark — Taunton, MA (all four years)",
  intro: [
    "Cast in Steel is the Steel Founders' Society of America's annual student competition. Each year, university teams design a steel casting around a set theme object, then work with a foundry partner to produce it — taking the part from research and CAD through casting simulation, mold making, pouring, heat treatment, finishing and testing.",
    "I've competed four consecutive years with D.W. Clark as our sponsor foundry: as a team member on the 2024 Halligan bar, then as team leader for the 2025 George Washington sword, the 2026 horseman's axe, and the 2027 flanged mace now in development.",
  ],
};

export const castingWorkflow = {
  title: "Steel casting workflow",
  type: "flow" as const,
  caption: "The core sequence each competition year follows. Each year's page documents how that specific part moved through it.",
  nodes: [
    { id: "design", label: "Research & CAD", detail: "Historical reference, geometry, weight limits" },
    { id: "sim", label: "Simulate", detail: "MAGMA solidification & fill" },
    { id: "mold", label: "Mold", detail: "3D-printed sand molds" },
    { id: "pour", label: "Melt & Pour", detail: "Controlled pour temperature & time" },
    { id: "heat", label: "Heat Treat", detail: "Develop final properties" },
    { id: "inspect", label: "Inspect & Repair", detail: "NDT, weld repair as required" },
    { id: "finish", label: "Machine & Finish", detail: "CNC machining, grinding, polishing" },
    { id: "test", label: "Test", detail: "Mechanical & performance testing" },
  ],
};

export const castInSteelYears: Project[] = [
  /* ================================================== 2024 — HALLIGAN BAR */
  {
    slug: "2024-halligan-bar",
    title: "2024 — Halligan Bar",
    shortTitle: "Halligan Bar",
    tagline:
      "\"The Love Handle\" — a cast 4140 steel firefighter's Halligan bar redesigned around feedback from Boston firefighters, then tested on a forcible-entry door jig with Engine 37 / Ladder 26.",
    summary:
      "My first Cast in Steel year, as a member of Wentworth's \"Big Bar Club\". The team redesigned the Halligan forcible-entry tool in 4140 steel — round handle, shorter and thicker pike, gapped and serrated forks — sand cast at D.W. Clark and tested with the Boston Fire Department.",
    categories: ["Metal Casting", "Mechanical Design", "Product Redesign"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "completed",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: "2024 competition",
    cover: { kind: "final", caption: "Finished Halligan bar — \"The Love Handle\"", src: `${HB}/final.jpg`, fit: "contain" },
    specs: [
      { label: "Competition year", value: "2024" },
      { label: "Product", value: "Halligan bar (forcible-entry tool)" },
      { label: "Team", value: "Big Bar Club" },
      { label: "My role", value: "Team member" },
      { label: "Material", value: "4140 steel" },
      { label: "Process", value: "Sand casting" },
      { label: "Final weight", value: "10.2 lb", note: "Limit 13.2 lb" },
      { label: "Overall length", value: "32.54 in", note: "Limit 40 in" },
      { label: "Foundry partner", value: "D.W. Clark" },
      { label: "Field testing", value: "Boston Fire Dept. — Engine 37 / Ladder 26" },
    ],
    highlights: ["4140 steel sand casting", "Firefighter-driven redesign", "SolidWorks FEA comparison", "Door-jig field testing"],
    contribution: {
      role: "Team Member",
      personal: [],
      team: [
        "Firefighter interviews and measurement of an in-service bar",
        "CAD redesign in SolidWorks",
        "Comparative static FEA — original vs. redesigned bar",
        "Material and process selection with D.W. Clark",
        "Casting-defect remediation and surface finishing",
        "Forcible-entry testing with Boston Fire Department",
      ],
      teamMembers: [
        { name: "Joshua Hofer", role: "Team Leader" },
        { name: "Kannon Behrens" },
        { name: "Zackary Cleveland" },
        { name: "Jacob Forrette" },
        { name: "Adam P." },
        { name: "Brendon Spencer" },
        { name: "Nick Khlystov" },
      ],
      note: `Faculty advisor: ${ADVISOR}. My specific responsibilities on this team will be added.`,
    },
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: [
          "The 2024 competition object was the Halligan bar — the pry, pike and fork tool designed by FDNY Deputy Chief Hugh Halligan in 1948 and carried on fire apparatus ever since. SFSA gave teams wide latitude to redesign it, within a 13.2 lb weight limit and 40 in length limit.",
          "The team built its redesign around conversations with firefighters, who identified the recurring failures of in-service bars: implements breaking off the handle, broken pikes and forks, and chipped adzes, plus a strong demand for better grip.",
        ],
      },
      {
        id: "design",
        title: "Design changes",
        body: ["Starting from measurements of a bar from the local fire department, the redesign addressed each firefighter concern:"],
        bullets: [
          "Round handle instead of hexagonal — better bending resistance with less material",
          "Handle shortened from 30 in to 23 in to reduce midpoint bending stress",
          "Shorter, thicker pike — the most common failure point",
          "Glow-in-the-dark paracord grip on the top and bottom 8 in of the handle",
          "Forks with one serrated and one cutting edge, plus a gap sized to standard door knobs",
          "Square shoulders for striking with an axe or sledge",
          "90° angle between adz and pike for leverage",
          "Notch in the adz to nest an axe handle when carried as \"the irons\"",
        ],
        media: [
          { kind: "cad", caption: "Pike and adz geometry — SolidWorks", src: `${HB}/cad-pike-adz.jpg` },
          { kind: "cad", caption: "Serrated fork edge", src: `${HB}/cad-serration.jpg`, fit: "contain" },
        ],
      },
      {
        id: "analysis",
        title: "Comparative FEA",
        body: [
          "The original (measurement-copied) bar and the redesigned bar were analyzed in SolidWorks under identical loads and constraints. The loads were chosen as a controlled comparison rather than a prediction of real-world stress.",
          "The redesign showed lower displacement under the same load, with a small increase in stress concentration at the adz-head/handle intersection — overall stresses stayed in a comparable range, supporting the structural changes.",
        ],
        media: [
          { kind: "diagram", caption: "Stress at adz / handle transition", src: `${HB}/fea-adz.jpg` },
          { kind: "diagram", caption: "Full-bar static analysis", src: `${HB}/fea-1.jpg`, fit: "contain" },
          { kind: "diagram", caption: "Redesigned bar displacement", src: `${HB}/fea-2.jpg`, fit: "contain" },
        ],
      },
      {
        id: "casting",
        title: "Material, casting & finishing",
        body: [
          "On D.W. Clark's recommendation the team selected 4140 steel — a chromium-molybdenum alloy steel valued for toughness, strength and impact resistance — and sand cast the bar at the foundry, using casting simulation to place feeding against shrinkage.",
          "Post-casting brought two real problems: a separation anomaly in the casting, resolved with D.W. Clark's casting engineers, and an oxidized surface layer that was removed with a belt sander, angle grinders and a Dremel before the bar was painted (leaving the working ends bare) and wrapped with paracord.",
        ],
        specs: [
          { label: "Tensile strength (typ.)", value: "655 MPa" },
          { label: "Yield strength (typ.)", value: "415 MPa" },
          { label: "Hardness (typ.)", value: "197 HBW" },
        ],
      },
      {
        id: "testing",
        title: "Testing with the Boston Fire Department",
        body: [
          "Testing was run with Boston Fire Department Engine 37 / Ladder 26 on a standard forcible-entry door jig: inward and outward entries at two fulcrum ratios (40:1 and 14:1), plus repeated bashing to test shock resistance.",
          "The bar forced entry successfully at both settings — the 40:1 ratio required less effort while 14:1 was sometimes faster. After testing it showed mild chipping on the adz and very limited handle bowing.",
        ],
      },
      {
        id: "lessons",
        title: "Lessons carried forward",
        body: [
          "This first year was an introduction to working with a production foundry — casting simulation, mold design, and dealing with defects after the pour. Those lessons shaped how I approached the next two years as team leader.",
        ],
      },
    ],
    gallery: [
      { kind: "final", caption: "Finished Halligan bar", src: `${HB}/final.jpg`, fit: "contain" },
      { kind: "cad", caption: "Pike and adz CAD", src: `${HB}/cad-pike-adz.jpg` },
      { kind: "diagram", caption: "FEA — adz / handle transition", src: `${HB}/fea-adz.jpg` },
      { kind: "diagram", caption: "FEA — full bar", src: `${HB}/fea-1.jpg`, fit: "contain" },
    ],
  },

  /* ============================================ 2025 — WASHINGTON SWORD */
  {
    slug: "2025-washington-sword",
    title: "2025 — George Washington Sword",
    shortTitle: "Washington Sword",
    tagline:
      "Team leader for a cast reproduction of George Washington's Bailey silver-and-ivory hilted cuttoe — modified 17-4 PH stainless, 3D-printed sand mold, MAGMA-guided gating, and cut testing at Iron Mountain Forge.",
    summary:
      "Led Wentworth's \"Stars and Steel\" team through a cast steel reproduction of George Washington's Bailey cuttoe, from historical research and CAD to a 3D-printed sand mold at D.W. Clark, H1075 heat treatment, CNC machining, hand engraving and performance testing.",
    categories: ["Metal Casting", "Mechanical Design", "Manufacturing Engineering"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "completed",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: "2025 competition",
    cover: { kind: "fabrication", caption: "3D-printed sand mold for the sword", src: `${SW}/printed-mold.jpg` },
    specs: [
      { label: "Competition year", value: "2025" },
      { label: "Product", value: "George Washington's Bailey cuttoe (reproduction)" },
      { label: "Team", value: "Stars and Steel" },
      { label: "My role", value: "Team Leader" },
      { label: "Material", value: "Modified 17-4 PH stainless steel" },
      { label: "Heat treatment", value: "H1075 — 1075 °F, 4 h, air cool" },
      { label: "Mold", value: "3D-printed sand mold" },
      { label: "Pour temperature", value: "2964 °F", note: "Target 2950–2980 °F" },
      { label: "Limits", value: "≤ 4.4 lb, ≤ 40 in overall" },
      { label: "Foundry partner", value: "D.W. Clark" },
    ],
    highlights: ["Team leader", "Modified 17-4 PH stainless", "MAGMA gating design", "Iron Mountain Forge testing"],
    contribution: {
      role: "Team Leader",
      personal: [
        "Led a team of five to produce a replica of the Bailey Silver & Ivory Hilted Cuttoe — design, casting, finishing and assembly",
        "Managed deadlines for the sword, the 30-page technical report and the 5-minute project video",
        "Worked with D.W. Clark engineers and machinists to refine the design for casting and machining",
      ],
      team: [
        "Historical research on Washington's swords",
        "CAD model and design for casting with D.W. Clark engineers",
        "MAGMA solidification and filling simulation",
        "SolidWorks stab and impact FEA",
        "3D-printed sand mold, pouring and shakeout",
        "H1075 heat treatment, CNC machining and surface grinding",
        "Engraving, guard welding, handle fabrication and assembly",
        "Performance testing at Iron Mountain Forge",
      ],
      teamMembers: [
        { name: "Jacob Forrette", role: "Team Leader" },
        { name: "Fabrice Fouron" },
        { name: "Brady McDonald" },
        { name: "Jake Elias" },
        { name: "Luis Leins" },
      ],
      note: `Faculty advisor: ${ADVISOR}.`,
    },
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: [
          "The 2025 competition asked teams to produce a functioning sword inspired by George Washington's collection, under a 2 kg (4.4 lb) weight limit and 1 m (40 in) length limit, with the competition documented for a streaming series.",
          "We chose to reproduce Washington's Bailey silver-and-ivory hilted cuttoe — a short, slightly curved officer's sword made by Fishkill, NY cutler John Bailey and now held by the Smithsonian's National Museum of American History. The design kept the original's form while adding American touches: a silver half-dollar set into the guard, engraved stars, a seashell pommel, and an American black cherry handle with silver inlay and an engraved eagle.",
        ],
        media: [{ kind: "cad", caption: "Final sword CAD model", src: `${SW}/cad.jpg`, fit: "contain" }],
      },
      {
        id: "material",
        title: "Material selection — modified 17-4 PH",
        body: [
          "The blade was cast in a 17-4 precipitation-hardening stainless steel with increased carbon for hardness and wear resistance, then aged to the H1075 condition. Compared with a plain high-carbon steel like 1095, it offered far better corrosion resistance while still holding a usable edge.",
        ],
        specs: [
          { label: "Condition", value: "H1075 (1075 °F, 4 h, air cool)" },
          { label: "Tensile strength", value: "165 ksi", note: "Typical datasheet value for H1075" },
          { label: "Yield strength", value: "150 ksi", note: "Typical datasheet value" },
          { label: "Hardness", value: "≈ 38 HRC (341 HB)", note: "Typical datasheet value" },
          { label: "Elongation", value: "16%", note: "Typical datasheet value" },
        ],
      },
      {
        id: "casting-design",
        title: "Casting design & simulation",
        body: [
          "After D.W. Clark's engineers reviewed the first model, thickness was added for machine stock and fillets softened sharp corners. Three layouts were considered: a vertical pour was rejected because metal travel over 12 in risked freezing before fill, and a horizontal pour with an end riser was rejected for hot-tear risk.",
          "The chosen layout was a horizontal pour with a wedge riser along the spine and a long, thin gate down the blade's spine. MAGMA solidification analysis confirmed the wedge riser was needed and that no chill was required given the blade's uniform thickness; a filling simulation checked flow before the mold went to the sand printer.",
        ],
        media: [
          { kind: "diagram", caption: "MAGMA simulation — gating and riser", src: `${SW}/sim-magma-1.jpg` },
          { kind: "diagram", caption: "MAGMA simulation — solidification", src: `${SW}/sim-magma-2.jpg` },
          { kind: "fabrication", caption: "3D-printed sand mold", src: `${SW}/printed-mold.jpg` },
        ],
      },
      {
        id: "pour-finish",
        title: "Pouring, heat treatment & finishing",
        body: [
          "The steel was melted in an induction furnace and poured at 2964 °F with the temperature monitored by immersion pyrometer, then left in the mold for 24 hours before shakeout. Gates and risers were cut off, scale was removed in a tumble blast, and the blade was aged to H1075.",
          "A CNC mill brought the blade to final shape and cut the fuller; a surface grinder removed milling marks. The two-piece guard was welded together and to the tang, the handle was slotted and fitted, and the edge was ground at 25°, opening to 35–40° near the hilt, then buffed to a mirror finish. Details were hand-engraved.",
        ],
        media: [
          { kind: "fabrication", caption: "Casting after shakeout", src: `${SW}/casting.jpg` },
          { kind: "final", caption: "Finished sword", src: `${SW}/final.jpg`, fit: "contain" },
        ],
      },
      {
        id: "testing",
        title: "Analysis & performance testing",
        body: [
          "SolidWorks simulations bracketed the expected loads: a 25 lb tip load (stab) produced up to 5,123 psi at the tip, and a 100 lb nonlinear impact load mid-blade produced up to 4,961 psi along the lower edge, with the highest stresses toward the handle.",
          "Physical testing was done with Iron Mountain Forge in Providence, RI. The sword cut a suspended fish in two strikes, cleanly cut nine secured carrots, stabbed into a hung pork shoulder, and chopped through a block of ice — where it struck the 2×4 underneath and picked up a small edge chip. It still sliced printer paper at the end of testing.",
        ],
        media: [
          { kind: "diagram", caption: "FEA — stab load", src: `${SW}/fea-stab.jpg` },
          { kind: "diagram", caption: "FEA — impact load", src: `${SW}/fea-impact.jpg` },
          { kind: "diagram", caption: "FEA — tip stress", src: `${SW}/fea-tip.jpg`, fit: "contain" },
        ],
      },
      {
        id: "lessons",
        title: "Lessons learned",
        body: [
          "The team's report highlighted heat-treatment adjustments, machining constraints and weight distribution as the main challenges. Leading this year meant coordinating a long chain of outside partners — foundry, machinists, testers — and that experience carried directly into running the 2026 axe project.",
        ],
      },
    ],
    gallery: [
      { kind: "final", caption: "Finished sword", src: `${SW}/final.jpg`, fit: "contain" },
      { kind: "cad", caption: "Sword CAD", src: `${SW}/cad.jpg`, fit: "contain" },
      { kind: "fabrication", caption: "3D-printed sand mold", src: `${SW}/printed-mold.jpg` },
      { kind: "fabrication", caption: "Casting after shakeout", src: `${SW}/casting.jpg` },
      { kind: "diagram", caption: "MAGMA simulation", src: `${SW}/sim-magma-1.jpg` },
      { kind: "diagram", caption: "FEA — stab load", src: `${SW}/fea-stab.jpg` },
    ],
  },

  /* ============================================== 2026 — HORSEMAN'S AXE */
  {
    slug: "2026-horsemans-axe",
    title: "2026 — Horseman's Axe",
    shortTitle: "Horseman's Axe",
    tagline:
      "Team lead for a cast CA6NM stainless horseman's axe — MAGMAsoft-guided direct-pour design, 3D-printed sand mold, weld repair after a quench crack, Charpy and hardness testing, and a hand-made hickory handle.",
    summary:
      "Directed a five-member team through the design, casting and validation of a horseman's axe in CA6NM martensitic stainless steel. The finished axe measured 30.75 in and stayed well under the 3.3 lb limit, survived a heat-treatment crack through weld repair and re-treatment, and passed NDT, Charpy, hardness and physical testing.",
    categories: ["Metal Casting", "Mechanical Design", "Manufacturing Engineering"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "completed",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: "2026 competition",
    cover: { kind: "fabrication", caption: "Axe head casting after shakeout", src: `${AXE}/casting.jpg` },
    specs: [
      { label: "Competition year", value: "2026" },
      { label: "Product", value: "Horseman's axe" },
      { label: "Team", value: "31in. of OSHA Non-Compliance" },
      { label: "My role", value: "Team Leader" },
      { label: "Alloy", value: "CA6NM martensitic stainless steel" },
      { label: "Mold", value: "Chemically bonded no-bake sand, 3D-printed" },
      { label: "Overall length", value: "30.75 in" },
      { label: "Total weight", value: "2.87 lb", note: "Limit 3.3 lb (1.5 kg); machined head 2.78 lb" },
      { label: "Hardness", value: "≈ 384 HB" },
      { label: "Charpy V-notch", value: "29.83 / 33.33 ft·lb", note: "Two specimens, room temperature" },
      { label: "Foundry partner", value: "D.W. Clark" },
    ],
    highlights: ["Team leader — 5 engineers", "MAGMAsoft gating design", "Weld repair + re-heat-treat", "Charpy · hardness · LPT · UT"],
    contribution: {
      role: "Team Leader",
      personal: [
        "Directed a five-member team through design, analysis, casting and validation to SFSA requirements",
        "Oversaw CAD modeling, mass distribution and geometry refinement against the weight, durability and manufacturability constraints",
        "Planned and coordinated the casting methodology — mold design considerations, material selection and post-cast processing",
        "Managed the schedule, technical documentation and verification artifacts through the final technical report and video",
        "Served as technical liaison between faculty advisors, the foundry partner and machinists",
      ],
      team: [
        "Onshape CAD of the axe head and 3D-printed sand mold",
        "MAGMAsoft solidification and filling simulation",
        "SolidWorks FEA",
        "Custom soft jaws and CNC programs for final machining",
        "Weld repair and heat-treatment sequence",
        "NDT, hardness and Charpy testing",
        "Hickory handle fabrication and physical testing",
      ],
      teamMembers: [
        { name: "Jacob Forrette", role: "Team Leader" },
        { name: "Josh Hofer" },
        { name: "Robert Stewart" },
        { name: "Luis Leins" },
        { name: "Brady McDonald" },
      ],
      note: `Faculty advisor: ${ADVISOR}. Sponsor foundry: D.W. Clark.`,
    },
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: [
          "The 2026 competition object was a horseman's axe — a compact, one-handed axe carried by mounted soldiers from the 14th to 17th centuries, with a curved blade for slicing and a rear spike for armor. Our design was inspired by a historical example at the Art Institute of Chicago, keeping the broad blade, rear spike and reinforced handle socket.",
          "The competition required a maximum weight of 1.5 kg (3.3 lb), so the design had to add material where strength and balance mattered and remove it everywhere else — while staying castable.",
        ],
      },
      {
        id: "cad-design",
        title: "CAD & design for casting",
        body: [
          "The axe was modeled in Onshape. Later iterations focused on castability: fillets to reduce stress concentrations and improve metal flow, extra machining stock where needed, and a refined handle-pocket region for better filling and strength. The spike and blade were thickened slightly relative to the historical reference for durability in impact testing, and non-critical material was removed to hold the weight limit.",
        ],
        media: [
          { kind: "cad", caption: "Onshape model of the axe head", src: `${AXE}/cad-head.jpg` },
          { kind: "cad", caption: "Onshape model of the 3D-printed sand mold", src: `${AXE}/cad-mold.jpg` },
        ],
      },
      {
        id: "material-selection",
        title: "Material selection — CA6NM",
        body: [
          "CA6NM is a low-carbon martensitic stainless casting alloy with nickel and molybdenum additions for toughness and corrosion resistance. It was chosen for its combination of strength, toughness, corrosion resistance and castability — a balance between hardness for edge retention and toughness for impact.",
        ],
        specs: [
          { label: "Nominal chemistry", value: "11.5–14% Cr · 3.5–4.5% Ni · 0.4–1.0% Mo · ≤ 0.06% C" },
          { label: "Tensile strength (typ.)", value: "~100–120 ksi" },
          { label: "Yield strength (typ.)", value: "~70–90 ksi" },
          { label: "Melt chemistry", value: "Verified by optical emission spectroscopy at pour" },
        ],
      },
      {
        id: "simulation",
        title: "Solidification simulation & gating design",
        body: [
          "MAGMAsoft simulation started with \"naked\" runs of the casting alone to find thermal gradients, solidification paths and hot spots, then evaluated rigging concepts. A direct-pour configuration was compared against conventional gating, and the final design used a direct pour with gas vents along the blade.",
          "Based on predicted porosity, the pour position was moved above the handle pocket to improve filling and feeding in that critical region. Filling simulations confirmed the metal stayed above liquidus throughout fill and that velocity stayed under 20 in/s to avoid turbulence and air entrapment.",
        ],
        media: [
          { kind: "diagram", caption: "Pouring velocity simulation", src: `${AXE}/sim-fill-velocity.jpg` },
          { kind: "diagram", caption: "Fraction liquid during solidification", src: `${AXE}/sim-fraction-liquid.jpg` },
          { kind: "diagram", caption: "Predicted porosity", src: `${AXE}/sim-porosity.jpg` },
          { kind: "diagram", caption: "Predicted microporosity", src: `${AXE}/sim-microporosity.jpg` },
        ],
      },
      {
        id: "pouring",
        title: "Pouring & solidification",
        specs: [
          { label: "Target pour range", value: "2950–3050 °F" },
          { label: "Tap temperature", value: "3016 °F", note: "CA6NM melts near 2750 °F" },
          { label: "Pour time", value: "3.47 s" },
          { label: "Total pour weight", value: "3.64 lb" },
          { label: "Casting yield", value: "≈ 86%", note: "Direct pour minimized gating material" },
        ],
        media: [{ kind: "fabrication", caption: "Axe head casting after shakeout", src: `${AXE}/casting.jpg` }],
      },
      {
        id: "casting-challenges",
        title: "Heat-treatment crack, weld repair & re-treatment",
        body: [
          "The first heat-treatment sequence — two annealing/austenitizing cycles at D.W. Clark followed by a full-body oil quench — cracked the axe around the base of the blade, where the thin blade meets the much larger thermal mass of the body. A quench-stress simulation afterward showed the same stress concentration.",
          "Liquid penetrant testing defined the crack. In consultation with the foundry, the cracks were ground out and GTAW welded with ER410NiMo filler using controlled preheat, interpass and post-heat. The part was re-austenitized to homogenize the heat-affected zone, tempered (the austenitize ran in 18 °F ambient and cooled faster than planned), and finished with an edge-only quench to harden the cutting edge without stressing the rest of the head.",
        ],
        specs: [
          { label: "Weld preheat", value: "212–338 °F" },
          { label: "Max interpass", value: "599 °F" },
          { label: "Re-austenitize", value: "1880 °F · 52 min" },
          { label: "Final temper", value: "1035 °F · 26 min" },
          { label: "Edge quench", value: "1872 °F" },
        ],
        media: [{ kind: "diagram", caption: "Quench stress-concentration simulation", src: `${AXE}/sim-quench-stress.jpg` }],
      },
      {
        id: "metallurgical-testing",
        title: "NDT & metallurgical testing",
        body: [
          "After repair, the head passed repeated visual inspection, liquid penetrant testing and ultrasonic testing with no remaining defects detected.",
          "Hardness on a polished riser sample measured about 384 HB. Two Charpy V-notch specimens told an instructive story: Sample 1 absorbed more energy (33.33 ft·lb) but its fracture surface showed a central gas cavity, so the higher value reflects defect-driven fracture; Sample 2 (29.83 ft·lb) had a clean, uniform fracture and is the more representative measure of the material.",
        ],
        media: [
          { kind: "photo", caption: "Charpy specimen fracture surface", src: `${AXE}/charpy-1.jpg` },
          { kind: "photo", caption: "Charpy specimen fracture surface", src: `${AXE}/charpy-2.jpg` },
        ],
      },
      {
        id: "fea",
        title: "Structural analysis",
        body: [
          "SolidWorks FEA applied a 500 lbf load to the blade region to estimate deformation and stress under severe service. Predicted maximum deformation was under 0.0007 in, with the highest stresses at geometric transitions — supporting the final geometry before fabrication.",
        ],
        media: [
          { kind: "diagram", caption: "FEA — 500 lbf blade load", src: `${AXE}/fea-500lbf.jpg` },
          { kind: "diagram", caption: "FEA — full edge load", src: `${AXE}/fea-edge.jpg` },
        ],
      },
      {
        id: "machining-handle",
        title: "Machining, finishing & hickory handle",
        body: [
          "Custom soft jaws were designed, CNC-programmed and machined to locate and clamp the casting, then CNC programs cut the handle pocket and blade contour. A manual mill drilled 3/16 in rivet holes for the straps, and the head was ground, sanded and polished to a mirror finish.",
          "The handle is American black hickory with the grain oriented along the main load axis — cut from 2 × 3.125 × 27 in blanks on a bandsaw, shaped with a flap disc and belt sander, oiled with linseed oil and lightly burnt. It fits an oval pocket machined into the head to resist twisting under impact.",
        ],
        specs: [
          { label: "Handle length", value: "25 5/8 in" },
          { label: "Blade length (along curve)", value: "3.699 in" },
          { label: "Blade thickness", value: "0.514 in base · 0.172 in bevel" },
          { label: "Head wall thickness", value: "0.278 in min" },
        ],
      },
      {
        id: "performance-testing",
        title: "Physical performance testing",
        body: [
          "The axe was repeatedly struck into solid wood to test edge retention and handle stability, then against thin sheet metal to test toughness and chipping resistance. Afterward it showed no cracks, no edge failure and no handle loosening, and it kept its cutting ability.",
        ],
        media: [{ kind: "final", caption: "Finished horseman's axe", src: `${AXE}/final.jpg`, fit: "contain" }],
      },
      {
        id: "lessons",
        title: "Engineering lessons learned",
        bullets: [
          "Thin-to-thick section transitions need a quench strategy, not just a casting strategy",
          "Weld repair plus re-heat-treatment, verified by NDT, can recover a cracked high-alloy casting",
          "A single Charpy number can mislead — read the fracture surface",
          "Simulation-driven gating (direct pour, relocated above the pocket) paid off in yield and soundness",
        ],
      },
    ],
    timeline: {
      title: "Project development",
      entries: [
        { id: "a1", label: "01", title: "Research & CAD", status: "completed", summary: "Historical reference and Onshape model under the 3.3 lb limit." },
        { id: "a2", label: "02", title: "Simulation", status: "completed", summary: "MAGMAsoft solidification and fill; direct-pour gating moved above the handle pocket." },
        { id: "a3", label: "03", title: "Mold & pour", status: "completed", summary: "3D-printed sand mold; poured at 3016 °F in 3.47 s." },
        { id: "a4", label: "04", title: "Heat treat", status: "completed", summary: "Quench crack at the blade root identified." },
        { id: "a5", label: "05", title: "Repair & NDT", status: "completed", summary: "GTAW repair, re-austenitize, temper, edge quench; LPT and UT clean." },
        { id: "a6", label: "06", title: "Machine & test", status: "completed", summary: "CNC machining, hickory handle, Charpy, hardness and physical tests." },
      ],
    },
    models: [{ title: "Horseman's axe head", src: "/models/2026-axe-head.glb", description: "Export the Onshape model as GLB to /public/models/2026-axe-head.glb." }],
    gallery: [
      { kind: "final", caption: "Finished axe", src: `${AXE}/final.jpg`, fit: "contain" },
      { kind: "fabrication", caption: "Casting after shakeout", src: `${AXE}/casting.jpg` },
      { kind: "cad", caption: "Axe head — Onshape", src: `${AXE}/cad-head.jpg` },
      { kind: "cad", caption: "Sand mold — Onshape", src: `${AXE}/cad-mold.jpg` },
      { kind: "diagram", caption: "MAGMAsoft fill velocity", src: `${AXE}/sim-fill-velocity.jpg` },
      { kind: "diagram", caption: "FEA — 500 lbf", src: `${AXE}/fea-500lbf.jpg` },
      { kind: "photo", caption: "Charpy fracture surface", src: `${AXE}/charpy-2.jpg` },
    ],
  },

  /* ============================================== 2027 — FLANGED MACE */
  {
    slug: "2027-flanged-mace",
    title: "2027 — Flanged Mace",
    shortTitle: "Flanged Mace",
    tagline:
      "Team leader for a 16th-century-inspired seven-flange mace — spiral grip, pierced decorative flanges and casting-friendly fillets, designed for 3D-printed sand molds. In development.",
    summary:
      "Leading Wentworth's \"Lockout Tagout Knockout\" team on a cast-steel interpretation of a late-16th-century Italian flanged mace: 25.5 in long, seven flanges at 51.43° spacing, an 11 in spiral grip, and a 3.25 lb weight limit.",
    categories: ["Metal Casting", "Design for Additive Manufacturing", "Mechanical Design"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "in-progress",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: "2027 competition",
    cover: { kind: "drawing", caption: "Proposed seven-flange mace — design sheet", src: `${MACE}/design-drawing.jpg`, fit: "contain" },
    specs: [
      { label: "Competition year", value: "2027" },
      { label: "Product", value: "Flanged mace" },
      { label: "Team", value: "Lockout Tagout Knockout" },
      { label: "My role", value: "Team Leader" },
      { label: "Overall length", value: "25.50 in" },
      { label: "Head", value: "6.75 in long · 4.50 in max diameter" },
      { label: "Flanges", value: "7 at 51.43° spacing · ~0.32 in thick" },
      { label: "Grip", value: "Spiral, ~11 in long · 1.15 in dia." },
      { label: "Weight limit", value: "≤ 3.25 lb" },
      { label: "CAD", value: "Onshape" },
      { label: "Mold process", value: "3D-printed sand (ExOne S101 Max)" },
      { label: "Alloy", note: "To be selected" },
    ],
    highlights: ["Team leader", "Seven-flange head", "Spiral grip", "Designed for printed sand molds"],
    contribution: {
      role: "Team Leader",
      personal: ["Leading the five-member team through the 2027 design and casting effort"],
      team: [
        "Historical research on 15th–16th-century maces",
        "CAD modeling in Onshape",
        "Seven-flange head with pierced decorative flanges",
        "Spiral grip design",
        "Design for metal casting and for 3D-printed sand molds",
        "Safety-lanyard attachment per competition rules",
      ],
      teamMembers: [
        { name: "Jacob Forrette", role: "Team Leader" },
        { name: "Luis Leins" },
        { name: "Lillian Learned" },
        { name: "Mohamed Fares" },
        { name: "Colin Ellis" },
      ],
      note: `Faculty advisor: ${ADVISOR}.`,
    },
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: [
          "The flanged mace developed as plate armor improved: instead of cutting, its radiating flanges concentrate an impact. Our 2027 design is a modern cast-steel interpretation of a 16th-century European flanged mace that keeps its recognizable historical character.",
          "The proposed mace is 25.50 in overall, with a 6.75 in head, a 4.50 in maximum head diameter, seven equally spaced flanges, a spiral grip, decorative flange openings, rounded edges and casting-friendly fillets.",
        ],
        media: [{ kind: "drawing", caption: "Design sheet — elevation, head end view, flange and grip details", src: `${MACE}/design-drawing.jpg`, fit: "contain" }],
      },
      {
        id: "historical-research",
        title: "Historical research",
        body: [
          "The primary reference is an Italian mace dated c. 1575–1600 in the Metropolitan Museum of Art, with seven triangular flanges, decorative geometry, a spiral grip and a wrist-strap opening — which also maps neatly onto the competition's required safety-lanyard hole (≥ 0.25 in).",
          "A second Italian mace (c. 1550–1600) at the Met provides a dimensional check: 25.19 in long with a 6.50 in head and 5.00 in width, weighing 2 lb 15 oz — very close to our 25.50 in / 6.75 in / 4.50 in proposal. Other Met examples confirm the dimensions sit within the range of surviving maces.",
        ],
        specs: [
          { label: "Reference — overall length", value: "25.19 in", note: "Proposed: 25.50 in" },
          { label: "Reference — head length", value: "6.50 in", note: "Proposed: 6.75 in" },
          { label: "Reference — head width", value: "5.00 in", note: "Proposed: 4.50 in" },
          { label: "Reference — weight", value: "2 lb 15 oz", note: "Proposed target: ≤ 3.25 lb" },
        ],
      },
      {
        id: "dfam",
        title: "Design for casting & additive manufacturing",
        body: [
          "Flanges are nominally ~0.32 in thick and blend into the head through generous root fillets; sharp internal corners are avoided where practical to improve fill and reduce stress concentrations.",
          "The decorative openings in each flange do double duty: they echo pierced flanges on late-15th-century maces and remove mass from broad flange surfaces to hold the 3.25 lb limit. Printing the mold lets these openings, fillets and the spiral grip be cast directly, reducing secondary machining.",
        ],
        bullets: [
          "Flange section thickness vs. fill and solidification",
          "Root fillets between flanges and hub",
          "Rounded, non-sharpened flange edges",
          "Dimensional control of fine decorative features",
        ],
      },
      {
        id: "next",
        title: "Next steps",
        pending: "Alloy selection, MAGMA simulation, printed-mold development, pouring and testing are ahead. This page will be updated as the project progresses.",
      },
    ],
    timeline: {
      title: "Development status",
      entries: [
        { id: "m1", label: "01", title: "Historical research", status: "completed", summary: "Historical-authenticity report referencing Met Museum examples." },
        { id: "m2", label: "02", title: "Concept design", status: "completed", summary: "Seven-flange, spiral-grip design sheet." },
        { id: "m3", label: "03", title: "CAD & DfC review", status: "in-progress" },
        { id: "m4", label: "04", title: "Simulation & mold", status: "planned" },
        { id: "m5", label: "05", title: "Pour & heat treat", status: "planned" },
        { id: "m6", label: "06", title: "Finish & test", status: "planned" },
      ],
    },
    models: [{ title: "Flanged mace", src: "/models/2027-mace.glb", description: "Export from Onshape as GLB to /public/models/2027-mace.glb." }],
    gallery: [{ kind: "drawing", caption: "Design sheet", src: `${MACE}/design-drawing.jpg`, fit: "contain" }],
    updates: [{ date: "Oct 2026", text: "Historical-authenticity report and concept design sheet completed." }],
  },
];

export const castInSteelTimeline: TimelineEntry[] = castInSteelYears.map((p) => ({
  id: p.slug,
  label: p.period?.replace(" competition", "") ?? p.shortTitle ?? p.title,
  title: p.shortTitle ?? p.title,
  summary: p.summary,
  status: p.status,
  href: `/cast-in-steel/${p.slug}`,
  meta: p.contribution?.role,
}));

export function getCastYear(slug: string) {
  return castInSteelYears.find((p) => p.slug === slug);
}
