import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { SneakerModel } from './SneakerModel';
import { StudioEnvironment } from './StudioEnvironment';
import { SceneFallback } from './SceneFallback';
import { SneakerColorVariant } from '../../types';
import { RotateCcw, Sparkles } from 'lucide-react';

interface SpotlightSceneProps {
  colorVariant: SneakerColorVariant;
}

export const SpotlightScene: React.FC<SpotlightSceneProps> = ({ colorVariant }) => {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  const handleResetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      setAutoRotate(true);
    }
  };

  const getAccentColor = () => {
    switch (colorVariant) {
      case 'Bone':
        return '#C5C0B6';
      case 'Signal':
        return '#FF3B30';
      case 'Obsidian':
      default:
        return '#D4FF00';
    }
  };

  if (!hasWebGL) {
    return <SceneFallback message="SPOTLIGHT CAD SCHEMATIC" variant={colorVariant} />;
  }

  return (
    <div className="relative w-full h-[480px] md:h-[580px] lg:h-[640px] bg-gradient-to-b from-[#10131A] via-[#0B0C10] to-[#08090B] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Background blueprint tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Top telemetry indicators */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-3">
        <div className="px-3 py-1 rounded bg-black/60 backdrop-blur border border-white/10 text-xs font-mono text-zinc-300">
          MODE: <span className="text-brand-lime">INSPECTION 360°</span>
        </div>
        <div className="px-3 py-1 rounded bg-black/60 backdrop-blur border border-white/10 text-xs font-mono text-zinc-300 hidden sm:inline-block">
          MATERIAL: <span className="uppercase text-white">{colorVariant}</span>
        </div>
      </div>

      {/* Reset & Orbit Control buttons */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={() => setAutoRotate((prev) => !prev)}
          className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 backdrop-blur ${
            autoRotate
              ? 'bg-brand-lime/10 border-brand-lime/40 text-brand-lime'
              : 'bg-black/60 border-white/10 text-zinc-400 hover:text-white'
          }`}
          title="Toggle Auto Orbit"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{autoRotate ? 'ORBIT: ON' : 'ORBIT: PAUSED'}</span>
        </button>

        <button
          onClick={handleResetView}
          className="p-1.5 px-2.5 rounded-lg bg-black/60 hover:bg-black/90 border border-white/10 hover:border-brand-lime/50 text-xs font-mono text-zinc-300 hover:text-brand-lime transition-all flex items-center gap-1.5"
          title="Reset Camera View"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">RESET</span>
        </button>
      </div>

      <Suspense fallback={<SceneFallback message="CONFIGURING MATERIALS..." variant={colorVariant} />}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [3.4, 2.0, 4.0], fov: 40 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <StudioEnvironment accentColor={getAccentColor()} />
          <SneakerModel
            colorVariant={colorVariant}
            enableFloating={true}
            rotationSpeed={0}
            scale={1.4}
          />
          <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            minDistance={2.8}
            maxDistance={8}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={1.2}
            maxPolarAngle={Math.PI / 2 + 0.1} // Prevent looking directly under floor
            onStart={() => setAutoRotate(false)} // User took manual control
          />
        </Canvas>
      </Suspense>

      {/* Bottom interaction note */}
      <div className="absolute bottom-4 inset-x-0 mx-auto w-fit z-10 pointer-events-none px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
        <span>DRAG TO ROTATE 360° • PINCH / SCROLL TO ZOOM</span>
      </div>
    </div>
  );
};
