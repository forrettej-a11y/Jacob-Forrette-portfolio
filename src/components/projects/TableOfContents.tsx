"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Sticky in-page contents with scroll-spy highlighting. */
export function TableOfContents({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="eyebrow mb-4">Contents</p>
      <ol className="space-y-0.5 border-l hairline">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "-ml-px flex gap-3 border-l py-1.5 pl-4 text-[0.82rem] leading-5 transition-colors",
                active === item.id ? "border-volt-400 text-steel-50" : "border-transparent text-steel-500 hover:text-steel-200",
              )}
            >
              <span className="font-mono text-[0.65rem] leading-5 text-steel-600">{String(i + 1).padStart(2, "0")}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
