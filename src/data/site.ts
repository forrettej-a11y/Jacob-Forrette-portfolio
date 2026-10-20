/**
 * SITE-WIDE PROFILE
 * Contact fields are intentionally empty — fill them in when you are ready to publish.
 * Anything left empty is hidden or shown as "Not yet published"; nothing is invented.
 */

export const site = {
  name: "Jacob Forrette",
  initials: "JF",
  title: "Electromechanical Engineer",
  subtitle: "Mechanical Engineering Graduate Student",
  headline: "Engineering that holds up on the shop floor.",
  intro:
    "Electromechanical engineer working across CNC equipment, industrial automation, metal casting and robotics — combining hands-on industrial experience at DW Clark with graduate research at Wentworth Institute of Technology.",

  /** Optional hero photograph. Drop a wide image at /public/images/hero.jpg and it appears automatically. */
  heroImage: "/images/hero.jpg",

  contact: {
    email: "", // e.g. "name@example.com"
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
    github: "", // optional, e.g. "https://github.com/your-handle"
  },

  /** Resume PDF. Download button enables automatically once this file exists. */
  resumePdf: "/documents/Jacob-Forrette-Resume.pdf",

  seo: {
    description:
      "Engineering portfolio of Jacob Forrette — electromechanical engineer specializing in CNC equipment, industrial automation, metal casting, robotics and manufacturing reliability.",
    keywords: [
      "Jacob Forrette",
      "electromechanical engineer",
      "mechanical engineering",
      "industrial automation",
      "CNC",
      "metal casting",
      "Cast in Steel",
      "robotics",
      "manufacturing engineering",
      "Wentworth Institute of Technology",
    ],
  },
};

export const education = [
  {
    school: "Wentworth Institute of Technology",
    location: "Boston, MA",
    degree: "M.S. Mechanical Engineering",
    date: "Expected August 2027",
    gpa: "3.8 / 4.0",
    status: "in-progress" as const,
    note: "Thesis: Flexible Automation in High-Mix, Low-Volume Manufacturing",
  },
  {
    school: "Wentworth Institute of Technology",
    location: "Boston, MA",
    degree: "B.S. Electromechanical Engineering",
    date: "August 2026",
    gpa: "3.75 / 4.0",
    status: "completed" as const,
    note: "Senior design: Automated Safety Inspection System",
  },
];

export const interests = [
  { title: "Industrial Automation & Robotics", code: "AUT" },
  { title: "Advanced Manufacturing", code: "MFG" },
  { title: "CNC Installation & Troubleshooting", code: "CNC" },
  { title: "Mechanical & Electromechanical Design", code: "DES" },
  { title: "Metal Casting & Additive Manufacturing", code: "CST" },
  { title: "Machine Controls & System Integration", code: "CTL" },
  { title: "Reliability & Process Improvement", code: "REL" },
];

export const biography = [
  "I'm an electromechanical engineer who works where design meets the shop floor. At DW Clark in Taunton, Massachusetts, I've grown from a mechanical engineering co-op into production, operations and industrial engineering work — installing and commissioning large CNC vertical turning lathes, diagnosing mechanical, electrical and control faults, supporting automation initiatives, and building the preventive-maintenance systems that keep equipment running.",
  "Alongside that work, I completed my B.S. in Electromechanical Engineering at Wentworth Institute of Technology in August 2026 and am continuing into an M.S. in Mechanical Engineering. My thesis research looks at where flexible automation genuinely pays off in high-mix, low-volume manufacturing — and where it doesn't. Four years in the SFSA Cast in Steel competition, including leading the team that produced a CA6NM stainless horseman's axe, have given me practical grounding in casting design, metallurgy and mechanical testing.",
  "I'm most useful on problems that cross disciplines: a machine that won't come up cleanly, a part that's difficult to cast, a process that needs automation without giving up flexibility. I like to understand the system end to end, verify assumptions on real hardware, and document what I learn so the next person doesn't start from zero.",
];

export const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/cast-in-steel", label: "Cast in Steel" },
  { href: "/research", label: "Research" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];
