import { describe, expect, it } from "vitest";

import { CloudClient, trustLevelClasses } from "./api";

describe("CloudClient", () => {
  it("requests JSON and parses response", async () => {
    const fakeFetch = (async (url: string) => {
      if (url.endsWith("/trust")) {
        return new Response(JSON.stringify({ score: 90, level: "verified" }), {
          status: 200,
          headers: { "content-type": "application/json" },
        });
      }
      return new Response("nope", { status: 404 });
    }) as unknown as typeof fetch;
    const client = new CloudClient("https://api.example.com", fakeFetch);
    const score = await client.getTrust("did:sentinel:abc");
    expect(score).toEqual({ score: 90, level: "verified" });
  });

  it("throws on non-2xx", async () => {
    const fakeFetch = (async () =>
      new Response("nope", { status: 500, statusText: "boom" })) as unknown as typeof fetch;
    const client = new CloudClient("https://api.example.com", fakeFetch);
    await expect(client.getDevice("x")).rejects.toThrow(/500/);
  });
});

describe("trustLevelClasses", () => {
  it("returns non-empty class strings for every level", () => {
    for (const level of ["verified", "high", "medium", "low", "critical"] as const) {
      expect(trustLevelClasses(level).length).toBeGreaterThan(0);
    }
  });
});
