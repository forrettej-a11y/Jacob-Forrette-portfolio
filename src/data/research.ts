/**
 * MASTER'S THESIS — RESEARCH PAGE CONTENT
 * Everything in `results` stays labelled "Pending validation" until you replace it.
 */
import type { DocumentItem, TimelineEntry } from "@/lib/types";

export const research = {
  title: "Flexible Automation in High-Mix, Low-Volume Manufacturing",
  degree: "M.S. Mechanical Engineering — Thesis",
  institution: "Wentworth Institute of Technology",
  expected: "Expected August 2027",
  status: "research" as const,

  question:
    "How does automation affect production, quality and downtime between operations in a high-mix, low-volume manufacturing environment?",

  abstract: [
    "Industrial automation is usually justified by volume: the same part, made the same way, many times. High-mix, low-volume (HMLV) manufacturers face the opposite situation — frequent changes in part geometry, quantity and processing requirements — which makes conventional fixed automation difficult to justify and difficult to keep productive.",
    "This research investigates where flexible automation can be effectively implemented within HMLV environments. It will identify candidate operations, define a consistent set of performance metrics, collect time-study and production data, and compare manual, semi-automated and automated operations where data is available. Statistical analysis of production consistency and an economic feasibility analysis will be used to develop findings and recommendations on productivity, quality, inter-operation downtime and operational flexibility.",
  ],

  problem: [
    "In an HMLV shop, much of the lost time is not inside an operation but between operations — waiting, handling, setup and changeover as work moves from one process to the next. Automation that speeds up a single operation may do little if the part then waits, and automation that can't adapt to the next part number may sit idle.",
    "There is a practical gap between general Industry 4.0 guidance and the specific question a manufacturer has to answer: for this operation, with this product mix, would automation improve throughput, quality or downtime enough to justify the investment?",
  ],

  objectives: [
    "Characterize the variability in products, quantities, geometries and processing requirements typical of HMLV manufacturing.",
    "Identify manufacturing operations that are realistic candidates for flexible automation.",
    "Define performance metrics for throughput, quality, inter-operation downtime, consistency and utilization.",
    "Compare manual, semi-automated and automated operations where data is available.",
    "Evaluate the economic feasibility and return on investment of automation in candidate operations.",
    "Develop findings and recommendations for implementing flexible automation in HMLV environments.",
  ],

  areas: [
    "High-mix, low-volume manufacturing",
    "Flexible automation",
    "Industry 4.0",
    "Process variability",
    "Production throughput",
    "Inter-operation downtime",
    "Process consistency",
    "Quality control",
    "Operator involvement",
    "Equipment utilization",
    "Return on investment",
    "Economic feasibility",
  ],

  methodology: [
    { id: "m1", label: "Literature review & scoping", detail: "Establish the state of HMLV and flexible-automation research and bound the study." },
    { id: "m2", label: "Candidate processes", detail: "Identify manufacturing operations suitable for study." },
    { id: "m3", label: "Performance metrics", detail: "Define what will be measured and how." },
    { id: "m4", label: "Time studies & data", detail: "Collect time-study and production data." },
    { id: "m5", label: "Mode comparison", detail: "Manual vs. semi-automated vs. automated, where data exists." },
    { id: "m6", label: "Statistical analysis", detail: "Analyze production consistency and variation." },
    { id: "m7", label: "Economic feasibility", detail: "Cost, ROI and payback analysis." },
    { id: "m8", label: "Findings", detail: "Develop findings and recommendations." },
  ],

  /** Standard manufacturing metrics the study is structured around. Definitions only — no values. */
  metrics: [
    { name: "Throughput", definition: "Good units completed per unit time", formula: "units ÷ time" },
    { name: "Cycle time", definition: "Time to complete one unit at an operation", formula: "t_end − t_start" },
    { name: "Inter-operation downtime", definition: "Time a part or order waits between operations (queue, handling, setup)", formula: "Σ non-processing time between ops" },
    { name: "Changeover time", definition: "Time from last good part of one job to first good part of the next", formula: "t_first good − t_last good" },
    { name: "First-pass yield", definition: "Share of units that pass without rework", formula: "good first pass ÷ total" },
    { name: "Process consistency", definition: "Variation in cycle time or output relative to the mean", formula: "CV = σ ÷ μ" },
    { name: "Equipment utilization", definition: "Share of available time a machine is producing", formula: "run time ÷ available time" },
    { name: "OEE", definition: "Overall equipment effectiveness", formula: "Availability × Performance × Quality" },
    { name: "Operator involvement", definition: "Operator time required per unit or per job", formula: "operator min ÷ unit" },
    { name: "Payback period", definition: "Time for savings to recover the investment", formula: "investment ÷ annual net savings" },
  ],

  /** Comparison matrix rows (metrics) × columns (operating modes). Every cell is pending. */
  comparison: {
    modes: ["Manual", "Semi-automated", "Automated"],
    metrics: ["Throughput", "Cycle-time consistency", "Inter-operation downtime", "First-pass yield", "Utilization", "Operator involvement"],
  },

  /** Research questions that results will eventually answer. */
  results: [
    { title: "Productivity", question: "Does flexible automation improve throughput in candidate HMLV operations?" },
    { title: "Quality", question: "How does automation affect first-pass yield and process consistency?" },
    { title: "Downtime", question: "What happens to inter-operation downtime and changeover when automation is introduced?" },
    { title: "Feasibility", question: "Under what conditions does automation pay back in a high-mix environment?" },
  ],
};

/**
 * Research milestones. Update `status` as the work progresses:
 * "completed" | "in-progress" | "research" | "planned".
 */
export const researchMilestones: TimelineEntry[] = research.methodology.map((m, i) => ({
  id: m.id,
  label: `0${i + 1}`,
  title: m.label,
  summary: m.detail,
  status: i === 0 ? "in-progress" : "planned",
}));

export const researchDocuments: DocumentItem[] = [
  { title: "Thesis proposal", kind: "paper", file: "/documents/research/thesis-proposal.pdf", description: "Research scope, objectives and methodology." },
  { title: "Literature review", kind: "paper", file: "/documents/research/literature-review.pdf" },
  { title: "Master's thesis", kind: "thesis", file: "/documents/research/thesis.pdf", description: "Available after defense — expected 2027." },
  { title: "Publications", kind: "paper", file: "/documents/research/publication-01.pdf", description: "Conference or journal papers, if any result from this work." },
];
