## Versión corregida (pantalla vacía)

La aplicación ahora lleva todo el código y el CSS incrustados en `index.html`. Para resolver la pantalla oscura, sustituye el archivo `index.html` de la raíz de tu repositorio de GitHub por este nuevo `index.html`, confirma el commit y recarga la página con Ctrl+Shift+R. No necesitas subir los otros archivos para que funcione; se conservan para mantenimiento.

GitHub Pages: Settings → Pages → Deploy from a branch → main / root.

# THE SECRET CODE — ENGLISH ESCAPE ROOM

**Aspaen Neiva** · Four levels · 16 English missions · Static website for GitHub Pages.

## Start / publish

1. Create a new public GitHub repository (for example `the-secret-code`).
2. Upload **all contents** of this folder into the repository root, preserving `data/` and `utils/`.
3. In GitHub, open **Settings → Pages → Build and deployment**.
4. Choose **Deploy from a branch**, then `main`, folder `/ (root)`, and save.
5. Visit `https://YOUR-USERNAME.github.io/the-secret-code/` after Pages deploys.

No paid accounts or external CDN dependencies are required. On some browsers, ES modules cannot be loaded when opening `index.html` from `file://`. Use GitHub Pages or a local web server during development (`python -m http.server`). This is not necessary once deployed.

## Gameplay

- Choose Level 1, 2, 3 or 4 and enter an agency name.
- Only Mission 1 is initially accessible. Enter the exact digit to unlock the next mission.
- Student responses are captured locally but are **not graded automatically**.
- Teacher Verified Mode inserts a physical-teacher approval step. It is a **classroom control**, not secure authentication.
- The timer, hints, attempts, mission status and team score are saved locally in the browser.
- The final safe is available only after all four digits are verified.
- In **Mission Report**, a printable page opens; choose **Save as PDF** in the browser’s Print dialog. An HTML copy is downloaded as a fallback.

## Editing questions

Edit `data/missions.js`. Every level has four missions; each includes a `digit` and optional content (`intro`, `quote`, `chips`, `lines`, `questions`, `fields`, `hints`, `instruction`). Update the level's `code` as well when changing a digit. `digit` is always one digit (0–9), `code` is exactly four digits.

## Files

- `index.html` — application entry point.
- `styles.css` — responsive interface and mission-card design.
- `script.js` — game logic, teacher panel, validation, timer, scores, saving, audio, safe.
- `data/missions.js` — all 16 mission texts and codes.
- `utils/storage.js` — local persistence.
- `utils/validation.js` — input validation and HTML escaping.
- `utils/reports.js` — printable mission report and HTML download fallback.
- `assets/` — local folder reserved for optional original image/sound assets. The built-in game uses emoji, CSS artwork and Web Audio sound; it does not depend on external assets.

## Key answer codes

Level 1: `8646`; Level 2: `6046`; Level 3: `6584`; Level 4: `5753`.

**Level 2 Mission 2:** 8:30 + 20 min = 8:50; +30 min = 9:20; +10 min = 9:30. Per game instructions, the **last digit of `9:30`** is `0`.

**Level 4 Mission 3:** Formal-standard agreement is applied to “Neither the agents nor the director **were** informed” (incorrect; closest subject is singular `director`, use `was`). Four sentences are correct, then add one = `5`.

## Privacy / security limitations

GitHub Pages serves all JS files publicly. Anyone with technical knowledge can inspect the digits, teacher answer key and local controls. Do not treat the teacher panel as authentication or a protected exam. For secure accounts and centralized grades, a backend (Firebase / Supabase) with real authorization is needed. Local browser records are not synchronized across devices. The game intentionally avoids collecting student names, email or personal IDs; use team names.

## Accessibility

Responsive mobile/tablet/desktop layouts, native keyboard-accessible buttons and inputs, contrast-aware themes, reduced-motion support and text-based instructions. Audio starts only after a user interaction.
