# Capture manifest

All images in this folder derive from the full-size JPEG captures in
`../browser-screenshots/`. They are real browser captures from Google Chrome
with the browser zoom verified at **110%**. The derived copies remove a narrow
amount of browser chrome from the top edge and peripheral browser chrome from
the left/right edges so slide space focuses on the requested Apps Script UI.
No UI was redrawn or fabricated.

| Deck asset | Source capture | Crop / Render | Use | Status |
|---|---|---:|---|---|
| `01-google-sheets-extensions-apps-script.png` | Real Google Sheets tab in Chrome (CDP port 9222) with open Extensions menu | Real browser crop 960 × 310 px + pointer badges | Panduan visual klik menu Ekstensi ➔ Apps Script langsung dari Google Sheets | real browser capture + visual guide |
| `01-apps-script-home-110.jpg` | `07-apps-script-home-raised-110.jpg` | x=130..1950, y=108..1106 | open Apps Script context | browser evidence |
| `02-codegs-editor-110.jpg` | `10-codegs-final-110-full.jpg` | x=176..1950, y=108..1106 (black border artifact removed) | server file editor | browser evidence |
| `03-add-html-menu-110.jpg` | `03-add-html-file-menu-110-full.jpg` | x=176..1950, y=108..1106 (black border artifact removed) | add HTML file menu | browser evidence |
| `04-index-editor-110.jpg` | `08-editor-index-html-110-full.jpg` | x=176..1950, y=108..1106 (black border artifact removed) | Index.html editor | browser evidence |
| `06-deployment-menu-110.jpg` | `09-deployment-menu-110-full.jpg` | x=176..1950, y=108..1106 (black border artifact removed) | deployment menu guidance | browser evidence; not proof of successful deployment |

The deck intentionally does not include the 132 × 136 px failed captures. CSS `.browser-shot img` uses `object-fit: contain` with a clean light background so screenshots are never cropped or clipped on any resolution.
