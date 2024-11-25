import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSpring } from '@react-spring/web';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

interface PortalMeshProps {
  position?: [number, number, number];
}

const PortalMesh: React.FC<PortalMeshProps> = ({ position = [0, 0, 0] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time / 4);
      meshRef.current.rotation.y = Math.sin(time / 2);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#ff69b4"
        emissive="#ff1493"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
};

interface MagicPortalProps {
  onClose: () => void;
}

export const MagicPortal: React.FC<MagicPortalProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div className="w-full h-full max-w-4xl max-h-4xl">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <PortalMesh />
        </Canvas>
      </div>
    </motion.div>
  );
};