"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

/** Fades and lifts content into view once. Respects prefers-reduced-motion via MotionConfig. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
  ...rest
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
} & Omit<HTMLMotionProps<"div">, "children">) {
  const Comp = (motion as unknown as Record<string, typeof motion.div>)[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
