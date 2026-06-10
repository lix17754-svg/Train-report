---
name: project-iteration
description: Use when forking a live app to a new major version while keeping the old version untouched—local folder copy, new GitHub repo, new Cloudflare Pages project, env var migration, deploy, and curl verification. Triggers include nuannuanv3→v4, version fork, retain old deployment, independent Pages project, or user says「保留原版本」「新版本迭代」「复制部署」.
---

# Project Iteration

## Overview

Fork **version N → N+1** as three independent surfaces: local folder, GitHub repo, Cloudflare Pages project. Old version stays frozen—no push, redeploy, or config changes on N.

**REQUIRED SUB-SKILL:** Use `online-api-cloudflare-deploy` for bundled `_worker.js`, `.pages-build`, and API deploy troubleshooting.

## Iron Rules

| ✅ Do | ⛔ Never |
|-------|----------|
| Work only in the **new** folder/repo/project | Modify, push, or redeploy the **old** GitHub repo |
| Create **new** GitHub repo + **new** Pages project | Touch old Cloudflare project env vars or deployments |
| Report each step before moving on; say immediately if stuck | Run long background tasks without status updates |
| Verify with `curl` before claiming done | Assume env vars copied because secret **names** exist |

**Violating the letter of these rules violates the spirit.**

## Naming Convention

Pick a slug once (e.g. `nuannuanv4`). Use consistently:

| Surface | Pattern | Example |
|---------|---------|---------|
| Local folder | user choice | `暖暖v4` |
| `package.json` name | `nuannuan-v4` | npm package |
| Cloudflare Pages | `nuannuanv4` | `--project-name=nuannuanv4` |
| GitHub repo | `nuannuan-v4` or `nuannuanv4` | either OK if documented |
| Domain | `<slug>.pages.dev` | `nuannuanv4.pages.dev` |

## Workflow Checklist

Copy and tick as you go:

```
- [ ] Step 0: Confirm source version is healthy (old API returns 200)
- [ ] Step 1: Copy local folder + rename identifiers
- [ ] Step 2: New git repo + push to new GitHub remote
- [ ] Step 3: Create new Cloudflare Pages project + first deploy
- [ ] Step 4: Copy environment variables (real values, not placeholders)
- [ ] Step 5: Redeploy + verify API (fallback:false)
- [ ] Step 6: Confirm old version still works unchanged
```

Execute **in order**. Pause and tell the user if auth (`gh`, `wrangler`) is missing.

---

### Step 0 — Baseline old version

```bash
curl -sS -X POST "https://<OLD>.pages.dev/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"text":"ping"}'
```

Record: HTTP status, `fallback` field, `persisted` if applicable. Do not change old project after this.

---

### Step 1 — Local copy + rename

```bash
SRC="/path/to/暖暖v3"
DST="/path/to/暖暖v4"
OLD_SLUG="nuannuanv3"
NEW_SLUG="nuannuanv4"

rsync -a \
  --exclude 'node_modules' --exclude '.git' --exclude 'dist' \
  --exclude '.pages-build' --exclude '.wrangler' --exclude '*.zip' \
  "$SRC/" "$DST/"

cd "$DST"
grep -rl "$OLD_SLUG" . --exclude-dir=node_modules --exclude-dir=.git \
  | xargs sed -i '' "s/$OLD_SLUG/$NEW_SLUG/g"
npm install
```

**Must-check files:** `package.json` (`deploy:pages` → `--project-name=$NEW_SLUG`, output dir `.pages-build`), `wrangler.toml` (`name = "$NEW_SLUG"`), `README.md`.

```bash
grep -r "$OLD_SLUG" . --exclude-dir=node_modules --exclude-dir=.git || echo "rename clean"
```

---

### Step 2 — New GitHub repo

```bash
cd "$DST"
git init
git add .
git commit -m "init: <project> vN+1 from vN"

# If gh is installed:
gh auth status || echo "STOP: user must run gh auth login"
gh repo create "$NEW_SLUG" --public --source=. --remote=origin --push

# Without gh: user creates empty repo in browser, then:
git remote add origin "https://github.com/<user>/$NEW_SLUG.git"
git push -u origin main
```

**Never** push to the old repo remote.

---

### Step 3 — New Cloudflare Pages project

```bash
npx wrangler whoami || echo "STOP: user must run npx wrangler login"
npm run build:pages-zip
npm run deploy:pages
# or: npx wrangler pages deploy .pages-build --project-name=$NEW_SLUG --commit-dirty=true
```

Confirm project exists:

```bash
npx wrangler pages project list | grep "$NEW_SLUG"
```

---

### Step 4 — Environment variables

Cloudflare stores secrets per project. **Listing secret names ≠ values are set.** Empty placeholders cause `fallback: true`.

**Preferred — copy from a readable local `.env` on the source machine:**

```bash
cd "$DST"
python3 <<'PY'
import json, subprocess, sys
from pathlib import Path

env_path = Path("/path/to/source/.env")  # or older version's .env
keys = ["OPENAI_API_KEY", "OPENAI_PROVIDER", "OPENAI_BASE_URL", "OPENAI_MODEL"]
vals = {}
for line in env_path.read_text(encoding="utf-8").splitlines():
    line = line.strip()
    if not line or line.startswith("#") or "=" not in line:
        continue
    k, v = line.split("=", 1)
    k, v = k.strip(), v.strip().strip('"').strip("'")
    if k in keys:
        vals[k] = v
missing = [k for k in keys if not vals.get(k)]
if missing:
    sys.exit(f"Missing keys: {missing}")
subprocess.run(
    ["./node_modules/.bin/wrangler", "pages", "secret", "bulk",
     f"--project-name={NEW_SLUG}"],
    input=json.dumps(vals), text=True, check=True,
)
print("secrets uploaded")
PY
```

**If `.env` read times out** (iCloud placeholder): ask user to paste values from Dashboard, or use Dashboard copy for non-secrets and re-enter `OPENAI_API_KEY`.

**Dashboard fallback:** old project → Settings → Environment variables → Production → replicate all vars on new project.

**Redeploy after secret changes.**

---

### Step 5 — Verify new version

```bash
curl -sS -X POST "https://$NEW_SLUG.pages.dev/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"text":"你好"}'
```

| Field | Pass |
|-------|------|
| HTTP | 200 |
| `fallback` | `false` (model + prompts, not local stub) |
| `reply` | Non-template text (not hardcoded local reply) |

Use `text` in JSON body (not `message`) if the handler expects `payload.text`.

---

### Step 6 — Confirm old version untouched

```bash
curl -sS -X POST "https://<OLD>.pages.dev/api/chat" \
  -H "Content-Type: application/json" \
  -d '{"text":"ping"}'
```

Old project must still return `fallback: false` (or same baseline as Step 0).

---

## D1 Database (optional)

Default for 暖暖-style apps: **share the same D1** across versions—both `wrangler.toml` keep the same `database_id`. Chat history is unified; code/deploy remain independent.

To isolate data later: `npm run d1:create` in the new project, update `database_id`, run `d1:migrate:remote`.

---

## Common Mistakes

| Symptom | Cause | Fix |
|---------|-------|-----|
| `fallback: true`, template reply | Missing or empty `OPENAI_API_KEY` | `wrangler pages secret bulk` with real values; redeploy |
| Secrets listed but API fails | Placeholder secrets from prior automation | Re-upload values; redeploy |
| POST `/api/chat` → 405 | Unbundled `_worker.js` in zip | `npm run build:pages-zip`; see `online-api-cloudflare-deploy` |
| `.env` read timeout | iCloud-evicted file | Download locally or use Dashboard |
| `gh: command not found` | CLI not installed | `git push` to manually created repo |
| Changed old version by accident | Wrong `--project-name` or remote | **Stop**; only use new slug and new remote |

## Interaction

- Execute steps in the **foreground**; report result after each step.
- If slower than the user running terminal commands, give **copy-paste commands** immediately.
- Local file edits ≠ online update; must **deploy** or push + CI for production to change.

## Reference: 暖暖 v3 → v4 (2026-06)

| | v3 (frozen) | v4 (new) |
|--|-------------|----------|
| Local | `.../暖暖v3` | `.../暖暖v4` |
| GitHub | `nuannuan-v3` | `nuannuan-v4` |
| Cloudflare | `nuannuanv3` | `nuannuanv4` |
| URL | nuannuanv3.pages.dev | nuannuanv4.pages.dev |
| D1 | shared `database_id` | same (by design) |
