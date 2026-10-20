"use client";

import { useState } from "react";
import type { ResolvedModel } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ModelViewer } from "./ModelViewer";

/** One viewer with tabs when a project has several models. */
export function ModelShowcase({ models }: { models: ResolvedModel[] }) {
  const [active, setActive] = useState(0);
  if (models.length === 0) return null;
  const model = models[active];

  return (
    <div>
      {models.length > 1 && (
        <div role="tablist" aria-label="CAD models" className="mb-3 flex flex-wrap gap-1">
          {models.map((m, i) => (
            <button
              key={m.title}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-[3px] border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em]",
                i === active ? "border-volt-400/60 bg-volt-500/10 text-volt-200" : "hairline text-steel-400 hover:text-steel-100",
              )}
            >
              {m.title}
            </button>
          ))}
        </div>
      )}
      <ModelViewer key={model.title} model={model} />
      <div className="mt-3 flex flex-col gap-1 text-xs text-steel-500 sm:flex-row sm:items-center sm:justify-between">
        <span>Drag to rotate · scroll or pinch to zoom · right-drag to pan</span>
        {!model.available && (
          <span className="font-mono uppercase tracking-[0.1em]">
            {model.description ?? "Project CAD model pending upload"}
          </span>
        )}
      </div>
    </div>
  );
}
