import type { Spec } from "@/lib/types";
import { cn } from "@/lib/utils";

/** CAD title-block style specification table. Rows with no value render as "Pending". */
export function SpecTable({ specs, title, className }: { specs: Spec[]; title?: string; className?: string }) {
  return (
    <div className={cn("panel overflow-hidden", className)}>
      {title && (
        <div className="flex items-center justify-between border-b hairline bg-white/[0.02] px-4 py-2.5">
          <span className="eyebrow text-steel-300">{title}</span>
          <span className="font-mono text-[0.65rem] text-steel-500">REV —</span>
        </div>
      )}
      <dl className="divide-y divide-[var(--line)]">
        {specs.map((s) => (
          <div key={s.label} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-4 px-4 py-3 text-sm">
            <dt className="font-mono text-[0.72rem] uppercase leading-5 tracking-[0.08em] text-steel-400">{s.label}</dt>
            <dd className="min-w-0">
              {s.value ? (
                <span className="text-steel-100">{s.value}</span>
              ) : (
                <span className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-steel-500">
                  <span className="h-px w-3 bg-steel-600" aria-hidden />
                  Pending
                </span>
              )}
              {s.note && <span className="mt-0.5 block text-xs leading-5 text-steel-500">{s.note}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
