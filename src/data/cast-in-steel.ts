/**
 * CAST IN STEEL — FOUR-YEAR COLLECTION
 *
 * Each competition year is a full Project rendered by the shared project template at
 * /cast-in-steel/[slug]. Image paths are pre-filled with suggested file names: drop a
 * photo at that path in /public and it replaces the placeholder automatically.
 *
 * Years 1 and 2 are intentionally empty shells — fill in the year, object, role and
 * details when ready. Nothing about those years has been assumed.
 */
import type { Project, Spec, TimelineEntry } from "@/lib/types";

const AXE = "/images/cast-in-steel/2026-axe";
const MACE = "/images/cast-in-steel/2027-mace";

/** General description of the competition, shown on the collection page. */
export const castInSteelOverview = {
  title: "Cast in Steel",
  subtitle: "Four Years of Engineering Design & Manufacturing",
  organization: "Steel Founders' Society of America (SFSA)",
  institution: "Wentworth Institute of Technology",
  foundryPartner: "DW Clark (confirmed years noted on each project)",
  intro: [
    "Cast in Steel is the Steel Founders' Society of America's annual student competition. Each year, university teams design a steel casting around a set theme object, then work with a foundry partner to produce it — taking the part from concept and CAD through mold making, pouring, heat treatment, finishing and testing.",
    "I competed for four consecutive years. Taken together, the projects trace my development from contributing team member to team lead, and from conventionally molded castings toward fully 3D-printed sand molds.",
  ],
};

/** Generic steel-casting workflow (shown as a process diagram on the collection page). */
export const castingWorkflow = {
  title: "Steel casting workflow",
  type: "flow" as const,
  caption:
    "The general sequence every competition year follows. Each year's page documents how that specific part moved through it.",
  nodes: [
    { id: "design", label: "Design & CAD", detail: "Geometry, requirements, casting design" },
    { id: "mold", label: "Mold & Cores", detail: "No-bake sand or 3D-printed sand" },
    { id: "pour", label: "Melt & Pour", detail: "Pouring and solidification" },
    { id: "heat", label: "Heat Treat", detail: "Develop final properties" },
    { id: "inspect", label: "Inspect & Repair", detail: "NDT, weld repair as required" },
    { id: "finish", label: "Machine & Finish", detail: "Final geometry and assembly" },
    { id: "test", label: "Test & Validate", detail: "Mechanical and performance testing" },
  ],
};

const pendingTestResults: Spec[] = [
  { label: "Charpy impact energy", note: "Test temperature and specimen orientation to be documented" },
  { label: "Hardness", note: "Scale (HRC / HB) and test locations to be documented" },
  { label: "Final assembled weight", note: "Requirement: ≤ 3.3 lb overall" },
  { label: "Physical performance testing", note: "Method and observations to be documented" },
];

export const castInSteelYears: Project[] = [
  /* ------------------------------------------------------------------ YEAR 1 */
  {
    slug: "year-1",
    title: "Cast in Steel — Competition Year 1",
    shortTitle: "Year 1",
    tagline: "Competition object and project details to be added.",
    summary:
      "First year of four in the SFSA Cast in Steel competition. Product, role, team and engineering details will be published here.",
    categories: ["Metal Casting", "Mechanical Design"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "completed",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: undefined,
    cover: { kind: "final", caption: "Year 1 — finished casting", src: "/images/cast-in-steel/year-1/cover.jpg" },
    specs: [
      { label: "Competition year" },
      { label: "Product designed" },
      { label: "My role" },
      { label: "Material" },
      { label: "Foundry partner" },
    ],
    contribution: {
      personal: [],
      note: "Personal contributions for this year will be added.",
    },
    sections: [
      { id: "overview", title: "Project overview", pending: "Competition theme, product and design intent." },
      { id: "cad-design", title: "CAD design process", pending: "Design iterations, CAD model and casting design decisions." },
      { id: "casting-process", title: "Casting process", pending: "Molding method, pouring and solidification." },
      { id: "testing", title: "Testing & validation", pending: "Inspection and test methods with results." },
      { id: "lessons", title: "Engineering lessons learned", pending: "Key takeaways carried into later years." },
    ],
    gallery: [
      { kind: "cad", caption: "CAD model", src: "/images/cast-in-steel/year-1/cad-01.jpg" },
      { kind: "fabrication", caption: "Mold / pouring", src: "/images/cast-in-steel/year-1/fab-01.jpg" },
      { kind: "final", caption: "Finished product", src: "/images/cast-in-steel/year-1/final-01.jpg" },
    ],
    documents: [{ title: "Year 1 competition report", kind: "report", file: "/documents/cast-in-steel/year-1-report.pdf" }],
  },

  /* ------------------------------------------------------------------ YEAR 2 */
  {
    slug: "year-2",
    title: "Cast in Steel — Competition Year 2",
    shortTitle: "Year 2",
    tagline: "Competition object and project details to be added.",
    summary:
      "Second year of four in the SFSA Cast in Steel competition. Product, role, team and engineering details will be published here.",
    categories: ["Metal Casting", "Mechanical Design"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "completed",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: undefined,
    cover: { kind: "final", caption: "Year 2 — finished casting", src: "/images/cast-in-steel/year-2/cover.jpg" },
    specs: [
      { label: "Competition year" },
      { label: "Product designed" },
      { label: "My role" },
      { label: "Material" },
      { label: "Foundry partner" },
    ],
    contribution: {
      personal: [],
      note: "Personal contributions for this year will be added.",
    },
    sections: [
      { id: "overview", title: "Project overview", pending: "Competition theme, product and design intent." },
      { id: "cad-design", title: "CAD design process", pending: "Design iterations, CAD model and casting design decisions." },
      { id: "casting-process", title: "Casting process", pending: "Molding method, pouring and solidification." },
      { id: "testing", title: "Testing & validation", pending: "Inspection and test methods with results." },
      { id: "lessons", title: "Engineering lessons learned", pending: "Key takeaways carried into later years." },
    ],
    gallery: [
      { kind: "cad", caption: "CAD model", src: "/images/cast-in-steel/year-2/cad-01.jpg" },
      { kind: "fabrication", caption: "Mold / pouring", src: "/images/cast-in-steel/year-2/fab-01.jpg" },
      { kind: "final", caption: "Finished product", src: "/images/cast-in-steel/year-2/final-01.jpg" },
    ],
    documents: [{ title: "Year 2 competition report", kind: "report", file: "/documents/cast-in-steel/year-2-report.pdf" }],
  },

  /* ------------------------------------------------------------- 2026 — AXE */
  {
    slug: "2026-horsemans-axe",
    title: "2026 — Horseman's Axe",
    shortTitle: "Horseman's Axe",
    tagline:
      "Team lead for a cast CA6NM stainless horseman's axe — from casting design and printed sand cores through heat treatment, weld repair, metallurgical testing and a hand-made hickory handle.",
    summary:
      "Led the Wentworth team through the design and manufacture of a cast-steel horseman's axe under a 3.3 lb overall weight limit, using CA6NM martensitic stainless, no-bake sand molding with 3D-printed sand cores, and a full inspection and testing program.",
    categories: ["Metal Casting", "Mechanical Design", "Manufacturing Engineering"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "completed",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: "2026 competition",
    cover: { kind: "final", caption: "Finished horseman's axe", src: `${AXE}/cover.jpg` },
    specs: [
      { label: "Competition year", value: "2026" },
      { label: "Product", value: "Horseman's axe" },
      { label: "My role", value: "Team Lead" },
      { label: "Alloy", value: "CA6NM cast stainless steel" },
      { label: "Molding", value: "No-bake sand + 3D-printed sand cores" },
      { label: "Weight limit", value: "≤ 3.3 lb overall" },
      { label: "Handle", value: "Hickory" },
      { label: "Foundry partner", note: "To be confirmed" },
    ],
    highlights: [
      "Team lead — design through final testing",
      "CA6NM martensitic stainless casting",
      "3D-printed sand cores in no-bake molds",
      "Charpy impact + hardness testing",
    ],
    contribution: {
      role: "Team Lead",
      personal: [
        "Served as team lead for the design and manufacturing of the axe",
        "Coordinated the team's work across design, casting, heat treatment, testing and finishing",
      ],
      team: [
        "CAD modeling and casting design",
        "No-bake sand molding with 3D-printed sand cores",
        "Pouring and solidification",
        "Heat treatment and weld repair",
        "Nondestructive inspection",
        "Charpy impact and hardness testing",
        "Final machining and fabrication",
        "Hickory handle design and manufacturing",
        "Physical performance testing",
      ],
      teamMembers: [],
      note: "Team member names and an individual breakdown of my hands-on work will be added.",
    },
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: [
          "The 2026 competition object was a horseman's axe — a compact, single-handed axe historically carried by mounted soldiers. I led our team through the full product cycle: defining the design, developing a castable geometry, working through molding and pouring, heat treating and repairing the casting, verifying it through inspection and mechanical testing, and finishing it into a usable tool with a hickory handle.",
          "The design was constrained by a maximum overall weight of 3.3 pounds, which put real pressure on the head geometry: enough mass and section thickness to cast soundly and survive impact, without exceeding the limit once the handle was fitted.",
        ],
      },
      {
        id: "cad-design",
        title: "CAD design & casting design",
        body: [
          "The head was modeled in CAD with the casting process in mind from the start — section transitions, draft, and the location of cored features all affect how the metal fills and solidifies. Design for casting and design for the weight limit had to be resolved together.",
        ],
        pending: "Add design iterations, key dimensions, mass-property checks and screenshots of the final CAD.",
        media: [
          { kind: "cad", caption: "Axe head — CAD model", src: `${AXE}/cad-head.jpg` },
          { kind: "drawing", caption: "Axe head — engineering drawing", src: `${AXE}/drawing-head.jpg` },
        ],
      },
      {
        id: "material-selection",
        title: "Material selection — CA6NM",
        body: [
          "CA6NM is a low-carbon, roughly 13% chromium / 4% nickel martensitic stainless casting alloy. It is widely used for hydro-turbine runners, pump and valve components because it combines high strength with good toughness, reasonable corrosion resistance, and better weldability than higher-carbon martensitic grades.",
          "For an impact tool, those properties map directly onto the requirements: toughness under shock loading, corrosion resistance for an exposed edge, and repairability by welding if casting defects need to be addressed.",
        ],
        specs: [
          { label: "Designation", value: "CA6NM (ASTM A743 / A487 family)" },
          { label: "Type", value: "Martensitic stainless steel, cast" },
          { label: "Nominal chemistry", value: "11.5–14.0% Cr · 3.5–4.5% Ni · 0.4–1.0% Mo · ≤0.06% C" },
          { label: "Selection rationale", note: "Team's documented reasoning to be added" },
        ],
      },
      {
        id: "mold-design",
        title: "Mold design & manufacturing",
        body: [
          "The axe was produced in no-bake sand molds, with 3D-printed sand cores used to form internal features. Printing the cores removes the need for core boxes and makes geometry practical that would be difficult or impossible to pull from a conventional pattern.",
        ],
        pending: "Add parting-line strategy, gating and riser design, core design and photos of the mold.",
        media: [
          { kind: "fabrication", caption: "3D-printed sand core", src: `${AXE}/core.jpg` },
          { kind: "fabrication", caption: "No-bake mold assembly", src: `${AXE}/mold.jpg` },
        ],
      },
      {
        id: "casting-challenges",
        title: "Pouring, solidification & casting challenges",
        body: [
          "An axe head pairs a thin blade with a heavier eye section — uneven section thickness that has to be managed through feeding and solidification so shrinkage ends up in the risers rather than the part.",
        ],
        pending: "Document the specific challenges encountered during pouring and solidification, any defects found, and how they were addressed.",
        media: [{ kind: "fabrication", caption: "Pouring", src: `${AXE}/pour.jpg` }],
      },
      {
        id: "heat-treatment",
        title: "Heat treatment",
        body: [
          "CA6NM develops its properties through heat treatment — typically an austenitize and air cool to form martensite, followed by tempering to restore toughness. Heat treatment and any weld repair have to be sequenced so the repaired areas end up with properties consistent with the rest of the casting.",
        ],
        specs: [
          { label: "Austenitize", note: "Temperature and hold time to be documented" },
          { label: "Temper", note: "Temperature and hold time to be documented" },
          { label: "Sequence vs. weld repair", note: "To be documented" },
        ],
      },
      {
        id: "weld-repair-ndt",
        title: "Weld repair & nondestructive inspection",
        body: [
          "The casting was inspected nondestructively and weld repaired where required — a normal part of steel-foundry practice, and one of the reasons a weldable alloy was valuable on this project.",
        ],
        pending: "Add the NDT method(s) used, indications found, repair procedure and post-repair inspection.",
      },
      {
        id: "metallurgical-testing",
        title: "Metallurgical & mechanical testing",
        body: [
          "Charpy impact testing and hardness testing were used to verify that the heat-treated material had the toughness and hardness the design called for. Results are shown here only once they have been compiled from the test records.",
        ],
        specs: pendingTestResults,
      },
      {
        id: "machining-handle",
        title: "Machining, finishing & hickory handle",
        body: [
          "After heat treatment and inspection, the head went through final machining and fabrication. The team designed and made a hickory handle — hickory being the traditional choice for striking tools because of its toughness and shock absorption — and fitted it to the head.",
        ],
        pending: "Add machining operations, edge geometry, handle design and fitting method.",
        media: [
          { kind: "fabrication", caption: "Final machining", src: `${AXE}/machining.jpg` },
          { kind: "fabrication", caption: "Hickory handle", src: `${AXE}/handle.jpg` },
        ],
      },
      {
        id: "performance-testing",
        title: "Physical performance testing",
        pending: "Describe the performance tests carried out on the finished axe and what they showed.",
      },
      {
        id: "team-leadership",
        title: "Team leadership",
        body: [
          "As team lead, my job was to keep the design, foundry and testing work moving together — making sure decisions made in CAD were workable in the mold, that heat treatment and repair were sequenced correctly, and that testing produced evidence the part met its requirements.",
        ],
        pending: "Add team structure, how work was divided, and how schedule and foundry coordination were handled.",
      },
      {
        id: "lessons",
        title: "Engineering lessons learned",
        pending: "Key technical and leadership takeaways — what you would repeat and what you would change.",
      },
    ],
    timeline: {
      title: "Project development",
      entries: [
        { id: "a1", label: "01", title: "Design & CAD", status: "completed", summary: "Concept, CAD modeling and casting design against the 3.3 lb limit." },
        { id: "a2", label: "02", title: "Molding", status: "completed", summary: "No-bake sand molds with 3D-printed sand cores." },
        { id: "a3", label: "03", title: "Pour & solidify", status: "completed", summary: "Casting poured in CA6NM stainless." },
        { id: "a4", label: "04", title: "Heat treat & repair", status: "completed", summary: "Heat treatment, weld repair and NDT." },
        { id: "a5", label: "05", title: "Test", status: "completed", summary: "Charpy impact and hardness testing." },
        { id: "a6", label: "06", title: "Finish & validate", status: "completed", summary: "Machining, hickory handle and performance testing." },
      ],
    },
    models: [{ title: "Horseman's axe head", src: "/models/2026-axe-head.glb", description: "Upload the axe head as a GLB to replace the demonstration geometry." }],
    gallery: [
      { kind: "cad", caption: "CAD — axe head", src: `${AXE}/gallery-cad-01.jpg` },
      { kind: "fabrication", caption: "Printed sand cores", src: `${AXE}/gallery-fab-01.jpg` },
      { kind: "fabrication", caption: "Shakeout", src: `${AXE}/gallery-fab-02.jpg` },
      { kind: "fabrication", caption: "Charpy specimens", src: `${AXE}/gallery-test-01.jpg` },
      { kind: "final", caption: "Finished axe", src: `${AXE}/gallery-final-01.jpg` },
      { kind: "video", caption: "Performance testing", src: "/videos/2026-axe-testing.mp4" },
    ],
    documents: [
      { title: "Competition technical report", kind: "report", file: "/documents/cast-in-steel/2026-axe-report.pdf" },
      { title: "Axe head drawing", kind: "drawing", file: "/documents/cast-in-steel/2026-axe-drawing.pdf" },
      { title: "Test data summary (Charpy & hardness)", kind: "manufacturing", file: "/documents/cast-in-steel/2026-axe-test-data.pdf" },
    ],
  },

  /* ----------------------------------------------------- 2027 — FLANGED MACE */
  {
    slug: "2027-flanged-mace",
    title: "2027 — Flanged Mace",
    shortTitle: "Flanged Mace",
    tagline:
      "A historically inspired seven-flange mace designed in Onshape for 3D-printed sand molds on an ExOne S101 Max — currently in development.",
    summary:
      "Designing a 16th-century-inspired flanged mace with a seven-flange head, decorative surface geometry and a spiral grip, developed specifically for casting in fully 3D-printed sand molds.",
    categories: ["Metal Casting", "Design for Additive Manufacturing", "Mechanical Design"],
    disciplines: ["Metal Casting", "Mechanical Design", "Manufacturing"],
    status: "in-progress",
    organization: "Steel Founders' Society of America (SFSA)",
    institution: "Wentworth Institute of Technology",
    period: "2027 competition",
    cover: { kind: "cad", caption: "Flanged mace — CAD render", src: `${MACE}/cover.jpg` },
    specs: [
      { label: "Competition year", value: "2027" },
      { label: "Product", value: "Flanged mace" },
      { label: "Historical reference", value: "16th-century flanged maces" },
      { label: "Head design", value: "Seven flanges" },
      { label: "CAD platform", value: "Onshape" },
      { label: "Mold process", value: "3D-printed sand mold" },
      { label: "Sand printer", value: "ExOne S101 Max" },
      { label: "My role", note: "To be added" },
      { label: "Alloy", note: "To be selected / documented" },
    ],
    highlights: [
      "Seven-flange head with decorative surface geometry",
      "Spiral grip design",
      "Designed for 3D-printed sand molds",
      "ExOne S101 Max binder-jet sand printer",
    ],
    contribution: {
      personal: [],
      team: [
        "16th-century historical design research",
        "CAD modeling in Onshape",
        "Seven-flange head and decorative surface design",
        "Spiral handle / grip design",
        "Design for additive manufacturing and for metal casting",
        "3D-printed sand mold development",
        "Evaluation of casting geometry and manufacturing feasibility",
      ],
      note: "My specific role and responsibilities on this year's team will be added.",
    },
    sections: [
      {
        id: "overview",
        title: "Project overview",
        body: [
          "This year's object is a flanged mace — a weapon whose radiating flanges were designed to concentrate impact on armor. The design draws on 16th-century examples and carries a seven-flange head, decorative surface features and a spiral grip.",
          "That combination of thin radiating flanges, ornamental detail and a twisted grip is exactly the kind of geometry that is difficult to produce with a conventional pattern and parting line, which is why the project is being developed around fully 3D-printed sand molds.",
        ],
      },
      {
        id: "historical-research",
        title: "Historical design research",
        body: [
          "The geometry starts from research into 16th-century flanged maces — flange count and profile, head-to-shaft proportions, and the decorative vocabulary of the period — so the final design is historically grounded rather than generic.",
        ],
        pending: "Add reference pieces, sketches and how each informed the design.",
        media: [{ kind: "drawing", caption: "Historical reference sketches", src: `${MACE}/reference-sketches.jpg` }],
      },
      {
        id: "cad-design",
        title: "CAD modeling in Onshape",
        body: [
          "The head and grip are modeled in Onshape. The seven-flange head and the spiral grip are being developed as parametric features so flange thickness, spacing and twist can be adjusted as casting feasibility is evaluated.",
        ],
        media: [
          { kind: "cad", caption: "Seven-flange head — CAD", src: `${MACE}/cad-head.jpg` },
          { kind: "cad", caption: "Spiral grip — CAD", src: `${MACE}/cad-grip.jpg` },
          { kind: "cad", caption: "Decorative surface detail", src: `${MACE}/cad-detail.jpg` },
        ],
      },
      {
        id: "dfam",
        title: "Design for additive manufacturing & casting",
        body: [
          "Printing the mold directly changes the design rules. Draft and parting lines matter far less, so the decorative geometry can be molded as designed — but the casting itself still has to fill and feed: flange thickness, transitions into the hub, and the path molten steel takes through the mold all govern whether the part comes out sound.",
        ],
        bullets: [
          "Flange section thickness vs. fill and solidification",
          "Fillet transitions between flanges and hub",
          "Mold wall thickness, venting and sand removal from the printed mold",
          "Dimensional control of fine decorative features",
        ],
      },
      {
        id: "sand-printing",
        title: "3D-printed sand mold development — ExOne S101 Max",
        body: [
          "Mold development targets the ExOne S101 Max, a large-format binder-jetting sand printer. Work at this stage focuses on mold complexity, how the mold is split and assembled, and dimensional control of the printed features.",
        ],
        pending: "Add mold segmentation, print parameters and test-print results once available.",
        media: [{ kind: "fabrication", caption: "Printed mold section", src: `${MACE}/printed-mold.jpg` }],
      },
      {
        id: "feasibility",
        title: "Casting geometry & manufacturing feasibility",
        pending: "Evaluation of casting geometry and manufacturing feasibility is ongoing. Findings will be posted as the design matures.",
      },
    ],
    timeline: {
      title: "Development status",
      entries: [
        { id: "m1", label: "01", title: "Historical research", status: "in-progress" },
        { id: "m2", label: "02", title: "CAD in Onshape", status: "in-progress" },
        { id: "m3", label: "03", title: "DfAM / DfC review", status: "in-progress" },
        { id: "m4", label: "04", title: "Printed mold", status: "planned" },
        { id: "m5", label: "05", title: "Pour & heat treat", status: "planned" },
        { id: "m6", label: "06", title: "Finish & test", status: "planned" },
      ],
    },
    models: [
      { title: "Flanged mace head", src: "/models/2027-mace-head.glb", description: "Export the head from Onshape as GLB to /public/models/2027-mace-head.glb." },
      { title: "Spiral grip", src: "/models/2027-mace-grip.glb" },
    ],
    gallery: [
      { kind: "cad", caption: "Head — isometric", src: `${MACE}/gallery-cad-01.jpg` },
      { kind: "cad", caption: "Flange profile", src: `${MACE}/gallery-cad-02.jpg` },
      { kind: "cad", caption: "Spiral grip", src: `${MACE}/gallery-cad-03.jpg` },
      { kind: "drawing", caption: "Head drawing", src: `${MACE}/gallery-drawing-01.jpg` },
      { kind: "fabrication", caption: "Mold design", src: `${MACE}/gallery-mold-01.jpg` },
    ],
    updates: [{ date: "Fall 2026", text: "Project underway — historical research and Onshape CAD in progress." }],
  },
];

/** Interactive timeline on the collection page — order is chronological. */
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
