"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { TimelineEntry } from "@/lib/types";
import { STATUS_LABEL, cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArrowRight } from "@/components/ui/Icons";

const NODE: Record<TimelineEntry["status"], string> = {
  completed: "bg-status-completed border-status-completed",
  "in-progress": "bg-volt-500 border-volt-300 status-pulse",
  research: "bg-status-research border-status-research",
  planned: "bg-ink-900 border-steel-500 border-dashed",
};

/**
 * Interactive horizontal timeline. Click a node (or use ← → keys) to inspect it.
 * Works for competition years, development phases and research milestones.
 */
export function Timeline({
  entries,
  label,
  initial,
  variant = "default",
}: {
  entries: TimelineEntry[];
  label: string;
  initial?: number;
  variant?: "default" | "large";
}) {
  const firstActive = entries.findIndex((e) => e.status === "in-progress");
  const [active, setActive] = useState(initial ?? (firstActive >= 0 ? firstActive : entries.length - 1));
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const entry = entries[active];
  const progress = entries.length > 1 ? active / (entries.length - 1) : 1;

  const onKey = (e: React.KeyboardEvent, i: number) => {
    let next = i;
    if (e.key === "ArrowRight") next = Math.min(entries.length - 1, i + 1);
    else if (e.key === "ArrowLeft") next = Math.max(0, i - 1);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = entries.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="panel relative overflow-hidden p-4 sm:p-8">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative">
        <div className="no-scrollbar -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div
            role="tablist"
            aria-label={label}
            className="relative grid min-w-[36rem] gap-0"
            style={{ gridTemplateColumns: `repeat(${entries.length}, minmax(0, 1fr))` }}
          >
            {/* rail */}
            <div className="absolute left-0 right-0 top-[1.15rem] h-px bg-steel-600/60" aria-hidden />
            <motion.div
              className="absolute left-0 top-[1.15rem] h-px origin-left bg-gradient-to-r from-volt-600 to-volt-300"
              style={{ right: 0 }}
              initial={false}
              animate={{ scaleX: progress }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            />
            {entries.map((e, i) => {
              const selected = i === active;
              return (
                <button
                  key={e.id}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  role="tab"
                  id={`tl-${uid}-${e.id}`}
                  aria-selected={selected}
                  aria-controls={`tlp-${uid}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(ev) => onKey(ev, i)}
                  className="group relative flex flex-col items-center px-1 pb-1 text-center"
                >
                  <span className="relative grid h-[2.3rem] place-items-center">
                    <span
                      className={cn(
                        "h-3.5 w-3.5 rotate-45 border-2 transition-transform duration-300",
                        NODE[e.status],
                        selected ? "scale-125" : "group-hover:scale-110",
                      )}
                      aria-hidden
                    />
                    {selected && (
                      <motion.span
                        layoutId={`tl-ring-${uid}`}
                        className="absolute h-8 w-8 rotate-45 border border-volt-400/60"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        aria-hidden
                      />
                    )}
                  </span>
                  <span className={cn("mt-3 font-mono text-[0.7rem] tracking-[0.14em]", selected ? "text-volt-300" : "text-steel-500")}>
                    {e.label}
                  </span>
                  <span
                    className={cn(
                      "mt-1 font-medium leading-snug transition-colors",
                      variant === "large" ? "text-sm sm:text-base" : "text-xs sm:text-sm",
                      selected ? "text-steel-50" : "text-steel-400 group-hover:text-steel-200",
                    )}
                  >
                    {e.title}
                  </span>
                  <span className="sr-only">— {STATUS_LABEL[e.status]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div id={`tlp-${uid}`} role="tabpanel" aria-live="polite" className="mt-8 min-h-[7rem] border-t hairline pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start"
            >
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs tracking-[0.14em] text-volt-300">{entry.label}</span>
                  <StatusBadge status={entry.status} />
                  {entry.meta && <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-steel-400">{entry.meta}</span>}
                </div>
                <h3 className={cn("font-semibold", variant === "large" ? "text-2xl" : "text-lg")}>{entry.title}</h3>
                {entry.summary && <p className="mt-2 max-w-3xl leading-relaxed text-steel-300">{entry.summary}</p>}
              </div>
              {entry.href && (
                <Link
                  href={entry.href}
                  className="group inline-flex items-center gap-2 self-end rounded-[3px] border border-volt-400/40 px-4 py-2 text-sm text-volt-200 transition-colors hover:bg-volt-500/10"
                >
                  View project <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
