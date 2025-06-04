# 🚀 GrowthX Animation Assignment

This project is a pixel-perfect recreation of a custom animation based on a provided video reference for GrowthX Club. Built with **React**, **Framer Motion**, and **Tailwind CSS**, it showcases a smooth, performant, and visually engaging animation that loads instantly.

---

## 📸 Preview

The animation includes:
- A 4-point star shape that animates into the center with rotation and scale
- A top and bottom half clip animation using custom SVG stars
- A glowing "ELEVATE" text that animates upward with a shimmering effect
<img width="986" alt="image" src="https://github.com/user-attachments/assets/bafe1034-0225-484b-b456-908b9cc45e33" />

---

## 🛠 Tech Stack

- **React (Vite)**
- **Framer Motion** – for smooth animations
- **Tailwind CSS** – for utility-first styling
- **SVG + CSS Clip Paths** – to mask star animations

---

## 🚀 Getting Started

### 1. Clone the Repository

**bash
git clone https://github.com/maruthikr/Assignment-SDE-Frontend
cd growthx-animation

### 2. Install Dependencies
#npm install
### 3. Run Locally
npm run dev

🧱 Folder Structure
src/
├── components/
│   ├── TopHalfStar.jsx        # Top clipped star animation
│   ├── BottomHalfStar.jsx     # Bottom clipped star with line drawing + fill
│   ├── ElevateText.jsx        # "ELEVATE" word with shine animation
│   └── OuterRing.jsx          # Optional ring (decorative)
├── App.jsx                    # Root layout and sequence
├── index.css                  # Tailwind base
└── main.jsx                   # App entry

### Assignment Constraints Covered ###
✅ No Lottie or similar libraries used

✅ No dynamic imports (import() or next/dynamic)

✅ Instant animation trigger on load

✅ Smooth, optimized performance

✅ Fully responsive with clean code
