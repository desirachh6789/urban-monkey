# URBAN MONKEY — Developer & Workshop Build Guide
> Technical architectural guide for workshop instructors, creative technologists, and frontend developers explaining how the 3D streetwear e-commerce experience is engineered.

---

## 1. Implementation Sequence

The project was structured and developed incrementally across five distinct phases:

1. **Foundations & Tooling**:
   - Initialized modern Vite + React 18 + TypeScript environment.
   - Installed Three.js (`three`), React Three Fiber (`@react-three/fiber`), and Drei (`@react-three/drei`).
   - Configured Tailwind CSS with custom brand palette (`#08090B` charcoal background, `#D4FF00` electric lime accent, Space Grotesk & Syne typography).
2. **Type System & Centralized Data**:
   - Formulated TypeScript interfaces in `src/types/index.ts` for products, color variants, cart items, and journal dispatches.
   - Implemented centralized product specifications in `src/data/products.ts` with prices in INR (`₹`).
3. **Procedural 3D Scene Architecture**:
   - Engineered `SneakerModel.tsx` with procedural meshes (sole rocker, EVA lattice vents, ballistic upper, TPU cage, crossing laces, and pull-tabs).
   - Structured `StudioEnvironment.tsx` with studio 3-point lighting and contact shadows.
   - Built `HeroScene.tsx` with pointer parallax and `SpotlightScene.tsx` with 360° `OrbitControls`.
   - Engineered `SceneFallback.tsx` with SVG blueprint wireframes for WebGL-less or reduced-motion devices.
4. **Interactive E-Commerce State**:
   - Developed `CartContext.tsx` with `localStorage` synchronization, item variant discrimination, quantity stepper, and toast notifications.
   - Built `CartDrawer.tsx`, `ProductModal.tsx`, and `ArticleModal.tsx`.
5. **Editorial Brand Experience**:
   - Structured all 9 required sections (`Hero`, `FeaturedCollection`, `ProductSpotlight`, `Manifesto`, `Craftsmanship`, `Campaign`, `Journal`, `Newsletter`, `Footer`).
   - Optimized production bundle with Rollup manual chunking in `vite.config.ts`.

---

## 2. Key Files & Responsibilities

| File Path | Primary Function |
| :--- | :--- |
| `src/components/3d/SneakerModel.tsx` | Procedural 3D geometry with dynamic PBR materials mapped to active colorways. |
| `src/components/3d/StudioEnvironment.tsx` | Directional key, diffused fill, colored rim light, under-glow, and contact shadow plane. |
| `src/components/3d/HeroScene.tsx` | Cinematic first-viewport canvas with pointer tracking and auto-idle floating animation. |
| `src/components/3d/SpotlightScene.tsx` | 360° CAD inspector with interactive OrbitControls, reset view, and auto-rotation toggle. |
| `src/components/3d/SceneFallback.tsx` | Graceful SVG blueprint fallback rendered when WebGL is absent or unaccelerated. |
| `src/context/CartContext.tsx` | React state management for cart items, local persistence, quantity caps, and toasts. |
| `src/data/products.ts` | Single source of truth for catalogue specs, prices, and variant definitions. |
| `src/sections/FeaturedCollection.tsx` | 4-product editorial grid with hover states, spec sheet triggers, and quick add. |
| `src/sections/ProductSpotlight.tsx` | Dedicated 3D launchpad showcasing real-time material switches for VOID RUNNER. |
| `src/sections/NewsletterSection.tsx` | Regex-validated subscription demo with honest client feedback message. |

---

## 3. How the Three.js Scene is Structured

### Hierarchy & Mesh Composition
Inside `SneakerModel.tsx`, the sneaker silhouette is composed of nested groups:
```
<group ref={floatingGroupRef}>         <-- Controls Y-axis floating sine wave (idle motion)
  <group ref={groupRef}>               <-- Handles pointer parallax and orbital rotation
    ├── Outsole & Midsole              <-- Segmented curved boxes with flex grooves & cleats
    ├── Upper Body                     <-- Ballistic nylon chassis with toe rocker & ankle collar
    ├── TPU Exoskeleton Cage           <-- Lateral/medial wings with signature lime accent slash
    ├── Lacing System                  <-- 5 cross-bridges with metallic eyelet sphere anchors
    └── Heel Counter & Pull Tab        <-- Rigid heel cup with reflective tab
```

### Lighting Physics
In `StudioEnvironment.tsx`:
- **Key Light**: High-angle directional light (`intensity: 1.8`) creating crisp top highlights on the upper shoe contours.
- **Fill Light**: Opposing soft directional light (`intensity: 0.9`) lifting deep shadows on the medial side.
- **Rim Light**: Back spot light (`intensity: 2.2`) tinted with the active brand accent (`#D4FF00`) to rim-light the silhouette against the dark charcoal background.
- **Contact Shadow**: Soft blurred shadow plane (`blur: 1.8, opacity: 0.75`) providing tactile grounding without expensive shadow map passes.

---

## 4. How Product Variants Work

When a user switches colorways (e.g. from **Obsidian** to **Bone** or **Signal**):
1. State is updated in `ProductSpotlight.tsx` (`selectedVariant: SneakerColorVariant`).
2. The `colorVariant` prop is passed down into `<SpotlightScene colorVariant={selectedVariant} />` and into `<SneakerModel colorVariant={colorVariant} />`.
3. In `SneakerModel.tsx`, `useMemo` dynamically derives a material palette:
   - **Obsidian**: Upper `#14161B`, Sole `#252936`, Accents `#D4FF00` (Electric Lime emissive).
   - **Bone**: Upper `#E6E1D8`, Sole `#B8B2A6`, Accents `#1B1C20` (Tactile Travertine).
   - **Signal**: Upper `#FF3B30`, Sole `#181A1F`, Accents `#FFFFFF` (Industrial Orange/Red).
4. Mesh materials update instantly in the WebGL context without reloading the page or rebuilding geometries.

---

## 5. How Cart State is Managed

The shopping experience utilizes a centralized `CartProvider` (`src/context/CartContext.tsx`):
- **Variant Discrimination**: Unique item keys are composed as `${productId}-${variant}-${size}` (e.g., `void-runner-obsidian-uk-9`). This guarantees selecting different sizes or colors creates separate line items rather than overwriting.
- **LocalStorage Sync**: Every cart mutation immediately saves to `localStorage` under `urban_monkey_cart_v1` inside a `try/catch` block to handle browser privacy restrictions gracefully.
- **Toast Feedback**: Every `addToCart` and `removeFromCart` triggers temporary notifications with auto-dismissal timeouts.
- **Interactive Demo Notice**: The checkout trigger uses `canvas-confetti` to reward the user and displays an honest notice explaining that no actual payments are collected in this portfolio demonstration.

---

## 6. How Responsive Behavior is Implemented

- **Dynamic Viewports**:
  - Hero 3D Canvas scales dynamically: `h-[55vh]` on mobile, `h-[75vh]` on tablets, and `h-[85vh]` on desktop.
  - Camera FOV (`fov: 42`) is calibrated so the 3D model remains framed without clipping on screens down to `375px`.
- **Touch-Friendly Controls**:
  - In `SpotlightScene.tsx`, `OrbitControls` restricts `maxPolarAngle` to prevent flipping upside down.
  - Touch targets for size buttons and steppers meet WCAG 44px minimum touch target dimensions.
- **Mobile Drawer Navigation**:
  - Hamburger menu opens a full-screen blurred navigation drawer with quick cart access.

---

## 7. Customization Guide: Changing Styles, Copy & 3D Settings

### To Change Brand Colors:
Open `tailwind.config.js`:
```javascript
colors: {
  brand: {
    lime: '#D4FF00',      // Change this to your preferred accent color
    charcoal: '#0F1117',  // Primary surface tone
  }
}
```

### To Adjust 3D Rotation Speed or Idle Float:
In `src/components/3d/HeroScene.tsx`:
```tsx
<SneakerModel
  rotationSpeed={0.4} // Increase for faster rotation; set to 0 to disable
  scale={1.25}        // Adjust model size
/>
```

### To Add or Edit Products:
Open `src/data/products.ts` and modify or append entries in the `PRODUCTS` array. All prices are in INR (`₹`).

---

## 8. Common Troubleshooting & Debugging

| Issue | Likely Cause | Solution |
| :--- | :--- | :--- |
| **Black screen or 3D scene not rendering** | WebGL context disabled or hardware acceleration turned off. | The built-in `ThreeErrorBoundary` will automatically switch to `SceneFallback.tsx`. Verify browser WebGL support at `chrome://gpu`. |
| **Controls conflict with vertical scrolling on mobile** | OrbitControls capturing touch drag events. | In `SpotlightScene.tsx`, user can pan vertically outside the container, or use single-finger page swipe outside the 3D box. |
| **Large JS bundle warning during build** | Three.js and Drei bundling into main chunk. | `vite.config.ts` has configured `manualChunks` dividing `vendor-three` and `vendor-r3f` into separate cached chunks. |
