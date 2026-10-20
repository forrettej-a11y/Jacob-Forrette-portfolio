import type { ResolvedDocument } from "@/lib/types";
import { DOC_KIND_LABEL, cn } from "@/lib/utils";
import { Download, FileDoc } from "@/components/ui/Icons";

/** Technical documents. Download links are only enabled for files that exist in /public. */
export function DocumentList({ documents }: { documents: ResolvedDocument[] }) {
  if (documents.length === 0) return null;
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {documents.map((d) => {
        const inner = (
          <>
            <span
              className={cn(
                "grid h-11 w-11 shrink-0 place-items-center rounded-[3px] border",
                d.available ? "border-volt-400/40 text-volt-300" : "border-dashed border-steel-600 text-steel-600",
              )}
            >
              <FileDoc size={20} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-steel-500">{DOC_KIND_LABEL[d.kind]}</span>
              <span className={cn("mt-0.5 block font-medium", d.available ? "text-steel-50" : "text-steel-300")}>{d.title}</span>
              {d.description && <span className="mt-0.5 block text-xs leading-5 text-steel-500">{d.description}</span>}
            </span>
            {d.available ? (
              <span className="flex shrink-0 items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-volt-300">
                {d.sizeLabel && <span className="text-steel-500">{d.sizeLabel}</span>}
                <Download size={18} />
              </span>
            ) : (
              <span className="shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-steel-600">Not yet available</span>
            )}
          </>
        );
        return (
          <li key={d.title}>
            {d.available && d.file ? (
              <a
                href={d.file}
                download
                className="flex items-center gap-4 rounded-[4px] border hairline bg-white/[0.02] p-4 transition-colors hover:border-volt-400/50 hover:bg-white/[0.04]"
              >
                {inner}
                <span className="sr-only">(download)</span>
              </a>
            ) : (
              <div className="flex items-center gap-4 rounded-[4px] border border-dashed border-[var(--line)] p-4" aria-disabled="true">
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
