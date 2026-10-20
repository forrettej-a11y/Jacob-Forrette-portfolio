import type { SVGProps } from "react";

/** Minimal stroke icon set (24×24, 1.5px) — no icon dependency needed. */
type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 18, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const ArrowLeft = (p: IconProps) => (
  <Base {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Base>
);
export const ArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Base>
);
export const Download = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </Base>
);
export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Base>
);
export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </Base>
);
export const ChevronLeft = (p: IconProps) => (
  <Base {...p}>
    <path d="m15 6-6 6 6 6" />
  </Base>
);
export const ChevronRight = (p: IconProps) => (
  <Base {...p}>
    <path d="m9 6 6 6-6 6" />
  </Base>
);
export const Expand = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
  </Base>
);
export const Reset = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4" />
  </Base>
);
export const Cube = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
    <path d="M4 7.5 12 12l8-4.5M12 12v9" />
  </Base>
);
export const Play = (p: IconProps) => (
  <Base {...p}>
    <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
  </Base>
);
export const FileDoc = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </Base>
);
export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </Base>
);
export const LinkedIn = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
  </Base>
);
export const GitHub = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.4 6-6.6a5 5 0 0 0-1.4-3.6 4.6 4.6 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.4 12.4 0 0 0-6.4 0C6.1 1.7 5 2 5 2a4.6 4.6 0 0 0-.1 3.6A5 5 0 0 0 3.5 9.2c0 5.2 3 6.3 6 6.6a3 3 0 0 0-.9 2.3V21" />
  </Base>
);
export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Base>
);
export const Clock = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Base>
);
export const Crosshair = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 2v5M12 17v5M2 12h5M17 12h5" />
  </Base>
);
export const Grid = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </Base>
);
export const Rotate = (p: IconProps) => (
  <Base {...p}>
    <path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4h-4" />
  </Base>
);
export const Printer = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 9V3h10v6M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2M7 14h10v7H7z" />
  </Base>
);
