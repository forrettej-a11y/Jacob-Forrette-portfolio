"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { MediaKind, ResolvedMedia } from "@/lib/types";
import { MEDIA_KIND_LABEL, cn, pad2 } from "@/lib/utils";
import { MediaFrame } from "./MediaFrame";
import { ChevronLeft, ChevronRight, Close } from "@/components/ui/Icons";

/**
 * Filterable project gallery with a keyboard-accessible full-screen viewer.
 * Only items whose files exist open in the viewer; the rest render as labelled placeholders.
 */
export function Gallery({ items, title = "Gallery" }: { items: ResolvedMedia[]; title?: string }) {
  const kinds = useMemo(() => Array.from(new Set(items.map((i) => i.kind))), [items]);
  const [filter, setFilter] = useState<MediaKind | "all">("all");
  const visible = filter === "all" ? items : items.filter((i) => i.kind === filter);
  const viewable = visible.filter((i) => i.available);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <div>
      {kinds.length > 1 && (
        <div role="tablist" aria-label={`${title} filter`} className="no-scrollbar -mx-1 mb-6 flex gap-1 overflow-x-auto px-1">
          {(["all", ...kinds] as const).map((k) => {
            const active = filter === k;
            const count = k === "all" ? items.length : items.filter((i) => i.kind === k).length;
            return (
              <button
                key={k}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(k)}
                className={cn(
                  "shrink-0 rounded-[3px] border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-colors",
                  active ? "border-volt-400/60 bg-volt-500/10 text-volt-200" : "hairline text-steel-400 hover:text-steel-100",
                )}
              >
                {k === "all" ? "All" : MEDIA_KIND_LABEL[k]} <span className="ml-1 text-steel-500">{count}</span>
              </button>
            );
          })}
        </div>
      )}

      <motion.ul layout className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => {
            const vIndex = viewable.indexOf(item);
            return (
              <motion.li
                layout
                key={`${item.caption}-${item.src ?? i}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                {item.available ? (
                  <button
                    type="button"
                    onClick={() => setOpenIndex(vIndex)}
                    className="block w-full text-left"
                    aria-label={`Open ${item.caption} in full-screen viewer`}
                  >
                    <MediaFrame media={item} sizes="(min-width: 1024px) 33vw, 50vw" />
                    <span className="mt-2 block truncate text-xs text-steel-400">{item.caption}</span>
                  </button>
                ) : (
                  <MediaFrame media={item} index={pad2(i + 1)} />
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <Lightbox items={viewable} index={openIndex} onChange={setOpenIndex} />
    </div>
  );
}

function Lightbox({
  items,
  index,
  onChange,
}: {
  items: ResolvedMedia[];
  index: number | null;
  onChange: (i: number | null) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const open = index !== null && items[index] !== undefined;

  const go = useCallback(
    (dir: number) => {
      if (index === null) return;
      onChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      returnFocus.current?.focus();
    };
  }, [open, go, onChange]);

  const item = open ? items[index!] : null;

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
          className="fixed inset-0 z-[100] flex flex-col bg-ink-950/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <span className="font-mono text-xs tracking-[0.14em] text-steel-400">
              {pad2(index! + 1)} / {pad2(items.length)} · {MEDIA_KIND_LABEL[item.kind].toUpperCase()}
            </span>
            <button
              ref={closeRef}
              onClick={() => onChange(null)}
              className="grid h-10 w-10 place-items-center rounded-[3px] border hairline text-steel-200 hover:text-white"
              aria-label="Close viewer"
            >
              <Close size={20} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16" onClick={(e) => e.target === e.currentTarget && onChange(null)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.src}
                className="relative h-full w-full"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                {item.kind === "video" ? (
                  <video src={item.src} poster={item.poster} controls autoPlay playsInline className="h-full w-full object-contain">
                    Your browser does not support embedded video.
                  </video>
                ) : (
                  <Image src={item.src!} alt={item.alt ?? item.caption} fill sizes="100vw" className="object-contain" />
                )}
              </motion.div>
            </AnimatePresence>

            {items.length > 1 && (
              <>
                <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border hairline bg-ink-900/80 text-steel-100 hover:text-white sm:left-4">
                  <ChevronLeft size={22} />
                </button>
                <button onClick={() => go(1)} aria-label="Next" className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border hairline bg-ink-900/80 text-steel-100 hover:text-white sm:right-4">
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          <p className="px-6 py-4 text-center text-sm text-steel-300">{item.caption}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
