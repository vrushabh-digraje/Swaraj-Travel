import { ImageResponse } from "next/og";

export const alt = "Book A Cab - Mumbai cab booking";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0F172A 0%, #2563EB 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9 }}>Book A Cab</div>
        <div style={{ fontSize: 64, fontWeight: 800, marginTop: 12 }}>
          Ride with Confidence
        </div>
        <div style={{ fontSize: 28, marginTop: 16, maxWidth: 800 }}>
          Mumbai airport, local, and outstation cabs across Maharashtra. 24/7
          booking on call and WhatsApp.
        </div>
      </div>
    ),
    size,
  );
}
