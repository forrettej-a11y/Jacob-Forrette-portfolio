import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { castInSteelYears } from "@/data/cast-in-steel";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/projects", "/cast-in-steel", "/research", "/experience", "/skills", "/about", "/resume", "/contact"];
  return [
    ...staticRoutes.map((r) => ({ url: `${SITE_URL}${r}`, lastModified: now, priority: r === "" ? 1 : 0.8 })),
    ...projects.filter((p) => !p.href).map((p) => ({ url: `${SITE_URL}/projects/${p.slug}`, lastModified: now, priority: 0.7 })),
    ...castInSteelYears.map((y) => ({ url: `${SITE_URL}/cast-in-steel/${y.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
