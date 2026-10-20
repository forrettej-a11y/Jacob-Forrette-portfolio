import type { Diagram } from "@/lib/types";
import { pad2 } from "@/lib/utils";

/**
 * Renders a data-defined diagram in a CAD sheet style.
 * - "flow": numbered sequence with connectors (wraps on small screens)
 * - "blocks": subsystems grouped into labelled zones
 */
export function DiagramView({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="panel relative overflow-hidden">
      <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative flex items-center justify-between border-b hairline bg-ink-950/50 px-4 py-2.5">
        <figcaption className="eyebrow text-steel-300">{diagram.title}</figcaption>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-steel-600">
          {diagram.type === "flow" ? "Process" : "Architecture"}
        </span>
      </div>
      <div className="relative p-4 sm:p-6">{diagram.type === "flow" ? <Flow diagram={diagram} /> : <Blocks diagram={diagram} />}</div>
      {diagram.caption && <p className="relative border-t hairline px-4 py-3 text-xs leading-5 text-steel-500">{diagram.caption}</p>}
    </figure>
  );
}

function Flow({ diagram }: { diagram: Diagram }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:flex lg:gap-0">
      {diagram.nodes.map((n, i) => (
        <li key={n.id} className="relative flex lg:flex-1 lg:items-stretch">
          <div className="flex w-full flex-col rounded-[3px] border border-volt-400/25 bg-ink-900/90 p-3 lg:mr-6">
            <span className="font-mono text-[0.62rem] tracking-[0.16em] text-volt-400">{pad2(i + 1)}</span>
            <span className="mt-1.5 text-sm font-semibold leading-tight text-steel-50">{n.label}</span>
            {n.detail && <span className="mt-1.5 text-xs leading-5 text-steel-400">{n.detail}</span>}
          </div>
          {i < diagram.nodes.length - 1 && (
            <svg className="absolute right-0 top-1/2 hidden h-3 w-6 -translate-y-1/2 text-volt-400/60 lg:block" viewBox="0 0 24 12" aria-hidden>
              <path d="M0 6h20M16 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

function Blocks({ diagram }: { diagram: Diagram }) {
  const groups = Array.from(new Set(diagram.nodes.map((n) => n.group ?? "System")));
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]">
      {groups.map((g) => (
        <div key={g} className="relative rounded-[3px] border border-dashed border-volt-400/30 p-3 pt-6">
          <span className="absolute -top-2.5 left-3 bg-ink-850 px-2 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-volt-300">{g}</span>
          <ul className="flex flex-col gap-2">
            {diagram.nodes
              .filter((n) => (n.group ?? "System") === g)
              .map((n) => (
                <li key={n.id} className="rounded-[3px] border hairline bg-ink-900/90 px-3 py-2">
                  <span className="block text-sm font-medium text-steel-100">{n.label}</span>
                  {n.detail && <span className="mt-0.5 block text-xs text-steel-400">{n.detail}</span>}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
