import React from 'react';
import { ContactShadows } from '@react-three/drei';

interface StudioEnvironmentProps {
  accentColor?: string;
  enableGroundShadow?: boolean;
}

export const StudioEnvironment: React.FC<StudioEnvironmentProps> = ({
  accentColor = '#D4FF00',
  enableGroundShadow = true,
}) => {
  return (
    <>
      {/* Studio Key Light (Cool white high angle) */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={25}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        color="#F8FAFC"
      />

      {/* Fill Light (Soft diffused warm tone) */}
      <directionalLight
        position={[-6, 4, -4]}
        intensity={0.9}
        color="#E2E8F0"
      />

      {/* Cyberpunk Streetwear Rim Light (Acid green / Accent glance) */}
      <spotLight
        position={[0, 6, -6]}
        intensity={2.2}
        angle={0.6}
        penumbra={0.8}
        color={accentColor}
      />

      {/* Under-glow Light for silhouette separation */}
      <pointLight
        position={[0, -2, 2]}
        intensity={0.6}
        color={accentColor}
      />

      {/* Soft Ambient Light to prevent pitch-black occlusions */}
      <ambientLight intensity={0.4} color="#C4CCD8" />

      {/* Ground Contact Shadows */}
      {enableGroundShadow && (
        <ContactShadows
          position={[0, -1.1, 0]}
          opacity={0.75}
          scale={10}
          blur={1.8}
          far={3}
          color="#000000"
        />
      )}
    </>
  );
};
