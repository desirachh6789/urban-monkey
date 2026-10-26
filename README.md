# URBAN MONKEY — Wear the Unseen.
> Premium 3D Streetwear E-Commerce Experience built with React, Three.js, React Three Fiber, TypeScript, and Tailwind CSS.

---

## ⚡ Project Overview

**URBAN MONKEY** is a cutting-edge digital fashion storefront showcasing Drop 001 of a fictional futuristic streetwear brand. Designed with the aesthetics of an editorial luxury campaign, an underground techwear laboratory, and an interactive 3D spatial showroom.

### Key Highlights
- **Cinematic 3D Hero Scene**: Floating procedural architectural sneaker with real-time studio lighting, contact shadows, gentle floating dynamics, and pointer-driven parallax.
- **Interactive 3D Product Spotlight (`VOID RUNNER`)**: 360-degree drag-to-rotate viewer with zoom controls, reset orientation, and real-time material swapping across three colorways: **Obsidian**, **Bone**, and **Signal**.
- **Complete Editorial Storefront**:
  - **Section A — Hero**: Oversized editorial typography, metadata telemetry, dual action CTAs, and scroll indicator.
  - **Section B — Featured Collection**: 4 foundational silhouettes in INR (`VOID RUNNER`, `PHANTOM SHELL`, `STATIC HEAVYWEIGHT`, `AFTERHOURS CARGO`).
  - **Section C — 3D Product Spotlight**: Deep inspection CAD viewer with live material updates.
  - **Section D — Brand Manifesto**: "NOT MADE TO BLEND IN." Asymmetrical editorial manifesto layout.
  - **Section E — Materials & Craftsmanship**: 4 core design principles and an interactive tactile textile archive.
  - **Section F — Nocturnal Campaign**: High-impact editorial spread with campaign statement.
  - **Section G — The Journal**: 3 full-read articles with an interactive editorial reader modal.
  - **Section H — Newsletter**: Client-validated email signup with honest demo feedback.
  - **Section I — Footer**: Brand telemetry, studio locations, social placeholders, and smooth back-to-top navigation.
- **Production-Grade Front-End E-Commerce**:
  - Interactive sliding cart drawer.
  - LocalStorage persistence with resilient deserialization.
  - Real-time line item and subtotal calculations in INR (₹).
  - Toast notification alerts for actions.
  - Dynamic size selector and product spec modal.
- **Accessibility & Resiliency**:
  - Graceful WebGL error boundary and vector schematic blueprint fallback.
  - `prefers-reduced-motion` detection.
  - Fully responsive from 390px mobile screens to ultra-wide displays.

---

## 🛠️ Prerequisites

- **Node.js**: `v18.0.0` or higher (tested on `v24.22.0`)
- **npm**: `v9.0.0` or higher (tested on `11.19.1`)

---

## 🚀 Local Development Setup

1. **Clone or enter the project directory**:
   ```bash
   cd "Urban Monkey"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

4. **Run TypeScript lint check**:
   ```bash
   npm run lint
   ```

5. **Generate a production build**:
   ```bash
   npm run build
   ```

6. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 📦 Project Architecture

```
Urban Monkey/
├── public/
│   └── favicon.svg               # Architectural brand glyph favicon
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── SneakerModel.tsx      # High-fidelity procedural 3D shoe geometry & materials
│   │   │   ├── StudioEnvironment.tsx# Studio key, fill, rim lighting & contact shadows
│   │   │   ├── HeroScene.tsx        # Hero viewport 3D canvas with pointer parallax
│   │   │   ├── SpotlightScene.tsx   # 360° orbit viewer with controls & material switcher
│   │   │   └── SceneFallback.tsx    # Resilient vector blueprint fallback for non-WebGL
│   │   └── ui/
│   │       ├── Navbar.tsx           # Glassmorphic header, mobile drawer & cart trigger
│   │       ├── CartDrawer.tsx       # E-commerce drawer with line totals & demo checkout
│   │       ├── ProductModal.tsx     # Full spec sheet & size selector modal
│   │       ├── ArticleModal.tsx     # Journal reader modal
│   │       └── Toast.tsx            # Animated status notifications
│   ├── context/
│   │   └── CartContext.tsx          # React Context for cart state, toasts, and storage
│   ├── data/
│   │   ├── products.ts              # Centralized product catalogue in INR
│   │   └── journal.ts               # Editorial articles & essays
│   ├── sections/
│   │   ├── HeroSection.tsx          # Section A
│   │   ├── FeaturedCollection.tsx   # Section B
│   │   ├── ProductSpotlight.tsx     # Section C
│   │   ├── ManifestoSection.tsx     # Section D
│   │   ├── CraftsmanshipSection.tsx # Section E
│   │   ├── CampaignSection.tsx      # Section F
│   │   ├── JournalSection.tsx       # Section G
│   │   ├── NewsletterSection.tsx    # Section H
│   │   └── FooterSection.tsx        # Section I
│   ├── styles/
│   │   └── index.css                # Tailwind imports, custom scrollbar & glass styles
│   ├── types/
│   │   └── index.ts                 # TypeScript types for products, variants & cart
│   ├── App.tsx                      # Root application layout
│   └── main.tsx                     # React DOM entry point
├── index.html                       # HTML5 root with Syne & Space Grotesk fonts
├── tailwind.config.js               # Brand color tokens (lime, charcoal, graphite)
├── vite.config.ts                   # Chunk splitting & Vite build configuration
├── vercel.json                      # Vercel deployment routing configuration
└── tsconfig.json                    # TypeScript compiler configuration
```

---

## 🐙 GitHub Workflow

Follow these steps to publish the project to your GitHub account:

1. **Initialize Git (if not already initialized)**:
   ```bash
   git init
   ```

2. **Stage all files**:
   ```bash
   git add .
   ```

3. **Commit the changes**:
   ```bash
   git commit -m "feat: complete Urban Monkey 3D streetwear experience"
   ```

4. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it `urban-monkey` (public or private)
   - Leave "Initialize with README" unchecked.

5. **Link the remote and push**:
   ```bash
   git remote add origin https://github.com/<YOUR-USERNAME>/urban-monkey.git
   git branch -M main
   git push -u origin main
   ```

---

## ▲ Vercel Deployment Guide

Deploying URBAN MONKEY to Vercel takes less than 2 minutes:

### Method 1: Deploy via Vercel Web Dashboard (Recommended)
1. Navigate to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** -> **"Project"**.
3. Select your GitHub repository (`urban-monkey`).
4. Vercel will automatically detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.
6. Once deployed, verify your live URL (e.g. `https://urban-monkey.vercel.app`).

### Method 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
# Follow on-screen prompts; choose defaults for Vite
vercel --prod
```

### Common Deployment Checks
- **Clean URLs**: `vercel.json` is pre-configured with `"cleanUrls": true`.
- **Zero API Keys Required**: The core 3D experience and cart run completely on client-side state without external dependencies or secrets.

---

## 📄 License
MIT © URBAN MONKEY. Fictional brand experience created for educational and design demonstration purposes.
