import Link from "next/link";
import { Reveal } from "./Reveal";
import { ChevronRight } from "./Icons";

/** Header used on interior pages: breadcrumb, eyebrow, title, intro, blueprint backdrop. */
export function PageHeader({
  crumbs = [],
  eyebrow,
  title,
  intro,
  children,
  aside,
}: {
  crumbs?: { href: string; label: string }[];
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b hairline pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="blueprint-grid fade-mask-b pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-volt-500/10 blur-[120px]"
        aria-hidden
      />
      <div className="container-x relative">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-steel-500">
              <li>
                <Link href="/" className="hover:text-steel-200">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  <ChevronRight size={12} />
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-steel-300">
                      {c.label}
                    </span>
                  ) : (
                    <Link href={c.href} className="hover:text-steel-200">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-end">
          <Reveal>
            {eyebrow && <div className="eyebrow mb-5 flex flex-wrap items-center gap-3">{eyebrow}</div>}
            <h1 className="steel-text text-4xl font-semibold leading-[1.04] tracking-[-0.03em] sm:text-5xl lg:text-6xl">{title}</h1>
            {intro && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-steel-300">{intro}</div>}
            {children}
          </Reveal>
          {aside && <Reveal delay={0.1}>{aside}</Reveal>}
        </div>
      </div>
    </header>
  );
}
