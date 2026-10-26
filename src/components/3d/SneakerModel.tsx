import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { SneakerColorVariant } from '../../types';

interface SneakerModelProps {
  colorVariant?: SneakerColorVariant;
  enableFloating?: boolean;
  enablePointerTilt?: boolean;
  scale?: number;
  rotationSpeed?: number;
}

export const SneakerModel: React.FC<SneakerModelProps> = ({
  colorVariant = 'Obsidian',
  enableFloating = true,
  enablePointerTilt = false,
  scale = 1,
  rotationSpeed = 0.5,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const floatingGroupRef = useRef<THREE.Group>(null);

  // Define dynamic material colors based on active color variant
  const palette = useMemo(() => {
    switch (colorVariant) {
      case 'Bone':
        return {
          upper: '#E6E1D8',
          upperSecondary: '#D0C9BD',
          sole: '#B8B2A6',
          outsole: '#222327',
          accents: '#1B1C20',
          laces: '#222327',
          metallic: '#7A808C',
          heelCup: '#CDC6B8',
          glow: '#A89F91',
          roughnessUpper: 0.65,
          metalnessUpper: 0.1,
        };
      case 'Signal':
        return {
          upper: '#FF3B30',
          upperSecondary: '#D62C22',
          sole: '#181A1F',
          outsole: '#0E0F12',
          accents: '#FFFFFF',
          laces: '#111215',
          metallic: '#C8CCD4',
          heelCup: '#232630',
          glow: '#FF5E54',
          roughnessUpper: 0.45,
          metalnessUpper: 0.2,
        };
      case 'Obsidian':
      default:
        return {
          upper: '#14161B',
          upperSecondary: '#1C1F28',
          sole: '#252936',
          outsole: '#0C0D10',
          accents: '#D4FF00', // electric lime
          laces: '#0A0B0E',
          metallic: '#3E4454',
          heelCup: '#181A22',
          glow: '#D4FF00',
          roughnessUpper: 0.5,
          metalnessUpper: 0.25,
        };
    }
  }, [colorVariant]);

  // Gentle idle animation and pointer responsiveness
  useFrame((state, delta) => {
    if (enableFloating && floatingGroupRef.current) {
      const t = state.clock.getElapsedTime();
      floatingGroupRef.current.position.y = Math.sin(t * 1.4) * 0.12;
      floatingGroupRef.current.rotation.z = Math.sin(t * 0.9) * 0.04;
    }

    if (groupRef.current) {
      if (rotationSpeed > 0) {
        groupRef.current.rotation.y += delta * rotationSpeed * 0.6;
      }

      if (enablePointerTilt) {
        // Smooth pointer dampening
        const targetRotX = state.pointer.y * 0.25;
        const targetRotY = state.pointer.x * 0.4;
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
        if (rotationSpeed === 0) {
          groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
        }
      }
    }
  });

  return (
    <group ref={floatingGroupRef} scale={scale} dispose={null}>
      <group ref={groupRef} position={[0, -0.4, 0]}>
        {/* ================= OUTSOLE & MIDSOLE LATTICE ================= */}
        {/* Main curved sole */}
        <mesh position={[0, -0.42, 0.2]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 0.35, 3.8]} />
          <meshStandardMaterial
            color={palette.sole}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>

        {/* Sculpted sole heel wedge */}
        <mesh position={[0, -0.32, -1.1]} rotation={[0.1, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.6, 0.48, 1.4]} />
          <meshStandardMaterial
            color={palette.outsole}
            roughness={0.9}
            metalness={0.05}
          />
        </mesh>

        {/* Sculpted toe rocker */}
        <mesh position={[0, -0.28, 1.65]} rotation={[-0.18, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.4, 0.32, 1.1]} />
          <meshStandardMaterial
            color={palette.sole}
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>

        {/* Architectural sole ventilation lattice cuts */}
        {[-0.6, 0, 0.6].map((zPos, idx) => (
          <mesh key={`vent-${idx}`} position={[0.76, -0.42, zPos]}>
            <boxGeometry args={[0.08, 0.14, 0.38]} />
            <meshStandardMaterial
              color={palette.accents}
              emissive={palette.accents}
              emissiveIntensity={colorVariant === 'Obsidian' ? 0.6 : 0.1}
              roughness={0.3}
            />
          </mesh>
        ))}

        {[-0.6, 0, 0.6].map((zPos, idx) => (
          <mesh key={`vent-l-${idx}`} position={[-0.76, -0.42, zPos]}>
            <boxGeometry args={[0.08, 0.14, 0.38]} />
            <meshStandardMaterial
              color={palette.accents}
              emissive={palette.accents}
              emissiveIntensity={colorVariant === 'Obsidian' ? 0.6 : 0.1}
              roughness={0.3}
            />
          </mesh>
        ))}

        {/* Bottom rubber traction pods */}
        {[-1.2, -0.6, 0, 0.6, 1.2, 1.8].map((zPos, idx) => (
          <mesh key={`cleat-${idx}`} position={[0, -0.62, zPos]} receiveShadow>
            <boxGeometry args={[1.42, 0.06, 0.26]} />
            <meshStandardMaterial color={palette.outsole} roughness={0.95} />
          </mesh>
        ))}

        {/* ================= SNEAKER UPPER SILHOUETTE ================= */}
        {/* Main upper body chassis */}
        <mesh position={[0, 0.1, 0.15]} castShadow>
          <boxGeometry args={[1.38, 0.72, 3.3]} />
          <meshStandardMaterial
            color={palette.upper}
            roughness={palette.roughnessUpper}
            metalness={palette.metalnessUpper}
          />
        </mesh>

        {/* Tapered aerodynamic toe box */}
        <mesh position={[0, -0.02, 1.62]} rotation={[-0.22, 0, 0]} castShadow>
          <boxGeometry args={[1.32, 0.52, 1.15]} />
          <meshStandardMaterial
            color={palette.upperSecondary}
            roughness={palette.roughnessUpper}
            metalness={palette.metalnessUpper}
          />
        </mesh>

        {/* Ankle collar and heel rise */}
        <mesh position={[0, 0.45, -0.75]} rotation={[0.3, 0, 0]} castShadow>
          <boxGeometry args={[1.28, 0.88, 1.3]} />
          <meshStandardMaterial
            color={palette.upper}
            roughness={palette.roughnessUpper}
            metalness={palette.metalnessUpper}
          />
        </mesh>

        {/* Ankle opening rim */}
        <mesh position={[0, 0.76, -0.58]} rotation={[0.2, 0, 0]}>
          <torusGeometry args={[0.42, 0.1, 16, 32]} />
          <meshStandardMaterial color={palette.upperSecondary} roughness={0.9} />
        </mesh>

        {/* ================= TPU EXOSKELETON CAGE & OVERLAYS ================= */}
        {/* Lateral aerodynamic wing */}
        <mesh position={[0.71, 0.15, 0.1]} rotation={[0, 0.05, 0.12]} castShadow>
          <boxGeometry args={[0.06, 0.55, 2.1]} />
          <meshStandardMaterial
            color={palette.upperSecondary}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>

        {/* Medial aerodynamic wing */}
        <mesh position={[-0.71, 0.15, 0.1]} rotation={[0, -0.05, -0.12]} castShadow>
          <boxGeometry args={[0.06, 0.55, 2.1]} />
          <meshStandardMaterial
            color={palette.upperSecondary}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>

        {/* Signature Urban Monkey Slash Accent (Electric Lime / Contrast) */}
        <mesh position={[0.74, 0.22, 0.2]} rotation={[0.4, 0, -0.15]}>
          <boxGeometry args={[0.04, 0.12, 1.4]} />
          <meshStandardMaterial
            color={palette.accents}
            emissive={palette.accents}
            emissiveIntensity={colorVariant === 'Obsidian' ? 0.8 : 0.2}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>

        <mesh position={[-0.74, 0.22, 0.2]} rotation={[0.4, 0, 0.15]}>
          <boxGeometry args={[0.04, 0.12, 1.4]} />
          <meshStandardMaterial
            color={palette.accents}
            emissive={palette.accents}
            emissiveIntensity={colorVariant === 'Obsidian' ? 0.8 : 0.2}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>

        {/* Heel stabilizer counter cup */}
        <mesh position={[0, 0.18, -1.4]} castShadow>
          <boxGeometry args={[1.44, 0.6, 0.55]} />
          <meshStandardMaterial
            color={palette.heelCup}
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>

        {/* Rear Pull Tab */}
        <mesh position={[0, 0.82, -1.25]} rotation={[-0.3, 0, 0]}>
          <boxGeometry args={[0.22, 0.45, 0.05]} />
          <meshStandardMaterial
            color={palette.accents}
            emissive={palette.accents}
            emissiveIntensity={colorVariant === 'Obsidian' ? 0.5 : 0.1}
          />
        </mesh>

        {/* ================= TONGUE & LACING SYSTEM ================= */}
        {/* Padded tongue */}
        <mesh position={[0, 0.52, 0.4]} rotation={[-0.45, 0, 0]}>
          <boxGeometry args={[0.9, 0.14, 1.6]} />
          <meshStandardMaterial color={palette.upperSecondary} roughness={0.9} />
        </mesh>

        {/* Tongue Tech Label */}
        <mesh position={[0, 0.82, 0.2]} rotation={[-0.45, 0, 0]}>
          <boxGeometry args={[0.5, 0.04, 0.35]} />
          <meshStandardMaterial
            color={palette.accents}
            roughness={0.3}
          />
        </mesh>

        {/* Crossing shoelaces */}
        {[-0.1, 0.2, 0.5, 0.8, 1.1].map((zPos, idx) => (
          <group key={`lace-${idx}`} position={[0, 0.35 + idx * 0.08, zPos]} rotation={[-0.35, 0, 0]}>
            {/* Horizontal lace bridge */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.045, 0.045, 0.85, 12]} />
              <meshStandardMaterial color={palette.laces} roughness={0.8} />
            </mesh>
            {/* Eyelet anchors */}
            <mesh position={[0.46, 0, 0]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color={palette.metallic} metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh position={[-0.46, 0, 0]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color={palette.metallic} metalness={0.9} roughness={0.2} />
            </mesh>
          </group>
        ))}

        {/* Toe guard bumper */}
        <mesh position={[0, -0.15, 2.15]} rotation={[0.4, 0, 0]}>
          <boxGeometry args={[1.2, 0.28, 0.25]} />
          <meshStandardMaterial color={palette.outsole} roughness={0.85} />
        </mesh>
      </group>
    </group>
  );
};
