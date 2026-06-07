export interface DeviceSummary {
  did: string;
  public_key_hex: string;
  registered_at: string;
  metadata: Record<string, unknown>;
  firmware_verified: boolean;
  heartbeat_count: number;
}

export interface TrustScore {
  score: number;
  level: "critical" | "low" | "medium" | "high" | "verified";
}

export class CloudClient {
  constructor(
    private readonly baseUrl: string,
    private readonly fetchImpl: typeof fetch = fetch,
  ) {}

  async getDevice(did: string): Promise<DeviceSummary> {
    return this.req<DeviceSummary>(`/v1/devices/${encodeURIComponent(did)}`);
  }

  async getTrust(did: string): Promise<TrustScore> {
    return this.req<TrustScore>(`/v1/devices/${encodeURIComponent(did)}/trust`);
  }

  private async req<T>(path: string): Promise<T> {
    const res = await this.fetchImpl(`${this.baseUrl}${path}`);
    if (!res.ok) throw new Error(`cloud ${res.status}: ${res.statusText}`);
    return (await res.json()) as T;
  }
}

export function trustLevelClasses(level: TrustScore["level"]): string {
  switch (level) {
    case "verified":
      return "bg-emerald-500/15 text-emerald-200 border-emerald-400/40";
    case "high":
      return "bg-sky-500/15 text-sky-200 border-sky-400/40";
    case "medium":
      return "bg-amber-500/15 text-amber-200 border-amber-400/40";
    case "low":
      return "bg-orange-500/15 text-orange-200 border-orange-400/40";
    default:
      return "bg-rose-500/15 text-rose-200 border-rose-400/40";
  }
}
