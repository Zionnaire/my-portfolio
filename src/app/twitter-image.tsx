import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";
export const alt = `${site.name}: ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#1b2350",
          color: "#e9edf5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 76, lineHeight: 1.1 }}>{site.name}</div>
        <div style={{ fontSize: 34, marginTop: 24, color: "#a9b1cf" }}>
          {`${site.jobTitle}, ${site.location}`}
        </div>
        <div style={{ fontSize: 28, marginTop: 16, color: "#e8a317" }}>
          Health tech, with AI integrated where it helps
        </div>
      </div>
    ),
    size,
  );
}
