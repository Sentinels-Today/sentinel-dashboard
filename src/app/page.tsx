import { TrustBadge } from "@/components/TrustBadge";

const SAMPLE_DEVICES: Array<{
  did: string;
  label: string;
  score: { score: number; level: "verified" | "high" | "medium" | "low" | "critical" };
}> = [
  {
    did: "did:sentinel:aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899",
    label: "warehouse-bot-1",
    score: { score: 92, level: "verified" },
  },
  {
    did: "did:sentinel:1122334455667788990011223344556677889900112233445566778899001122",
    label: "drone-7",
    score: { score: 65, level: "high" },
  },
  {
    did: "did:sentinel:99887766554433221100ffeeddccbbaa99887766554433221100ffeeddccbbaa",
    label: "lab-arm-3",
    score: { score: 38, level: "low" },
  },
];

export default function Home() {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      <section>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Fleet overview</h1>
        <p style={{ color: "#a3a3a3", maxWidth: 640 }}>
          A reference Next.js dashboard wired to the{" "}
          <a href="https://github.com/Sentinels-Today/sentinel-cloud" style={{ color: "#7dd3fc" }}>
            sentinel-cloud
          </a>{" "}
          API. Set <code>NEXT_PUBLIC_SENTINEL_CLOUD_URL</code> to connect a real backend. The list
          below renders the trust-badge component with sample devices.
        </p>
      </section>

      <section style={{ display: "grid", gap: 12 }}>
        {SAMPLE_DEVICES.map((d) => (
          <article
            key={d.did}
            style={{
              padding: 16,
              borderRadius: 12,
              border: "1px solid #262626",
              background: "#111111",
              display: "grid",
              gap: 8,
            }}
          >
            <header
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{d.label}</div>
                <code style={{ color: "#737373", fontSize: 12 }}>
                  {d.did.slice(0, 24)}…{d.did.slice(-8)}
                </code>
              </div>
              <TrustBadge score={d.score} />
            </header>
          </article>
        ))}
      </section>
    </div>
  );
}
