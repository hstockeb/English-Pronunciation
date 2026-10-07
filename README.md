# 🎒 Study

A kid-friendly study web app for a 1st grader: **English spelling dictation**, **math (in English)** and **reading comprehension (in Spanish)**. It is built from the school's own word lists and worksheets, has big buttons, pictures and recorded English audio, and the on-screen text is in Spanish.

🌐 **Live app:** https://hstockeb.github.io/Study/

| Page | Link |
|---|---|
| 🎒 Home: choose a subject | https://hstockeb.github.io/Study/ |
| 🔤 English: Dictado Mágico | https://hstockeb.github.io/Study/english.html |
| 🔢 Math: Math Magic | https://hstockeb.github.io/Study/math.html |
| 📖 Lectura: Lectura Mágica | https://hstockeb.github.io/Study/lectura.html |

> 📱 **Tip:** on an iPhone/iPad, open the link in Safari, then Share → **Add to Home Screen**. It opens like an app.

---

## 🔤 English: Dictado Mágico

Practice for the dictation test with the sounds **/sn/, /sm/, /pr/, /fr/, /br/**:
frog, friend, fresh, snow, snail, snack, small, smile, prince, pretzel, brown, break.

| Mode | What it does |
|---|---|
| 👀 **Aprender** (Learn) | Flashcard with a picture, the word (the sound is shown in color), its Spanish meaning and a spelling tip. Tap any letter to hear it. |
| 🧩 **Armar** (Build) | Hear the word and tap scrambled letter tiles in order. |
| ⌨️ **Escribir** (Write) | Hear the word and type it on a big on-screen keyboard (no autocorrect). |
| ✏️ **Cuaderno** (Notebook) | Same as the real test: hear the word, write it on paper, then check the answer. |

- 🔊 normal speed, 🐢 slow, 💡 hint (first the picture, then the first letters).
- The app only speaks the list words and their letters.
- Words she misses come back at the end of the round, and each word earns up to 3 ⭐.

## 🔢 Math: Math Magic

Every exercise from the two school documents, with the same numbers, objects and English instructions:

| Group | Sections |
|---|---|
| 📘 **Guía**: *Actions Related to Mathematical Operations* | Put together · Separate · Add · Take away · Move forward · Move backward (5 exercises each) |
| 📝 **Pre-Test**: *Math Formative Activity 2 (2nd Term)* | I.1 Add and complete the statements · I.2 Take away and complete the statements · I.3 / I.4 Write the operation (move forward / backward) · I.5 Separate the blocks · I.6 Put the blocks together · II.1 Solve with a drawing · II.2 Use the number line (0–20) · II.3 Solve · III Word problems |

- 🔊 Instructions and problems are **read aloud in English**. After a correct answer it reads the operation, e.g. "3 plus 2 equals 5".
- 👆 Tap objects to count them aloud, or cross them out. Hop along the number line. Draw ⚪ circles and cross them out.
- 🔢 Answers go in with a big number pad, plus + / − for operations. Two wrong tries show the correct answer.
- Run a single section, or the whole **Guía completa** / **Pre-Test completo**.

## 📖 Lectura: Lectura Mágica

A random quiz about the book ***El calcetín de Agustín*** (Mauricio Paredes, illustrated by Verónica Laymuns). The book itself is **not** included in the app; it holds only questions written for studying the story.

- **31 questions:** the characters, what happens and in what order, feelings, the authors and the lesson of the story.
- **Random every time:** each round picks 10 questions at random and shuffles the answer order. **📚 Todas** asks all 31.
- **Read aloud in Spanish:** the question and the 3 answers are read aloud, each answer highlighted while it is read. 🔊 repeats them.
- **Pictures:** every answer has a picture (emoji), so she can answer before she can read everything.
- **After each answer:** a short explanation of the right answer, read aloud. Missed questions come back at the end, and the end screen lists what to review.

---

## ✏️ Updating for a new test

### New English words
1. Edit the `WORDS` list at the top of the `<script>` in `english.html`. Each word has `word`, `sound` (e.g. `'fr'`), `emoji`, `es` (Spanish meaning) and an optional `tip`.
2. Add the new sound to `SOUNDS` if needed.
3. Regenerate the audio (see below).

### New math exercises
1. Edit `math-data.js`. Each section has an English instruction `say`, Spanish help `es`, a `type` and its `items` (`x`, `op` `+`/`-`, `y`, plus type-specific fields).
2. The exercise types are: `groups`, `separate`, `takeaway`, `line`, `story`, `opline`, `blocks`, `pictorial`, `numline`, `solve` and `word`. Copy an existing section of the same type as a template.
3. Regenerate the audio (see below).

### New book quiz
1. Edit `lectura-data.js`: the book info and `questions`. Each question has `q`, three answers `a` as `[emoji, text]` with the **correct one first** (the app shuffles them), and `why`, a short explanation.
2. Regenerate the audio (see below).

### Regenerate the audio
```bash
pip install gTTS
python3 tools/make_audio.py
```
This creates only the missing clips:
- `audio/words/` and `audio/slow/`: English words (normal and slow).
- `audio/letters/`: the letters a–z.
- `audio/math/`: instructions, problems, equations and the numbers 0–20.
- `audio/lectura/`: questions, answers and explanations in Spanish.

Audio file names come from the spoken text. `slug()` in `math.html` and `slugEs()` in `lectura.html` must match `slug()` and `slug_es()` in `tools/make_audio.py`.

---

## 🗂️ Project structure

```
index.html            Home page (choose English, Math or Lectura)
english.html          English dictation app (self-contained)
math.html             Math app (UI + logic)
math-data.js          All math exercises (data only)
lectura.html          Reading quiz app
lectura-data.js       Book quiz questions (data only)
audio/                Recorded mp3 clips (generated)
tools/make_audio.py   Audio generator (gTTS)
.github/workflows/    "Rebuild GitHub Pages" workflow
```

- Plain static HTML, CSS and JavaScript. No build step and no dependencies at runtime.
- Audio uses recorded mp3 files. On iPhone they play even in silent mode. The browser's voice is only a fallback.
- Stars and progress are saved per device, in `localStorage`.

## 🚀 Publishing

- GitHub Pages serves the root of the `main` branch.
- Changes pushed to `main` go live in about 1 minute.
- If the site doesn't update, run the **Rebuild GitHub Pages** workflow from the repo's **Actions** tab.

## 🔊 Troubleshooting

| Problem | Fix |
|---|---|
| No sound | Turn up the volume. On iPhone/iPad also turn off silent mode 🔔. On the English home screen, tap **🔊 Probar sonido**: you should hear "frog". |
| Old version shows | Close the tab and open the link again, or pull down to refresh. |
| Lost stars | Stars are saved per device and browser. A private window or cleared site data resets them. |
