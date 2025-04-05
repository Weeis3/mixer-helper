# 🧪 Schedule I Mixing System

An interactive and slightly chaotic **mixing simulator** that lets you combine various base substances (*Mixables*) with **Ingredients** to create wild and unpredictable effects.

---

## 🚀 Features

- 🌿 Choose from iconic *Mixables* like **OG Kush**, **Green Crack**, or even... **Meth** (👀).
- 🍌 Add ingredients such as **Banana**, **Donut**, **Horse Semen**, and more.
- 🧬 Automatically apply *Effect Replacements* to transform your base effects.
- 💰 Price is dynamically calculated based on the resulting effects.
- 🎨 Slick interface with TailwindCSS + FontAwesome.

---

## 📦 Tech Stack

- **Frontend**: HTML, TailwindCSS, FontAwesome
- **Logic**: Vanilla JavaScript
- **Assets**: Local images for Mixables & Ingredients

---

## 🧬 How It Works

1. **Select a Mixable**  
   Each has a base price and some starting effects.

2. **Add Ingredients**  
   Ingredients can:
   - Add new effects
   - Replace existing ones
   - Apply crazy transformation chains!

3. **See the Result**  
   Your final mixture:
   - Shows a combined list of effects (max 8)
   - Displays a dynamically calculated final price

---

## 📊 Effect Value System

Each effect carries a different value that contributes to the final price.  
Some effects are harmless and fun (`Energizing`, `Spicy`), while others are... *questionable* (`Schizophrenia`, `Explosive`, etc.).

| Effect | Value |
|--------|-------|
| Calming | 0.10 |
| Thought-Provoking | 0.44 |
| Shrinking | 0.60 |
| Zombifying | 0.58 |
| *(and more...)* | ... |

---

## 🧪 Sample JSON Definitions

### Mixable
```js
"OG Kush": {
  img: "mixables/og-kush.png",
  basePrice: 35,
  effects: ["Calming"]
}
```
### Ingredient
```js
"Banana": {
  img: "ingrediants/banana.png",
  effects: ["Gingeritis"],
  replacements: {
    "Calming": "Sneaky",
    "Toxic": "Smelly"
  }
}
```
---

## 💡 Simple card-based layout using TailwindCSS for responsiveness and clarity.

Mixables and Ingredients are selected from dropdowns.

Effects dynamically update.

Price is recalculated in real-time.

---

## 🛠️ Dev Notes
DOM is dynamically populated on DOMContentLoaded.

Effects are stored uniquely per mixture.

A maximum of 8 effects is enforced per mixture.

Ingredient replacements apply in click order.

---

## 📂 File Structure
```pgsql
Copy
Edit
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── mixing-system.js
├── mixables/
│   └── *.png
├── ingrediants/
│   └── *.png
└── README.md
```

---

## 🧠 Coming soon
Export/sharing feature

Rarity tiers for effects

Better visuals when mixing

---

## 🚫 Disclaimer
## ⚠️ Price calculation might not be as accurate with higher ingrediant values
## ⚠️ This system includes fictional or controversial ingredients/effects purely for humorous or creative purposes. Not intended to promote or normalize the use of real illegal substances.

---

## 🧙‍♂️ Author: Weeis3
Feel free to remix, fork, or contribute to the chaos.

---

## 📝 License
This project is released under the MIT License.

---

## Happy Mixing! 🍹✨
