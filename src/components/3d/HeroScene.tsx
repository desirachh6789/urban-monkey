import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { SneakerModel } from './SneakerModel';
import { StudioEnvironment } from './StudioEnvironment';
import { SceneFallback } from './SceneFallback';

interface HeroSceneProps {
  colorVariant?: 'Obsidian' | 'Bone' | 'Signal';
}

// Error Boundary for 3D Canvas
class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn('WebGL / R3F Canvas Render Notice:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroScene: React.FC<HeroSceneProps> = ({ colorVariant = 'Obsidian' }) => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Verify WebGL availability safely
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (!hasWebGL) {
    return <SceneFallback message="WEBGL CONTEXT UNAVAILABLE" variant={colorVariant} />;
  }

  return (
    <div className="relative w-full h-[55vh] md:h-[75vh] lg:h-[85vh] flex items-center justify-center">
      <ThreeErrorBoundary fallback={<SceneFallback variant={colorVariant} />}>
        <Suspense fallback={<SceneFallback message="INITIALIZING 3D ENGINE..." variant={colorVariant} />}>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [3.2, 1.8, 4.2], fov: 42 }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          >
            <StudioEnvironment accentColor="#D4FF00" />
            <SneakerModel
              colorVariant={colorVariant}
              enableFloating={!prefersReducedMotion}
              enablePointerTilt={!prefersReducedMotion}
              rotationSpeed={prefersReducedMotion ? 0 : 0.4}
              scale={1.25}
            />
          </Canvas>
        </Suspense>
      </ThreeErrorBoundary>

      {/* Interactive Hint Indicator */}
      <div className="absolute bottom-6 right-6 pointer-events-none hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-card/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-400">
        <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
        <span>3D SPATIAL // POINTER TILT & ROTATION ACTIVE</span>
      </div>
    </div>
  );
};
