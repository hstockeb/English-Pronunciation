window.MATH = {
  "groups": [
    { "id": "guide", "title": "📘 Guía", "es": "Actions Related to Mathematical Operations" },
    { "id": "test",  "title": "📝 Pre-Test", "es": "Math Formative Activity 2 (2nd Term)" }
  ],
  "sections": [
    {
      "id": "g-together", "group": "guide", "icon": "🤝", "title": "Put together",
      "say": "Look at the groups. Put them together. How many are there in all?",
      "es": "Mira los grupos. Júntalos. ¿Cuántos hay en total?",
      "type": "groups",
      "items": [
        { "e": "🍎", "x": 3, "op": "+", "y": 2 },
        { "e": "🏐", "x": 4, "op": "+", "y": 1 },
        { "e": "⭐", "x": 2, "op": "+", "y": 3 },
        { "e": "❤️", "x": 3, "op": "+", "y": 2 },
        { "e": "🌸", "x": 3, "op": "+", "y": 3 }
      ]
    },
    {
      "id": "g-separate", "group": "guide", "icon": "✂️", "title": "Separate",
      "say": "Look at the group. Separate it into two parts. Complete the numbers.",
      "es": "Mira el grupo. Sepáralo en dos partes. Completa los números.",
      "type": "separate",
      "items": [
        { "e": "🌸", "x": 5, "op": "-", "y": 2 },
        { "e": "🥕", "x": 6, "op": "-", "y": 4 },
        { "e": "🐟", "x": 4, "op": "-", "y": 3 },
        { "e": "⭐", "x": 5, "op": "-", "y": 1 },
        { "e": "🐞", "x": 5, "op": "-", "y": 5 }
      ]
    },
    {
      "id": "g-add", "group": "guide", "icon": "➕", "title": "Add",
      "say": "Add. Write the total.",
      "es": "Suma. Escribe el total.",
      "type": "groups",
      "items": [
        { "e": "🍎", "x": 3, "op": "+", "y": 2 },
        { "e": "🐝", "x": 4, "op": "+", "y": 1 },
        { "e": "❤️", "x": 4, "op": "+", "y": 3 },
        { "e": "🐸", "x": 2, "op": "+", "y": 4 },
        { "e": "☀️", "x": 3, "op": "+", "y": 2 }
      ]
    },
    {
      "id": "g-takeaway", "group": "guide", "icon": "➖", "title": "Take away",
      "say": "Look at the group. Cross out the ones you take away. Write how many are left.",
      "es": "Mira el grupo. Tacha los que quitas. Escribe cuántos quedan.",
      "type": "takeaway",
      "items": [
        { "e": "🍎", "x": 4, "op": "-", "y": 2 },
        { "e": "🐤", "x": 5, "op": "-", "y": 3 },
        { "e": "⭐", "x": 4, "op": "-", "y": 1 },
        { "e": "🌸", "x": 4, "op": "-", "y": 4 },
        { "e": "🧸", "x": 4, "op": "-", "y": 2 }
      ]
    },
    {
      "id": "g-forward", "group": "guide", "icon": "⏩", "title": "Move forward",
      "say": "Move forward on the number line.",
      "es": "Avanza en la recta numérica. Toca los números para saltar.",
      "type": "line",
      "items": [
        { "x": 3, "op": "+", "y": 2, "say": "Start at 3. Move forward 2 spaces." },
        { "x": 1, "op": "+", "y": 4, "say": "Start at 1. Move forward 4 spaces." },
        { "x": 6, "op": "+", "y": 3, "say": "Start at 6. Move forward 3 spaces." },
        { "x": 2, "op": "+", "y": 5, "say": "Start at 2. Move forward 5 spaces." },
        { "x": 7, "op": "+", "y": 1, "say": "Start at 7. Move forward 1 space." }
      ]
    },
    {
      "id": "g-backward", "group": "guide", "icon": "⏪", "title": "Move backward",
      "say": "Move backward on the number line.",
      "es": "Retrocede en la recta numérica. Toca los números para saltar.",
      "type": "line",
      "items": [
        { "x": 7, "op": "-", "y": 2, "say": "Start at 7. Move backward 2 spaces." },
        { "x": 9, "op": "-", "y": 3, "say": "Start at 9. Move backward 3 spaces." },
        { "x": 6, "op": "-", "y": 1, "say": "Start at 6. Move backward 1 space." },
        { "x": 8, "op": "-", "y": 4, "say": "Start at 8. Move backward 4 spaces." },
        { "x": 5, "op": "-", "y": 2, "say": "Start at 5. Move backward 2 spaces." }
      ]
    },

    {
      "id": "t-add-story", "group": "test", "icon": "🐶", "title": "I.1 Add and complete the statements",
      "say": "Add and complete the statements.",
      "es": "Suma y completa las oraciones.",
      "type": "story",
      "items": [
        { "e": "🐶", "x": 3, "op": "+", "y": 2,
          "t": ["There were", "dogs.", "more dogs came.", "Now there are", "dogs."],
          "say": "There were how many dogs? How many more dogs came? How many dogs are there now?" },
        { "e": "🦋", "x": 4, "op": "+", "y": 3,
          "t": ["There were", "butterflies.", "more butterflies came.", "Now there are", "butterflies."],
          "say": "There were how many butterflies? How many more butterflies came? How many butterflies are there now?" },
        { "e": "🍎", "x": 2, "op": "+", "y": 3,
          "t": ["There were", "apples.", "more apples came.", "Now there are", "apples."],
          "say": "There were how many apples? How many more apples came? How many apples are there now?" }
      ]
    },
    {
      "id": "t-take-story", "group": "test", "icon": "🦆", "title": "I.2 Take away and complete the statements",
      "say": "Take away and complete the statements.",
      "es": "Quita y completa las oraciones.",
      "type": "story",
      "items": [
        { "e": "🦆", "x": 5, "op": "-", "y": 3,
          "t": ["There were", "ducks.", "ducks flew away.", "Now there are", "ducks."],
          "say": "There were how many ducks? How many ducks flew away? How many ducks are there now?" },
        { "e": "👦", "x": 4, "op": "-", "y": 1,
          "t": ["There were", "boys.", "boy ran away.", "Now there are", "boys."],
          "say": "There were how many boys? How many boys ran away? How many boys are there now?" },
        { "e": "🐱", "x": 3, "op": "-", "y": 1,
          "t": ["There were", "cats.", "cat jumped out.", "Now there are", "cats."],
          "say": "There were how many cats? How many cats jumped out? How many cats are there now?" }
      ]
    },
    {
      "id": "t-forward-op", "group": "test", "icon": "🐸", "title": "I.3 Write the operation: move forward",
      "say": "Write the operation for each action: move forward.",
      "es": "Escribe la operación para cada acción: avanzar.",
      "type": "opline",
      "items": [
        { "e": "🐸", "x": 2, "op": "+", "y": 3 },
        { "e": "🐰", "x": 5, "op": "+", "y": 4 }
      ]
    },
    {
      "id": "t-backward-op", "group": "test", "icon": "🐢", "title": "I.4 Write the operation: move backward",
      "say": "Write the operation for each action: move backward.",
      "es": "Escribe la operación para cada acción: retroceder.",
      "type": "opline",
      "items": [
        { "e": "🐢", "x": 8, "op": "-", "y": 3 },
        { "e": "🐱", "x": 10, "op": "-", "y": 4 }
      ]
    },
    {
      "id": "t-separate-blocks", "group": "test", "icon": "🧱", "title": "I.5 Separate the blocks",
      "say": "Separate the blocks and complete the operation.",
      "es": "Separa los bloques y completa la operación.",
      "type": "blocks",
      "items": [
        { "x": 7, "op": "-", "y": 4, "dark": 4, "light": 3 },
        { "x": 8, "op": "-", "y": 2, "dark": 2, "light": 6 }
      ]
    },
    {
      "id": "t-together-blocks", "group": "test", "icon": "🧩", "title": "I.6 Put the blocks together",
      "say": "Put the blocks together and complete the operation.",
      "es": "Junta los bloques y completa la operación.",
      "type": "blocks",
      "items": [
        { "x": 3, "op": "+", "y": 5, "dark": 3, "light": 5 },
        { "x": 4, "op": "+", "y": 4, "dark": 4, "light": 4 }
      ]
    },
    {
      "id": "t-pictorial", "group": "test", "icon": "⚪", "title": "II.1 Solve with a drawing",
      "say": "Solve the exercises using a pictorial representation.",
      "es": "Resuelve dibujando. Toca ⚪ para dibujar círculos y toca un círculo para tacharlo.",
      "type": "pictorial",
      "items": [
        { "x": 6, "op": "+", "y": 4 },
        { "x": 5, "op": "+", "y": 3 },
        { "x": 9, "op": "-", "y": 4 },
        { "x": 10, "op": "-", "y": 6 }
      ]
    },
    {
      "id": "t-numberline", "group": "test", "icon": "📏", "title": "II.2 Use the number line",
      "say": "Use the number line to solve the operations.",
      "es": "Usa la recta numérica para resolver. Toca los números para saltar.",
      "type": "numline",
      "items": [
        { "x": 6, "op": "+", "y": 8 },
        { "x": 14, "op": "-", "y": 6 }
      ]
    },
    {
      "id": "t-solve", "group": "test", "icon": "🔢", "title": "II.3 Solve",
      "say": "Solve the following additions and subtractions.",
      "es": "Resuelve las siguientes sumas y restas.",
      "type": "solve",
      "items": [
        { "x": 9, "op": "+", "y": 6 },
        { "x": 4, "op": "+", "y": 8 },
        { "x": 7, "op": "-", "y": 3 },
        { "x": 10, "op": "-", "y": 4 },
        { "x": 8, "op": "+", "y": 5 },
        { "x": 9, "op": "-", "y": 6 }
      ]
    },
    {
      "id": "t-word", "group": "test", "icon": "🎈", "title": "III. Word problems",
      "say": "Represent with a circle each word problem and write the operation with the corresponding answer.",
      "es": "Dibuja círculos para cada problema y escribe la operación con la respuesta.",
      "type": "word",
      "items": [
        { "e": "🎈", "x": 4, "op": "+", "y": 5,
          "lines": ["Sofia had 4 balloons.", "Then she got 5 more balloons.", "How many balloons does she have now?"],
          "after": ["She has", "balloons now."],
          "say": "Sofia had 4 balloons. Then she got 5 more balloons. How many balloons does she have now?" },
        { "e": "🍎", "x": 7, "op": "-", "y": 3,
          "lines": ["Tom had 7 apples.", "He ate 3.", "How many apples does he have left?"],
          "after": ["He has", "apples left."],
          "say": "Tom had 7 apples. He ate 3. How many apples does he have left?" }
      ]
    }
  ]
};
