# GCSE & IGCSE Mock Revision Hub — modular build

## Run locally
Open `index.html` in a browser, or serve this folder with a simple static web server.
The project uses relative paths, so the same structure can be uploaded to itch.io as an HTML5 game ZIP.

## Upload to itch.io
1. Keep the folder structure intact.
2. Zip the *contents* of this folder so `index.html` is at the ZIP root (not inside an extra parent folder).
3. On itch.io, create/edit a project and choose **HTML** as the project kind.
4. Upload the ZIP and enable **This file will be played in the browser**.
5. Test the embedded browser version after upload.

## File layout
- `index.html` — main page markup and asset references.
- `css/01-base.css` — original base styles.
- `css/02-ui-v5.css` — UI theme overrides.
- `css/03-ui-v6.css` — final space-theme overrides.
- `js/00-storage-namespace.js` — early localStorage namespace patch.
- `js/01-app-core.js` — main revision hub data and core app logic (kept intact to avoid breaking shared dependencies).
- `js/02-ui-effects.js` — UI effects enhancement.
- `js/03-profile-and-theme.js` — profile/theme enhancement.
- `js/04-subject-enhancements.js` — subject and quiz enhancements.
- `js/05-background-animation.js` — animated background canvas.

## Debugging notes
- Open browser developer tools and check the **Console** first for errors.
- Keep filenames and folder names unchanged unless you also update their references in `index.html`.
- The site loads Tailwind CSS and Google Fonts from external CDNs, so those features require internet access.
- Browser storage is local to each user's browser/device; it is not a shared online account.
- This is a source-organisation pass, not a redesign or logic rewrite. The main app script remains a larger file because its question banks and functions have cross-dependencies; splitting it further safely would require a deliberate module/API refactor and regression testing.


## English Language A Paper 2 study guides

The English subject area now opens a dedicated study-guide experience for Pearson Edexcel International GCSE English Language A (4EA1/02). It includes guides for all 10 Part 2 anthology texts, imaginative narrative and descriptive writing guidance, model openings with teacher annotations, exam timing, student-friendly AO1/AO2/AO4/AO5 explanations, and common pitfalls. Quiz/test navigation is not shown inside this English Paper 2 section; other subjects remain on their existing revision workflows.

The anthology list and assessment outline follow Pearson's International GCSE English Language A Specification, Issue 7 (August 2025). For prose extracts, use the exact anthology text your school has issued: the guide deliberately avoids reproducing the copyrighted texts.


## Latest polish update
- Light mode now uses the same clean light palette as the rest of the hub instead of white English guide cards that clash with the site.
- The light/dark toggle is visible and respects the saved `hub_dark` preference.
- English guide cards, navigation, search fields, quote blocks and progress elements adapt to both themes.
- Added searchable anthology and writing guide lists.
- Added a saved “Mark as revised” control for anthology and writing guides, with an overview progress bar. Progress is stored locally under the active student profile.
- Added keyboard focus styling, reduced-motion support and print-friendly guide layouts.

All JavaScript files pass `node --check`. A full interactive browser run could not be completed in this environment, so please test the theme toggle and English navigation locally before publishing.
