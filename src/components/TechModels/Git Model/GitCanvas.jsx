import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

import GitLight from "./GitLight";
import Git from "./Git";

const GitCanvas = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas
      camera={{ position: [5, 0, 5], fov: 75, near: 5, far: 1000 }}
      className="w-full h-full "
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        enableRotate={true}
        minDistance={100}
        maxDistance={100}
        // ADDED: Angle limits to prevent awkward views
        minPolarAngle={Math.PI / 6} // 30° from top
        maxPolarAngle={Math.PI / 2.2} // Don't go under model
        target={[0, 0, 0]} // Focus on center
        dampingFactor={0.05} // Smooth movement
        enableDamping={true}
      />
      <GitLight />
      <group scale={isMobile ? 1 : 1.1}>
        <Git />
      </group>
    </Canvas>
  );
};

export default GitCanvas;
