
# ⚡ Sync — Creative Agency Experience

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> A high-end, immersive creative agency website clone of [Sync](https://sync.amsterdam/), originally designed by Jordan Gilroy and developed by Dennis Snellenberg. This project focuses on high-performance animations, seamless transitions, and award-winning user experience.

---

## ✨ Core Features

- 🌀 **Smooth Scrolling:** Integrated Lenis/Locomotive scroll for a buttery-smooth feel.
- 🧲 **Magnetic Interactions:** Magnetic buttons and menu items that follow the cursor.
- 🖼️ **Parallax Project Grids:** dynamic project displays with synchronized scroll-based movement.
- 📱 **Fully Responsive:** Meticulously crafted layouts that work from 4K monitors to mobile devices.
- 🎭 **Page Transitions:** Fluid morphing effects and entry animations using Framer Motion.
- 🎨 **SVG Path Animations:** Complex SVG masking and path manipulation for interactive UI elements.

---

## 🚀 Animation Libraries & Implementation

The "magic" of this site lies in its sophisticated animation stack. Below is how the core libraries are implemented:

### 🟢 GSAP (GreenSock Animation Platform)
GSAP is the powerhouse behind the scroll-driven animations and complex timelines.
- **ScrollTrigger:** Used to trigger element reveals, parallax backgrounds, and text scrubbing as the user scrolls.
- **CustomEase:** Implemented to create the "organic" and "premium" bounce/friction feel in UI transitions.
- **Implementation:** Integrated within `useEffect` or `useLayoutEffect` hooks using `gsap.context()` for clean memory management and React compatibility.

### 🎬 Framer Motion
Used for high-level component lifecycle animations and micro-interactions.
- **AnimatePresence:** Orchestrates entry and exit animations for the navigation menu and page overlays.
- **Layout Animations:** Handles the seamless movement of elements when the state changes (e.g., filtering projects).

### 🌊 Lenis (Smooth Scroll)
Ensures that GSAP's `ScrollTrigger` stays perfectly in sync with the user's input.
- **RequestAnimationFrame:** The scroll loop is tied to the browser's refresh rate to prevent "jitter" often seen in standard CSS scrolling.

---

## 📂 Folder Structure

The project follows a modular and clean architecture optimized for Next.js:

```text
sync/
├── public/                 # Static assets (images, videos, SVGs)
├── src/
│   ├── app/                # Next.js App Router (Layouts & Pages)
│   │   ├── layout.js       # Root layout with Lenis provider
│   │   └── page.js         # Entry point (Home Page)
│   ├── components/         # Atomic component design
│   │   ├── Header/         # Sticky navigation & Magnetic Menu
│   │   ├── Hero/           # Landing section with SVG animations
│   │   ├── Projects/       # Project grid with GSAP Parallax
│   │   ├── Description/    # Text reveal animations on scroll
│   │   ├── SlidingImages/  # Infinite scroll marquee of work
│   │   └── Footer/         # Contact section with "Rounded Corner" effect
│   ├── hooks/              # Custom React hooks (useDimension, useMousePosition)
│   ├── utils/              # Animation helper functions & GSAP configs
│   └── styles/             # Global CSS and Tailwind configurations
├── package.json            # Core dependencies and scripts
└── tailwind.config.js      # Custom theme colors and fonts
```

---

## 🛠️ Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Ahsans-code/sync.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run development server:**
   ```bash
   npm run dev
   ```

---

## 📦 Key Dependencies (`package.json`)

```json
"dependencies": {
  "gsap": "^3.12.x",
  "framer-motion": "^11.x.x",
  "@studio-freight/lenis": "^1.x.x",
  "next": "latest",
  "react": "latest",
  "tailwind-merge": "^2.x.x",
  "clsx": "^2.x.x"
}
```

---

## 👨‍💻 Credits
- **Design:** [Jordan Gilroy](https://jordangilroy.com/)
- **Original Dev Inspiration:** [Dennis Snellenberg](https://dennissnellenberg.com/)
- **Implementation:** [Ahsan](https://github.com/Ahsans-code)

---
*If you like this project, feel free to give it a ⭐!*
```
