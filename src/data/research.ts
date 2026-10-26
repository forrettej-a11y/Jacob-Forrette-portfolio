/**
 * MASTER'S THESIS — RESEARCH PAGE CONTENT
 * Follows the structure of the thesis concept "Case-Study-Informed Simulation of Flexible
 * Automation in High-Mix, Low-Volume Manufacturing" (advisor review, Oct 2026).
 * Results stay labelled "Pending" until simulation experiments are complete.
 */
import type { DocumentItem, TimelineEntry } from "@/lib/types";

export const research = {
  title: "Case-Study-Informed Simulation of Flexible Automation in High-Mix, Low-Volume Manufacturing",
  shortTitle: "Simulating Flexible Automation in HMLV Manufacturing",
  degree: "M.S. Mechanical Engineering — Thesis",
  institution: "Wentworth Institute of Technology",
  expected: "Expected August 2027",
  status: "research" as const,
  stage: "Thesis concept — under advisor review",
  method: "Discrete-event simulation (Python / SimPy or equivalent)",
  referenceEnvironment: "D.W. Clark — Taunton, MA (case-study reference)",

  /* 1 — Purpose and methodology */
  purpose: [
    "This is a primarily simulation-based thesis informed by real manufacturing operations at D.W. Clark. The facility provides a practical reference for machine types, process routing, material handling, resource limitations and operating conditions.",
    "Rather than waiting for proposed automation systems to be installed, integrated and commissioned, alternative configurations are evaluated using discrete-event simulation — keeping the research on the academic timeline while staying grounded in an actual high-mix, low-volume (HMLV) setting.",
  ],

  /* 2 — Research question */
  question:
    "How do different levels of flexible automation affect inter-operational waiting time, production throughput and resource utilization in a case-study-informed HMLV manufacturing system — and under what operating conditions are the benefits greatest?",

  /* 3 — Case study and study boundaries */
  boundary: {
    summary: [
      "D.W. Clark serves as the reference environment — not as a requirement for a completed automation deployment. The baseline model represents a selected portion of the casting-to-finished-part flow; the final boundary depends on available information and advisor guidance.",
      "The study emphasizes transfer delays, queues, scheduling and shared resources rather than the detailed physics of casting or machining.",
    ],
    flow: [
      { id: "f1", label: "Heat treatment", detail: "Batch furnace operations" },
      { id: "f2", label: "Material transfer", detail: "Handling between operations" },
      { id: "f3", label: "CNC machining", detail: "Shared machine resources" },
      { id: "f4", label: "Inspection", detail: "Quality checks" },
      { id: "f5", label: "Finishing", detail: "Final operations" },
    ],
    focus: ["Transfer delays", "Queues", "Scheduling & dispatching", "Shared resources", "Operator assignments"],
    dataNote:
      "Existing layouts, equipment capacities, routing descriptions, rough historical ranges and interviews with knowledgeable personnel may inform the model where approved and available. Where direct measurements are unavailable, published information and transparent engineering assumptions are used. Plant data help, but they are not a prerequisite for the primary experimental results.",
  },

  /* 4 — Research objectives */
  objectives: [
    "Develop and verify a discrete-event model reflecting a representative D.W. Clark production workflow and the variability characteristic of HMLV manufacturing.",
    "Compare current/manual, selectively automated and flexible automated material-handling configurations under matched production conditions.",
    "Quantify differences in inter-operational wait time, throughput, lead time, work-in-process, machine utilization and required operator time.",
    "Assess how part mix, setup-time variability, breakdowns and demand changes alter automation effectiveness.",
    "Identify potential implementation priorities and conditions that warrant future physical validation.",
  ],

  /* 5 — Simulation scenarios */
  scenarios: [
    { id: "S1", title: "Reference baseline", description: "Existing/manual transfers, conventional dispatching and current resource constraints." },
    { id: "S2", title: "Targeted automation", description: "Automated transfers or machine tending at selected bottleneck operations." },
    { id: "S3", title: "Flexible automation", description: "Handling capable of serving multiple part families or varied routings." },
    { id: "S4", title: "Integrated strategy", description: "Flexible handling combined with changes in dispatching or buffer policy." },
  ],

  /* 6 — Research method */
  methodology: [
    { id: "m1", label: "Model inputs", detail: "Part families, routes, arrivals, setup & process times, availability, operators, transfer constraints — with documented assumptions." },
    { id: "m2", label: "Model build", detail: "Discrete-event simulation in Python/SimPy or equivalent; parameters and random seeds documented and reproducible." },
    { id: "m3", label: "Verification", detail: "Event logic, resource conservation, extreme cases, analytical checks; review with D.W. Clark personnel where possible." },
    { id: "m4", label: "Experiments", detail: "Matched scenarios across part mixes and constraints, with repeated replications and confidence intervals." },
    { id: "m5", label: "Sensitivity", detail: "Test whether conclusions hold as uncertain assumptions — failure rates, transfer-time savings — vary." },
  ],

  tools: ["Discrete-event simulation", "Python / SimPy", "Reproducible random seeds", "Replications & confidence intervals", "Sensitivity analysis"],

  /* Measured outcomes (from Objective 3) */
  metrics: [
    { name: "Inter-operational wait time", definition: "Time a job spends waiting between operations — queues, transfers and handling", formula: "Σ (start_next − end_prev)" },
    { name: "Throughput", definition: "Completed jobs per unit time", formula: "jobs ÷ time" },
    { name: "Lead time", definition: "Time from job release to completion", formula: "t_complete − t_release" },
    { name: "Work-in-process", definition: "Average number of jobs in the system", formula: "WIP = throughput × lead time (Little's law)" },
    { name: "Machine utilization", definition: "Share of available time a machine is busy", formula: "busy time ÷ available time" },
    { name: "Operator time", definition: "Operator labor required per job or per shift", formula: "operator hours ÷ jobs" },
  ],

  /* Factors varied across experiments (Objective 4) */
  factors: [
    { name: "Part mix", detail: "Proportions of part families and routings" },
    { name: "Setup-time variability", detail: "Spread in changeover times between jobs" },
    { name: "Breakdowns", detail: "Equipment failure and repair behavior" },
    { name: "Demand changes", detail: "Arrival rates and order patterns" },
  ],

  /* 7 — Interpretation and limitations */
  limitations: [
    "Findings are simulation-based predictions, not demonstrated post-installation gains at D.W. Clark.",
    "Credibility depends on stated assumptions, model verification, plausibility checks and sensitivity analysis.",
    "If historical observations are insufficient for calibration or empirical validation, that limitation will be stated explicitly.",
    "Product-quality improvements and financial return will not be asserted without separate, justified defect or cost models.",
    "Facility-specific information is used only with the company's permission and presented at an appropriate confidentiality level.",
  ],

  /* 8 — Expected deliverables */
  deliverables: [
    "Documented production-system model",
    "Traceable model-input / assumption register",
    "Verification and available validation evidence",
    "Experiment matrix",
    "Scenario comparisons with uncertainty estimates",
    "Sensitivity analysis",
    "Thesis on implications for automation planning and eventual on-site validation",
  ],

  nextStep:
    "Upon approval: define a narrow manufacturing-system boundary and prepare a model specification, available-input inventory and formal simulation experiment plan.",

  references: [
    { text: "Gan, Z. L., Musa, S. N., and Yap, H. J., \"A Review of the High-Mix, Low-Volume Manufacturing Industry,\" Applied Sciences, 13(3), 2023.", url: "https://doi.org/10.3390/app13031687" },
    { text: "Jauregui Becker, J. M., Borst, J., and van der Veen, A., \"Improving the Overall Equipment Effectiveness in High-Mix-Low-Volume Manufacturing Environments,\" CIRP Annals, 2015.", url: "https://doi.org/10.1016/j.cirp.2015.04.126" },
    { text: "Tahmina, T., Garcia, M., Geng, Z., and Bidanda, B., \"A Survey of Smart Manufacturing for High-Mix Low-Volume Production in Defense and Aerospace Industries,\" FAIM 2023, Springer.", url: "https://doi.org/10.1007/978-3-031-18326-3_24" },
    { text: "Frank, A. G., Dalenogare, L. S., and Ayala, N. F., \"Industry 4.0 Technologies: Implementation Patterns in Manufacturing Companies,\" Int. J. Production Economics, 210, 2019.", url: "https://doi.org/10.1016/j.ijpe.2019.01.004" },
  ],
};

/** Update `status` as work progresses: "completed" | "in-progress" | "research" | "planned". */
export const researchMilestones: TimelineEntry[] = [
  { id: "t1", label: "01", title: "Scoping & concept", status: "completed", summary: "Literature review, concept paper and research question." },
  { id: "t2", label: "02", title: "Proposal review", status: "in-progress", summary: "Simulation-based thesis concept submitted for advisor review." },
  { id: "t3", label: "03", title: "Model specification", status: "planned", summary: "System boundary, model specification, input inventory and experiment plan." },
  { id: "t4", label: "04", title: "Model build & verification", status: "planned", summary: "Discrete-event model of the baseline flow; verification and plausibility checks." },
  { id: "t5", label: "05", title: "Experiments", status: "planned", summary: "Scenarios S1–S4 across part mixes and constraints, with replications." },
  { id: "t6", label: "06", title: "Sensitivity & thesis", status: "planned", summary: "Sensitivity analysis, findings and final thesis." },
];

export const researchDocuments: DocumentItem[] = [
  { title: "Thesis concept (advisor review)", kind: "paper", file: "/documents/research/thesis-concept.pdf", description: "Purpose, research question, scenarios, method and limitations." },
  { title: "Master's thesis", kind: "thesis", file: "/documents/research/thesis.pdf", description: "Available after completion — expected 2027." },
];
