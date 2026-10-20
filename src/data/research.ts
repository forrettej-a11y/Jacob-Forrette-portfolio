/**
 * MASTER'S THESIS — RESEARCH PAGE CONTENT
 * Sourced from the thesis Concept Paper and Study Plan. Results stay labelled
 * "Pending validation" until replaced with validated findings.
 */
import type { DocumentItem, TimelineEntry } from "@/lib/types";

export const research = {
  title: "Flexible Automation Strategies for Reducing Downtime and Improving Production in High-Mix, Low-Volume Manufacturing",
  shortTitle: "Flexible Automation in HMLV Manufacturing",
  degree: "M.S. Mechanical Engineering — Thesis",
  institution: "Wentworth Institute of Technology",
  expected: "Expected August 2027",
  status: "research" as const,

  question:
    "How does flexible automation affect production efficiency, product quality, inter-operation downtime, and operator involvement in a high-mix, low-volume manufacturing environment?",

  abstract: [
    "High-mix, low-volume (HMLV) manufacturing environments must accommodate frequent changes in part geometry, processing requirements, production quantities and workflows. Those variations drive inconsistent production rates, quality issues, extra material handling, and downtime between operations. Automation could reduce some of these inefficiencies — but traditional automation is designed for high-volume, repetitive production and may not offer the flexibility HMLV work requires.",
    "This study investigates how flexible automation affects production performance, product quality and downtime between operations in an HMLV environment. Automated processes will be compared with manual or semi-automated ones on cycle time, throughput, process consistency, operator involvement, quality variation and inter-operation delay, using production records, time studies, process observation, quality measurements and equipment data.",
    "The goal is to determine where automation provides the greatest benefit within an HMLV system, identify the limits imposed by product and process variability, and give small-scale manufacturers practical guidance on flexible automation.",
  ],

  problem: [
    "HMLV shops face frequent changes in materials, part geometry, quantities, routing and processing. The result is inconsistent cycle times, more downtime between operations, heavier operator involvement and harder-to-control quality. Traditional performance methods such as OEE were built for repetitive production and don't translate cleanly when parts and processes keep changing.",
    "Small-scale manufacturers — with limited capital, equipment and staff — have difficulty deciding where flexible automation can be implemented effectively without giving up the adaptability their production depends on.",
  ],

  objectives: [
    "Compare production cycle times between manual or semi-automated processes and automated processes.",
    "Measure downtime between manufacturing operations.",
    "Evaluate changes in operator intervention and involvement.",
    "Examine differences in process consistency and product quality.",
    "Determine how part geometry, weight and processing requirements affect automation performance.",
    "Evaluate whether the operational benefits of automation justify implementation in an HMLV environment.",
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
    "Simulation & modeling",
  ],

  /** The three automation opportunities the study will evaluate. */
  caseStudies: [
    {
      title: "Automated material handling",
      context: "Loading and unloading large heat-treatment equipment",
      metrics: ["Load / unload time", "Transfer time between stations", "Temperature variation between stations", "Repeatability", "Operator involvement"],
    },
    {
      title: "Automated material removal & finishing",
      context: "Automated or robotic grinding vs. manual grinding",
      metrics: ["Processing time per part", "Surface quality", "Repeatability", "Operator involvement", "Changeover between parts"],
    },
    {
      title: "Automated scheduling & job tracking",
      context: "Machine-shop scheduling from machine specs, times, alloy, fixturing, geometry and queues",
      metrics: ["Scheduling time", "Machine utilization", "Queue time", "Production delays", "Estimate accuracy"],
    },
  ],

  methodology: [
    { id: "m1", label: "Research & scoping", detail: "Literature review, research question, objectives, process selection, concept paper." },
    { id: "m2", label: "Methodology design", detail: "Comparison method, performance metrics, data-collection plan, baseline process map." },
    { id: "m3", label: "Data collection", detail: "Real production data from D.W. Clark; baseline model of the selected process." },
    { id: "m4", label: "Modeling & analysis", detail: "Siemens / Altair simulation of baseline vs. automated scenarios; economic analysis." },
    { id: "m5", label: "Thesis writing", detail: "Results, figures, conclusions and recommendations." },
    { id: "m6", label: "Validation & revision", detail: "Advisor feedback, verification, additional data or simulation as needed." },
  ],

  tools: ["D.W. Clark production data", "Time studies", "Siemens and/or Altair modeling & simulation", "Statistical analysis", "Economic / ROI analysis"],

  metrics: [
    { name: "Cycle time", definition: "Time to complete one unit at an operation", formula: "t_end − t_start" },
    { name: "Transfer time", definition: "Time to move a part between stations", formula: "t_arrive − t_depart" },
    { name: "Throughput", definition: "Good units completed per unit time", formula: "units ÷ time" },
    { name: "Inter-operation downtime", definition: "Time a part waits between operations (queue, handling, setup)", formula: "Σ non-processing time" },
    { name: "Changeover time", definition: "Last good part of one job to first good part of the next", formula: "t_first good − t_last good" },
    { name: "Machine utilization", definition: "Share of available time a machine is producing", formula: "run time ÷ available time" },
    { name: "Operator involvement", definition: "Operator time required per unit or job", formula: "operator min ÷ unit" },
    { name: "Scrap / rework", definition: "Share of units requiring rework or scrapped", formula: "(scrap + rework) ÷ total" },
    { name: "Process consistency", definition: "Variation relative to the mean", formula: "CV = σ ÷ μ" },
    { name: "Payback period", definition: "Time for savings to recover the investment", formula: "investment ÷ annual net savings" },
  ],

  comparison: {
    modes: ["Manual", "Semi-automated", "Automated"],
    metrics: ["Cycle time", "Inter-operation downtime", "Throughput", "Process consistency", "Operator involvement", "Scrap / rework"],
  },

  results: [
    { title: "Productivity", question: "Does flexible automation reduce cycle time and increase throughput in the selected HMLV operations?" },
    { title: "Quality", question: "How does automation affect process consistency and product quality?" },
    { title: "Downtime", question: "What happens to inter-operation downtime and changeover when automation is introduced?" },
    { title: "Feasibility", question: "Under what conditions do the benefits justify automation for a small-scale manufacturer?" },
  ],

  references: [
    { text: "Gan, Z. L., Musa, S. N., and Yap, H. J., \"A Review of the High-Mix, Low-Volume Manufacturing Industry,\" Applied Sciences, 13(3), 2023.", url: "https://doi.org/10.3390/app13031687" },
    { text: "Jauregui Becker, J. M., Borst, J., and van der Veen, A., \"Improving the Overall Equipment Effectiveness in High-Mix-Low-Volume Manufacturing Environments,\" CIRP Annals, 2015.", url: "https://doi.org/10.1016/j.cirp.2015.04.126" },
    { text: "Tahmina, T., Garcia, M., Geng, Z., and Bidanda, B., \"A Survey of Smart Manufacturing for High-Mix Low-Volume Production in Defense and Aerospace Industries,\" FAIM 2023, Springer.", url: "https://doi.org/10.1007/978-3-031-18326-3_24" },
    { text: "Frank, A. G., Dalenogare, L. S., and Ayala, N. F., \"Industry 4.0 Technologies: Implementation Patterns in Manufacturing Companies,\" Int. J. Production Economics, 210, 2019.", url: "https://doi.org/10.1016/j.ijpe.2019.01.004" },
  ],
};

/** Update `status` as work progresses: "completed" | "in-progress" | "research" | "planned". */
export const researchMilestones: TimelineEntry[] = research.methodology.map((m, i) => ({
  id: m.id,
  label: `Step ${i + 1}`,
  title: m.label,
  summary: m.detail,
  status: i === 0 ? "completed" : i === 1 ? "in-progress" : "planned",
}));

export const researchDocuments: DocumentItem[] = [
  { title: "Concept paper", kind: "paper", file: "/documents/research/concept-paper.pdf", description: "Problem, research question, objectives and proposed methodology." },
  { title: "Master's thesis", kind: "thesis", file: "/documents/research/thesis.pdf", description: "Available after completion — expected 2027." },
];
