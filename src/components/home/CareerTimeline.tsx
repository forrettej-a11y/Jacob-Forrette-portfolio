"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Role } from "@/data/experience";
import { cn, pad2 } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ChevronRight } from "@/components/ui/Icons";

/** Vertical, expandable career timeline (most recent first). */
export function CareerTimeline({ roles }: { roles: Role[] }) {
  const [open, setOpen] = useState<string | null>(roles[0]?.id ?? null);
  return (
    <ol className="relative border-l hairline">
      {roles.map((r, i) => {
        const isOpen = open === r.id;
        const stage = roles.length - i;
        return (
          <li key={r.id} className="relative pb-6 pl-8 last:pb-0">
            <span
              className={cn(
                "absolute -left-[7px] top-5 h-3.5 w-3.5 rotate-45 border-2 transition-colors",
                isOpen ? "border-volt-300 bg-volt-500" : "border-steel-500 bg-ink-900",
              )}
              aria-hidden
            />
            <div className={cn("rounded-[4px] border transition-colors", isOpen ? "border-volt-400/40 bg-white/[0.025]" : "hairline")}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`role-${r.id}`}
                onClick={() => setOpen(isOpen ? null : r.id)}
                className="flex w-full items-center gap-4 p-5 text-left"
              >
                <span className="font-mono text-xs tracking-[0.14em] text-volt-400">STAGE {pad2(stage)}</span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold text-steel-50">{r.title}</span>
                  <span className="mt-0.5 block font-mono text-[0.7rem] uppercase tracking-[0.12em] text-steel-500">
                    {r.type ? `${r.type} · ` : ""}
                    {r.dates ?? "Dates to be added"}
                  </span>
                </span>
                {r.status && <StatusBadge status={r.status} className="hidden sm:inline-flex" />}
                <ChevronRight size={18} className={cn("shrink-0 text-steel-500 transition-transform", isOpen && "rotate-90")} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`role-${r.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="border-t hairline px-5 pb-5 pt-4 text-[0.95rem] leading-relaxed text-steel-300">
                      {r.summary && <p>{r.summary}</p>}
                      {r.highlights && r.highlights.length > 0 ? (
                        <ul className="mt-3 space-y-1.5">
                          {r.highlights.map((h) => (
                            <li key={h} className="flex gap-3">
                              <span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-volt-400" aria-hidden />
                              {h}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        !r.summary && <p className="text-sm text-steel-500">Role-specific responsibilities will be added.</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
