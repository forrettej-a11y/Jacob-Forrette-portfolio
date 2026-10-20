import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-[3px] px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-[var(--ease-drafting)] disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-volt-500 text-white shadow-[0_0_0_1px_rgb(78_164_255/0.5),0_8px_30px_-8px_rgb(31_135_255/0.6)] hover:bg-volt-400 hover:shadow-[0_0_0_1px_rgb(130_192_255/0.7),0_10px_40px_-8px_rgb(31_135_255/0.8)]",
  secondary: "border border-[var(--line-strong)] bg-white/[0.03] text-steel-100 hover:border-volt-400/60 hover:bg-white/[0.06] hover:text-white",
  ghost: "px-0 py-0 text-volt-300 hover:text-volt-200",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const cls = cn(base, variants[variant], className);
  if (external || href.startsWith("http") || href.startsWith("mailto:") || /\.(pdf|glb|gltf|zip)$/i.test(href)) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function DisabledButton({ children, title, className }: { children: React.ReactNode; title?: string; className?: string }) {
  return (
    <span
      role="link"
      aria-disabled="true"
      title={title}
      className={cn(base, "cursor-not-allowed border border-dashed border-steel-600 text-steel-400", className)}
    >
      {children}
    </span>
  );
}
