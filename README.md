# 🎒 ¡A estudiar!

Web app para que una niña de 1° básico practique **inglés** y **matemáticas** (en inglés).

🌐 **App:** https://hstockeb.github.io/English-Pronunciation/

## Secciones
| Página | Qué es |
|---|---|
| `index.html` | Inicio: elegir 🔤 English o 🔢 Math |
| `english.html` | 🐸 **Dictado Mágico**: dictado de palabras (/sn/, /sm/, /pr/, /fr/, /br/) |
| `math.html` | 🔢 **Math Magic**: los ejercicios de la guía *Actions Related to Mathematical Operations* y del *Math Pre-Test 2* |

### Dictado Mágico (English)
| Modo | Qué hace |
|---|---|
| 👀 **Aprender** | Tarjetas con dibujo, palabra, significado y pista. Toca cada letra para escucharla. |
| 🧩 **Armar** | Escucha la palabra y arma con letras desordenadas. |
| ⌨️ **Escribir** | Escucha y escribe con un teclado grande en pantalla. |
| ✏️ **Cuaderno** | Igual que la prueba: escribe en papel y luego revisa la respuesta. |

### Math Magic
- **📘 Guía:** Put together, Separate, Add, Take away, Move forward, Move backward.
- **📝 Pre-Test:** oraciones de sumar/quitar, operación en la recta numérica, bloques, dibujo, recta 0–20, resolver y problemas.
- Instrucciones y problemas **leídos en inglés** 🔊; tocar objetos los cuenta en voz alta; recta numérica para saltar; panel para dibujar círculos.

## Cambiar contenido
- Palabras de inglés: lista `WORDS` en `english.html`.
- Ejercicios de matemáticas: `math-data.js`.
- Luego regenera los audios: `pip install gTTS && python3 tools/make_audio.py`

## Publicación
GitHub Pages desde la rama `main` (carpeta raíz). El workflow `Rebuild GitHub Pages` fuerza una nueva publicación.
