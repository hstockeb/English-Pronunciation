"""Generate the mp3 clips used by the app (needs: pip install gTTS).

Run from the repo root:  python3 tools/make_audio.py
Only missing files are created, so it is safe to re-run.
"""
import json, os, re, string
from gtts import gTTS

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OPWORD = {'+': 'plus', '-': 'minus'}


def slug(text):
    # Must match slug() in math.html
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')[:80]


def save(text, path, slow=False):
    path = os.path.join(ROOT, path)
    if os.path.exists(path):
        return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    gTTS(text, lang='en', tld='us', slow=slow).save(path)
    print('created', os.path.relpath(path, ROOT))


def english():
    html = open(os.path.join(ROOT, 'english.html'), encoding='utf-8').read()
    for w in re.findall(r"word:'([a-z]+)'", html):
        save(w, f'audio/words/{w}.mp3')
        save(w, f'audio/slow/{w}.mp3', slow=True)
    for c in string.ascii_lowercase:
        save(c.upper() + '.', f'audio/letters/{c}.mp3')


def math_texts():
    src = open(os.path.join(ROOT, 'math-data.js'), encoding='utf-8').read()
    data = json.loads(src[src.index('{'):src.rindex('}') + 1])
    texts = {str(n) for n in range(21)}
    for sec in data['sections']:
        texts.add(sec['say'])
        for it in sec['items']:
            if 'say' in it:
                texts.add(it['say'])
            x, op, y = it['x'], it['op'], it['y']
            z = x + y if op == '+' else x - y
            texts.add(f"{x} {OPWORD[op]} {y}")
            texts.add(f"{x} {OPWORD[op]} {y} equals {z}")
    return texts


def math():
    for t in sorted(math_texts()):
        save(t, f'audio/math/{slug(t)}.mp3')


if __name__ == '__main__':
    english()
    math()
