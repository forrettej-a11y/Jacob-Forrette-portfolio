import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Standard page section with an optional drafting-style header ("§ 02 — PROJECTS"). */
export function Section({
  id,
  code,
  eyebrow,
  title,
  intro,
  children,
  className,
  action,
}: {
  id?: string;
  code?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div className="container-x">
        {(title || eyebrow) && (
          <Reveal className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              {(code || eyebrow) && (
                <p className="eyebrow mb-4 flex items-center gap-3">
                  {code && <span className="text-volt-400">§ {code}</span>}
                  {code && eyebrow && <span className="h-px w-8 bg-steel-600" aria-hidden />}
                  {eyebrow && <span>{eyebrow}</span>}
                </p>
              )}
              {title && <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>}
              {intro && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-steel-300">{intro}</div>}
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
