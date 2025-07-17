import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import React, { useRef, useState, Suspense } from 'react';

function LaptopFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-float">💻</div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">Laptop 3D</h3>
        <p className="text-gray-400 text-sm">WebGL non disponible sur votre navigateur</p>
        <p className="text-gray-500 text-xs mt-2">Firefox + Linux peut avoir des limitations WebGL</p>
      </div>
    </div>
  );
}

function LaptopCSS() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-48 transform perspective-1000">
        {/* Base du laptop */}
        <div className="absolute bottom-0 w-full h-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700"></div>
        
        {/* Écran du laptop */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-56 h-32 bg-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
          {/* Écran avec image de code */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/code-image.png)',
              backgroundSize: 'cover'
            }}
          ></div>
          
          {/* Bordure de l'écran */}
          <div className="absolute inset-0 border-2 border-gray-700 rounded-lg"></div>
        </div>
        
        {/* Clavier */}
        <div className="absolute bottom-0 w-full h-6 bg-gray-700 rounded-t-lg border border-gray-600">
          <div className="flex justify-center items-center h-full">
            <div className="grid grid-cols-8 gap-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-2 h-1 bg-gray-600 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Effet de lumière */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-accent/20 to-transparent rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
}

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <LaptopFallback />;
  }

  return (
    <ErrorBoundaryInner onError={() => setHasError(true)}>
      {children}
    </ErrorBoundaryInner>
  );
}

class ErrorBoundaryInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('WebGL Error:', error);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return <LaptopFallback />;
    }

    return this.props.children;
  }
}

function Laptop() {
  const group = useRef();
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const screenAngle = Math.PI / 1.1;
  
  const [codeTexture, setCodeTexture] = useState(null);
  
  React.useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/code-image.png',
      (texture) => setCodeTexture(texture),
      undefined,
      (error) => {
        console.warn('Erreur de chargement de texture:', error);
        setCodeTexture(null);
      }
    );
  }, []);

  useFrame((state, delta) => {
    if (!isUserInteracting && group.current) {
      group.current.rotation.y += delta * 0.4;
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
        <meshStandardMaterial 
          map={codeTexture} 
          transparent 
          opacity={1} 
          side={2}
          color={codeTexture ? undefined : "#2a2a2a"}
        />
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

function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm">Chargement 3D...</p>
      </div>
    </div>
  );
}

export default function ThreeDAvatar({ useCSS = false }) {
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  React.useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
      }
    } catch (error) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return (
      <div
        style={{ width: '100%', height: '350px' }}
        className="sm:h-[700px]"
      >
        <LaptopFallback />
      </div>
    );
  }

  return (
    <div
      style={{ width: '100%', height: '350px' }}
      className="sm:h-[700px]"
    >
      <ErrorBoundary>
        <Canvas 
          camera={{ position: [0, 0.7, 4.5], fov: 45 }}
          onCreated={({ gl }) => {
            gl.setClearColor('#000000', 0);
          }}
          onError={(error) => {
            console.warn('Canvas error:', error);
          }}
        >
          <Suspense fallback={null}>
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
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
} 