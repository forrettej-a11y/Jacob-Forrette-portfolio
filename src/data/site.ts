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
    "Electromechanical engineer working across CNC equipment, industrial automation, metal casting and robotics — combining hands-on industrial experience at D.W. Clark with graduate research at Wentworth Institute of Technology.",

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
  "I'm an electromechanical engineer who works where design meets the shop floor. At D.W. Clark in Taunton, Massachusetts, I started as a mechanical engineering co-op supporting the full casting lifecycle, moved into production and operations — leading startup, commissioning and overhaul of multi-axis CNC vertical lathes and building preventive-maintenance workflows in the MES — and continued into full-time industrial engineering.",
  "I completed my B.S. in Electromechanical Engineering at Wentworth Institute of Technology in August 2026 and am continuing into an M.S. in Mechanical Engineering. My thesis uses real production data and simulation to find where flexible automation actually pays off in high-mix, low-volume manufacturing. For senior design I led the mechanical design and systems integration of a remotely operated confined-space inspection rover, and across four years of the SFSA Cast in Steel competition I've gone from team member to leading three teams — a George Washington sword, a CA6NM stainless horseman's axe, and the 2027 flanged mace.",
  "I'm most useful on problems that cross disciplines: a machine that won't come up cleanly, a part that's hard to cast, a process that needs automation without giving up flexibility. I like to understand the system end to end, verify assumptions on real hardware, and document what I learn so the next person doesn't start from zero.",
];

export const awards = ["Dean's List, 2022–2026", "Honors Program"];

export const activities = [
  { org: "SFSA Cast in Steel", role: "Team Leader (2025–2027) · Member since Nov 2023" },
  { org: "American Foundry Society", role: "Member since Nov 2023" },
  { org: "Boston College Marching Band & Pep Band", role: "Tuba · Section Leader" },
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
