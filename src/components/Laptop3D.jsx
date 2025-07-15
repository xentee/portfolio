import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef, useState } from 'react';

function Laptop() {
  const group = useRef();
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const screenAngle = Math.PI / 1.1;
  const codeTexture = useLoader(THREE.TextureLoader, '/code-image.png');

  // Animation de rotation automatique
  useFrame((state, delta) => {
    if (!isUserInteracting && group.current) {
      group.current.rotation.y += delta * 0.4; // vitesse de rotation
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 0.12, 1.7]} />
        <meshStandardMaterial color="#232323" metalness={0.4} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.2, 1.3]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh position={[0, 0.7, -1]} rotation={[screenAngle, 0, 0]}>
        <boxGeometry args={[2.3, 1.4, 0.07]} />
        <meshStandardMaterial color="#181818" />
      </mesh>
      <mesh position={[0, 0.7, -1 + 0.07/2 + 0.01]} rotation={[-0.3, 0, 0]}>
        <planeGeometry args={[2.1, 1.15]} />
        <meshStandardMaterial map={codeTexture} transparent opacity={1} side={2} />
      </mesh>
      <spotLight
        position={[0, 0.7, -1.2]}
        angle={0.6}
        penumbra={0.7}
        intensity={2.5}
        color="#00fff7"
        castShadow={false}
        target-position={[0, 0.7, -2]}
      />
    </group>
  );
}

export default function ThreeDAvatar() {
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  return (
    <div
      style={{ width: '100%', height: '350px' }}
      className="sm:h-[700px]"
    >
      <Canvas camera={{ position: [0, 0.7, 4.5], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
        <Laptop isUserInteracting={isUserInteracting} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={4.5}
          maxDistance={4.5}
          onStart={() => setIsUserInteracting(true)}
          onEnd={() => setIsUserInteracting(false)}
        />
      </Canvas>
    </div>
  );
} 