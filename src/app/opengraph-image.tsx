import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0d0f12",
          borderLeft: "12px solid #1f87ff",
          color: "#f4f6f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#82c0ff", fontSize: 24, letterSpacing: 4 }}>
          <div style={{ width: 56, height: 2, background: "#4ea4ff" }} />
          ENGINEERING PORTFOLIO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>{site.name}</div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#a9b1bb" }}>
            {site.title} · {site.subtitle}
          </div>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 22, color: "#87909b", letterSpacing: 2 }}>
          <span>CNC · AUTOMATION · METAL CASTING · ROBOTICS · RELIABILITY</span>
        </div>
      </div>
    ),
    size,
  );
}
