import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise'; // npm i simplex-noise

/**
 * CyberWave: React Three Fiber component rendering undulating cyber-waves.
 * Implements mouse raycasting so the waves physically depress away from the cursor.
 */

const WaveMesh = () => {
  const meshRef = useRef<THREE.Points>(null);
  const { pointer } = useThree(); // Normalised mouse coordinates (-1 to 1)

  const count = 45; // grid density
  const sep = 0.45;  // point separation

  // Initialize particles positions
  const [positions, noise2D] = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    const noise = createNoise2D();
    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        pos[i] = (xi - count / 2) * sep;      // x
        pos[i + 1] = 0;                        // y (height - animated)
        pos[i + 2] = (zi - count / 2) * sep;  // z
        i += 3;
      }
    }
    return [pos, noise];
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const geometry = meshRef.current.geometry;
    const posAttribute = geometry.getAttribute('position') as THREE.BufferAttribute;
    const time = clock.getElapsedTime() * 0.6;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = posAttribute.getX(i);
        const z = posAttribute.getZ(i);

        // Compute base noise wave height
        let y = noise2D(x * 0.15 + time, z * 0.15 + time) * 0.6;

        // Mouse pointer interaction - depress wave away from cursor position
        // Target cursor pointer mapped to 3D space
        const targetX = pointer.x * 12;
        const targetZ = pointer.y * 12;
        const distance = Math.sqrt(Math.pow(x - targetX, 2) + Math.pow(z - targetZ, 2));

        if (distance < 5.0) {
          // Push down coordinates close to the mouse cursor
          const pushForce = (5.0 - distance) / 5.0; // 0 to 1
          y -= pushForce * 1.5;
        }

        posAttribute.setY(i, y);
        i++;
      }
    }
    posAttribute.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#5482ff"
        size={0.065}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.7}
      />
    </points>
  );
};

export const CyberWave: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#070b19] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,124,255,0.06)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      
      {/* Canvas */}
      <Canvas
        camera={{ position: [0, 6, 12], fov: 45 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <color attach="background" args={['#070b19']} />
        <ambientLight intensity={0.5} />
        <WaveMesh />
      </Canvas>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#5482ff] uppercase mb-4">
          BALAJI ARCHITECTURE
        </span>
        <h1 className="text-5xl md:text-7xl text-white font-bold tracking-tighter text-center max-w-2xl select-none">
          ENGINEERING VISUAL SUPREMACY.
        </h1>
      </div>
    </div>
  );
};

export default CyberWave;
