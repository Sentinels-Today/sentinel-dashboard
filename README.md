# sentinel-dashboard

**Fleet operations web UI for Sentinels.** Next.js 14 (App Router) + React 18 + TypeScript reference dashboard. Shows device cards with trust badges and wires up to the [`sentinel-cloud`](https://github.com/Sentinels-Today/sentinel-cloud) API.

[![ci](https://github.com/Sentinels-Today/sentinel-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/Sentinels-Today/sentinel-dashboard/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-Apache--2.0-blue)
![node](https://img.shields.io/badge/node-%E2%89%A520-green)

## Run

```sh
npm install
npm run dev    # http://localhost:3000
```

Set `NEXT_PUBLIC_SENTINEL_CLOUD_URL` to connect a real `sentinel-cloud` backend.

## Develop

```sh
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

## Structure

- `src/app/` — App Router pages (`layout.tsx`, `page.tsx`)
- `src/components/TrustBadge.tsx` — chip showing score + level
- `src/lib/api.ts` — typed `CloudClient` and trust-level styling helpers
- `src/**/*.test.ts(x)` — vitest + Testing Library suites

## License

Apache-2.0 — see [LICENSE](./LICENSE).
