"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

/**
 * Interactive skill categories. No percentages or ratings — instead, each skill
 * links to the projects where it was actually applied.
 */
export function SkillExplorer({ categories }: { categories: SkillCategory[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const cat = categories[active];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (i + dir + categories.length) % categories.length;
    setActive(n);
    tabs.current[n]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-10">
      <div role="tablist" aria-label="Skill categories" aria-orientation="vertical" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-col lg:px-0">
        {categories.map((c, i) => (
          <button
            key={c.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            role="tab"
            id={`skill-tab-${c.id}`}
            aria-selected={i === active}
            aria-controls="skill-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "relative flex shrink-0 items-center gap-4 rounded-[4px] border px-4 py-3.5 text-left transition-colors lg:w-full",
              i === active ? "border-volt-400/50 bg-volt-500/[0.08]" : "hairline hover:bg-white/[0.02]",
            )}
          >
            <span className={cn("font-mono text-xs tracking-[0.14em]", i === active ? "text-volt-300" : "text-steel-500")}>{c.code}</span>
            <span className={cn("whitespace-nowrap font-medium", i === active ? "text-steel-50" : "text-steel-300")}>{c.title}</span>
            <span className="ml-auto hidden font-mono text-xs text-steel-500 lg:inline">{c.skills.length}</span>
          </button>
        ))}
      </div>

      <div id="skill-panel" role="tabpanel" aria-labelledby={`skill-tab-${cat.id}`} className="panel relative min-h-[24rem] overflow-hidden p-6 sm:p-8">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <AnimatePresence mode="wait">
          <motion.div key={cat.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="relative">
            <p className="font-mono text-xs tracking-[0.16em] text-volt-400">CATEGORY {cat.code}</p>
            <h2 className="mt-2 text-3xl font-semibold">{cat.title}</h2>
            <p className="mt-2 max-w-xl text-steel-400">{cat.description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {cat.skills.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-[4px] border hairline bg-ink-900/80 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-steel-100">{s.name}</span>
                    {s.note && (
                      <span className="rounded-full border border-dashed border-steel-500 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-steel-400">
                        {s.note}
                      </span>
                    )}
                  </div>
                  {s.appliedIn && s.appliedIn.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-steel-600">Applied in</span>
                      {s.appliedIn.map((a) => (
                        <Link key={a.href} href={a.href} className="rounded-[3px] border border-volt-400/25 px-1.5 py-0.5 text-[0.72rem] text-volt-200 hover:bg-volt-500/10">
                          {a.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
