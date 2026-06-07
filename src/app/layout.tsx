import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sentinels Dashboard",
  description: "Fleet operations UI for Sentinel Labs.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#0a0a0a",
          color: "#e5e5e5",
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <header
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid #262626",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 18 }}>Sentinels</span>
          <span style={{ color: "#737373", fontSize: 13 }}>Fleet Dashboard</span>
        </header>
        <main style={{ padding: "32px 24px", maxWidth: 1024, margin: "0 auto" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
