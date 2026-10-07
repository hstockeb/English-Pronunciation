"""Generate the mp3 clips used by the app (needs: pip install gTTS).

Run from the repo root:  python3 tools/make_audio.py
Only missing files are created, so it is safe to re-run.
"""
import json, os, re, string, unicodedata
from gtts import gTTS

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OPWORD = {'+': 'plus', '-': 'minus'}


def slug(text):
    # Must match slug() in math.html
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')[:80]


def slug_es(text):
    # Must match slugEs() in lectura.html: accents removed, short readable
    # prefix plus a hash of the whole text so long phrases never collide.
    t = unicodedata.normalize('NFD', text)
    t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    full = re.sub(r'[^a-z0-9]+', '-', t.lower()).strip('-')
    h = 5381
    for c in full:
        h = ((h << 5) + h + ord(c)) & 0xFFFFFFFF
    return f"{full[:50].strip('-')}-{base36(h)}"


def base36(n):
    d = '0123456789abcdefghijklmnopqrstuvwxyz'
    out = ''
    while True:
        n, r = divmod(n, 36)
        out = d[r] + out
        if n == 0:
            return out


def load_js(name):
    src = open(os.path.join(ROOT, name), encoding='utf-8').read()
    return json.loads(src[src.index('{'):src.rindex('}') + 1])


def save(text, path, slow=False, lang='en', tld='us'):
    path = os.path.join(ROOT, path)
    if os.path.exists(path):
        return
    os.makedirs(os.path.dirname(path), exist_ok=True)
    gTTS(text, lang=lang, tld=tld, slow=slow).save(path)
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


def lectura_texts():
    data = load_js('lectura-data.js')
    ph = data['phrases']
    texts = {ph['start'], ph['bad'], ph['end'], *ph['ok']}
    for q in data['questions']:
        texts.add(q['q'])
        texts.add(q['why'])
        texts.update(a[1] for a in q['a'])
    return texts


def lectura():
    for t in sorted(lectura_texts()):
        save(t, f'audio/lectura/{slug_es(t)}.mp3', lang='es', tld='com.mx')


if __name__ == '__main__':
    english()
    math()
    lectura()
