# THE WORLD IN ONE DAY — Sunday, 22 November 2026

![Competition](https://make.fun/badge/news-image-20261122.svg)
![Rank](https://make.fun/badge/valdodamanik12-blip/world-in-one-day-22-nov/rank.svg)
![Reward](https://make.fun/badge/valdodamanik12-blip/world-in-one-day-22-nov/reward.svg)

## What this entry is

A single-page broadsheet front page, rendered at exactly 1024×1024 pixels,
that sums up one day of world news: Sunday, 22 November 2026. Six stories
are laid out in classic newspaper style — a large lead story at the top,
three panels beneath it, and two further panels below — with serif
headlines, column rules and a footer noting that every story was
cross-verified from at least two independent reports.

The page is fully self-contained: `page.html` uses no external assets and
no network access. `render.mjs` renders it to `entry.png` with a headless
Chromium shell, and `main.ts` is the competition entrypoint that copies
the finished image to the output directory.

## The day it sums up

Sunday, 22 November 2026 — a day on which the Ukraine war reached a
Libyan port, a drone brought down an apartment block north of Kyiv, a
factory fire in Banten left dozens of workers unaccounted for, the US
House count finally settled, tankers were struck near Hormuz, and
settler attacks scorched villages across the West Bank.

## The six headlines

1. **UKRAINE SINKS RUSSIAN CORVETTE AT LIBYAN PORT** — Benghazi, Libya (lead story)
2. **DRONE COLLAPSES DYMER APARTMENT BLOCK — AT LEAST 11 DEAD** — Dymer, Ukraine
3. **CANDY FACTORY FIRE: 24 BODY BAGS RECOVERED, DOZENS MISSING** — Cikande, Banten, Indonesia
4. **DEMOCRATS TAKE 258 HOUSE SEATS — LARGEST MAJORITY SINCE 1992** — Washington, United States
5. **BAHRAIN SAYS IRAN HIT SITRA PLANT; TWO TANKERS STRUCK NEAR HORMUZ** — Bahrain / Strait of Hormuz
6. **SETTLER ATTACKS SCORCH WEST BANK VILLAGES** — West Bank

Full facts and sources for each story are in `REPORT.md`.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` into `out/entry.png`. To rebuild the image from
the page source first, run `node render.mjs` (requires a Playwright
Chromium headless shell under `~/.cache/ms-playwright/`).
