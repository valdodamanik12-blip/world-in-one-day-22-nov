// Render page.html to entry.png at exactly 1024x1024.
// Uses the Playwright chromium headless shell found under
// ~/.cache/ms-playwright/. No network access is used or needed.
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const cacheRoot = join(homedir(), ".cache", "ms-playwright");

function locateShell() {
  const entries = readdirSync(cacheRoot)
    .filter((name) => name.startsWith("chromium_headless_shell-"))
    .sort();
  for (const entry of entries.reverse()) {
    const candidate = join(
      cacheRoot, entry, "chrome-headless-shell-linux64", "chrome-headless-shell",
    );
    if (existsSync(candidate)) return candidate;
  }
  throw new Error("chromium headless shell not found under " + cacheRoot);
}

const shell = locateShell();
const htmlUrl = pathToFileURL(join(here, "page.html")).href;
const outFile = join(here, "entry.png");

const args = [
  "--headless",
  "--disable-gpu",
  "--no-sandbox",
  "--hide-scrollbars",
  "--force-device-scale-factor=1",
  "--window-size=1024,1024",
  "--screenshot=" + outFile,
  htmlUrl,
];

const run = spawnSync(shell, args, { stdio: "inherit" });
if (run.status !== 0) {
  throw new Error("headless shell exited with status " + run.status);
}
console.log("wrote " + outFile);
