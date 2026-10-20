/* ==========================================================================
   CONTENT MODEL
   Every page on the site is rendered from objects shaped like these.
   Edit the files in src/data/ — you should never need to touch components
   to add a project, photo, CAD model, video, report or update.
   ========================================================================== */

/** Lifecycle status shown as a badge on every project and case study. */
export type ProjectStatus = "completed" | "in-progress" | "research" | "planned";

/** Used for filtering on the Projects page. Add new ones freely. */
export type Discipline =
  | "Metal Casting"
  | "Mechanical Design"
  | "Manufacturing"
  | "Robotics"
  | "Electromechanical"
  | "Industrial Automation"
  | "Research"
  | "Reliability"
  | "Industrial Machinery";

export type MediaKind =
  | "photo" // general photograph
  | "cad" // CAD screenshot / render
  | "drawing" // engineering drawing
  | "fabrication" // in-process manufacturing photo
  | "final" // finished-product photography
  | "schematic" // electrical schematic / wiring
  | "diagram" // architecture / process diagram
  | "screenshot" // software / dashboard screenshot
  | "video";

export interface MediaItem {
  /**
   * Path under /public (e.g. "/images/cast-in-steel/axe-final.jpg") or a full URL.
   * Leave undefined to show a labelled placeholder frame. If the path is set but the
   * file does not exist yet, the placeholder is shown automatically.
   */
  src?: string;
  kind: MediaKind;
  /** Short caption, also used as the placeholder label. */
  caption: string;
  /** Alt text for screen readers (defaults to caption). */
  alt?: string;
  /** Video poster image (videos only). */
  poster?: string;
}

/** A MediaItem after the build has checked whether its file exists. */
export interface ResolvedMedia extends MediaItem {
  available: boolean;
}

export type DocumentKind =
  | "report"
  | "drawing"
  | "manufacturing"
  | "paper"
  | "thesis"
  | "presentation"
  | "resume";

export interface DocumentItem {
  title: string;
  kind: DocumentKind;
  /** Path under /public, e.g. "/documents/axe-final-report.pdf". Downloads only enable if the file exists. */
  file?: string;
  description?: string;
}

export interface ResolvedDocument extends DocumentItem {
  available: boolean;
  sizeLabel?: string;
}

export interface ModelAsset {
  title: string;
  /** Path to a .glb or .gltf file under /public/models. Undefined → labelled demonstration geometry. */
  src?: string;
  description?: string;
}

export interface ResolvedModel extends ModelAsset {
  available: boolean;
}

/** A label/value row in a specification table. Omit `value` to display "Pending". */
export interface Spec {
  label: string;
  value?: string;
  note?: string;
}

/** A block diagram rendered from data — used for architectures and workflows. */
export interface Diagram {
  title: string;
  /** "flow": numbered left-to-right sequence. "blocks": grouped subsystem blocks. */
  type: "flow" | "blocks";
  nodes: { id: string; label: string; detail?: string; group?: string }[];
  caption?: string;
}

export interface ContentSection {
  /** Used as the anchor id (e.g. "#material-selection"). */
  id: string;
  title: string;
  /** Paragraphs. */
  body?: string[];
  bullets?: string[];
  /** Spec table rendered inside the section. */
  specs?: Spec[];
  diagram?: Diagram;
  media?: MediaItem[];
  /**
   * When present, renders a "pending" note. Use this for content you have not written yet —
   * it keeps the layout complete without inventing facts.
   */
  pending?: string;
}

/** A self-contained case study inside a larger project page (e.g. one automation initiative). */
export interface CaseStudy {
  id: string;
  title: string;
  /** Leave undefined to display "Status to be confirmed". */
  status?: ProjectStatus;
  summary: string;
  bullets?: string[];
  /** Named slots that render as placeholder frames until media is supplied. */
  media?: MediaItem[];
  /** Short labelled notes, e.g. { label: "Control system", value: undefined } → Pending. */
  details?: Spec[];
}

export interface TimelineEntry {
  id: string;
  /** Short label on the axis — a year, date or phase number. */
  label: string;
  title: string;
  summary?: string;
  status: ProjectStatus;
  href?: string;
  meta?: string;
}

export interface TeamMember {
  name: string;
  role?: string;
}

/** Keeps personal contribution clearly separate from team accomplishments. */
export interface Contribution {
  role?: string;
  /** Work Jacob personally performed or led. */
  personal: string[];
  /** Work completed by the team as a whole. */
  team?: string[];
  teamMembers?: TeamMember[];
  /** Optional note, e.g. "Individual breakdown to be added". */
  note?: string;
}

export interface ProjectUpdate {
  date: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Shorter title for cards and navigation. */
  shortTitle?: string;
  tagline: string;
  summary: string;
  /** Display categories (free text). */
  categories: string[];
  /** Filter tags for the Projects page. */
  disciplines: Discipline[];
  status: ProjectStatus;
  organization?: string;
  institution?: string;
  /** e.g. "2025 – 2026". Leave undefined to display "Dates to be added". */
  period?: string;
  /** Override the link destination (used for collections with their own page). */
  href?: string;
  /** Position on the homepage (1 = first). Omit to hide from the homepage. */
  featuredOrder?: number;
  cover?: MediaItem;
  specs?: Spec[];
  highlights?: string[];
  contribution?: Contribution;
  sections: ContentSection[];
  caseStudies?: CaseStudy[];
  timeline?: { title: string; entries: TimelineEntry[] };
  models?: ModelAsset[];
  gallery?: MediaItem[];
  documents?: DocumentItem[];
  updates?: ProjectUpdate[];
  /** Displayed prominently near the end of the page. */
  disclaimer?: string;
}
