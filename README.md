# 🗂️ Developer Snippet Manager

A lightweight, browser-based tool for saving, searching, copying, and managing code snippets — no backend required.

---

## 📋 Features

- **Add Snippets** – Save a code snippet with a custom title
- **Search** – Filter snippets in real-time by title
- **Copy to Clipboard** – One-click copy of any snippet
- **Delete Snippets** – Remove snippets you no longer need
- **Persistent Storage** – Snippets are saved in `localStorage` and survive page refreshes

---

## 🗂️ Project Structure

```
snippet-manager/
├── index.html   # UI layout and markup
└── app.js       # App logic (add, render, copy, delete)
```

---

## 🚀 Getting Started

No install or build step needed. Just open the file in your browser:

```bash
# Clone or download the project, then:
open index.html
```

Or serve it with any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## 🧪 How to Use

1. Enter a **title** for your snippet (e.g. `Debounce Function`)
2. Paste your **code** in the textarea
3. Click **Add Snippet** — it appears in the grid below
4. Use the **search bar** to filter snippets by title
5. Click **Copy** to copy the code to your clipboard
6. Click **Delete** to remove a snippet permanently

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS (CDN) | Styling and layout |
| Vanilla JavaScript | App logic |
| localStorage API | Persistent client-side storage |

---

## ⚠️ Limitations

- **localStorage only** — data is stored per browser/device and not synced across devices
- **No syntax highlighting** — code is displayed as plain text
- **No categories or tags** — snippets are filtered by title only
- **No import/export** — snippets cannot be backed up or transferred currently

---

## 🔮 Possible Improvements

- [ ] Add syntax highlighting (e.g. with [Prism.js](https://prismjs.com/))
- [ ] Add language/tag categorization
- [ ] Export snippets as JSON for backup
- [ ] Import snippets from a JSON file
- [ ] Edit existing snippets inline
- [ ] Sort snippets by date added

---

## 📄 License

This project is open source and free to use under the [MIT License](https://opensource.org/licenses/MIT).
