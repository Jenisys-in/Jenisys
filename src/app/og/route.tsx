import { ImageResponse } from "next/og";
import { ogContent } from "@/lib/og";

// 1200×630 social card in the brand: Night ground, ribbon line, title, wordmark.
export function GET(req: Request) {
  const path = new URL(req.url).searchParams.get("path") || "";
  const { kicker, title } = ogContent(path);
  const size = title.length > 80 ? 52 : title.length > 52 ? 60 : 72;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#050a1c", color: "#edf2ff", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", height: 6, width: 220, background: "linear-gradient(90deg,#1b2aa0,#4c8dff,#14e2f9)", borderRadius: 3 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#14e2f9", marginBottom: 28 }}>{kicker}</div>
          <div style={{ fontSize: size, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30, color: "#98a5c9" }}>
          <div style={{ display: "flex", color: "#edf2ff", fontWeight: 700 }}>Jenisys</div>
          <div style={{ display: "flex" }}>jenisys.in</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
