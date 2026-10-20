"use client";

import { Printer } from "@/components/ui/Icons";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-[3px] border border-[var(--line-strong)] bg-white/[0.03] px-5 py-3 text-sm font-medium text-steel-100 transition-colors hover:border-volt-400/60"
    >
      <Printer size={16} /> Print
    </button>
  );
}
