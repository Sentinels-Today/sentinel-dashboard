import type { TrustScore } from "@/lib/api";

const COLORS: Record<TrustScore["level"], { bg: string; fg: string; border: string }> = {
  verified: { bg: "rgba(16,185,129,0.12)", fg: "#6ee7b7", border: "rgba(16,185,129,0.4)" },
  high: { bg: "rgba(14,165,233,0.12)", fg: "#7dd3fc", border: "rgba(14,165,233,0.4)" },
  medium: { bg: "rgba(245,158,11,0.12)", fg: "#fcd34d", border: "rgba(245,158,11,0.4)" },
  low: { bg: "rgba(249,115,22,0.12)", fg: "#fdba74", border: "rgba(249,115,22,0.4)" },
  critical: { bg: "rgba(244,63,94,0.12)", fg: "#fda4af", border: "rgba(244,63,94,0.4)" },
};

export function TrustBadge({ score }: { score: TrustScore }) {
  const c = COLORS[score.level];
  return (
    <span
      data-testid="trust-badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 10px",
        borderRadius: 999,
        background: c.bg,
        color: c.fg,
        border: `1px solid ${c.border}`,
        fontFamily: "ui-monospace, SFMono-Regular, monospace",
        fontSize: 13,
        textTransform: "uppercase",
        letterSpacing: 0.5,
      }}
    >
      <span>{score.level}</span>
      <span style={{ opacity: 0.7 }}>{score.score}/100</span>
    </span>
  );
}
