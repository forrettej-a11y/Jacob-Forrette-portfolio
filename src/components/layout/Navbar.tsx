"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Close, Menu } from "@/components/ui/Icons";

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span className="corner-marks relative grid h-9 w-9 place-items-center border border-[var(--line-strong)] bg-ink-850 font-mono text-[0.8rem] font-semibold tracking-tight text-steel-50 transition-colors group-hover:border-volt-400/60">
        {site.initials}
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="text-[0.95rem] font-semibold tracking-tight text-steel-50">{site.name}</span>
        <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel-500">Electromechanical Eng.</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "border-b hairline bg-ink-900/80 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-[3px] px-3 py-2 text-[0.85rem] transition-colors",
                    isActive(item.href) ? "text-steel-50" : "text-steel-400 hover:text-steel-100",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-[1px] h-px bg-volt-400"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li className="ml-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[3px] border border-volt-400/50 bg-volt-500/10 px-4 py-2 text-[0.85rem] font-medium text-volt-200 transition-colors hover:bg-volt-500/20"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="grid h-10 w-10 place-items-center rounded-[3px] border hairline text-steel-200 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t hairline bg-ink-900 lg:hidden"
          >
            <ul className="container-x flex flex-col py-6">
              {[...navigation, { href: "/contact", label: "Contact" }].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex items-baseline gap-4 border-b hairline py-4 text-2xl font-medium",
                      isActive(item.href) ? "text-steel-50" : "text-steel-300",
                    )}
                  >
                    <span className="font-mono text-xs text-volt-400">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
