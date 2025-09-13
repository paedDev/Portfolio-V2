import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import ThreeJs from "../ThreeJs/ThreeJs.jsx";

const ThreeJsCanvas = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{
          position: [0, 0, 12],
          fov: 50,
        }}
        // gl={{
        //   antialias: true,
        //   alpha: true,
        //   powerPreference: "high-performance",
        // }}
      >
        <OrbitControls
          enableRotate={true}
          enablePan={false}
          enableZoom={false}
          maxDistance={120}
          minDistance={70}
          minPolarAngle={Math.PI / 6} // 30° from top
          maxPolarAngle={Math.PI / 2.2} // Don't go under model
          target={[0, 0, 0]} // Focus on center
          dampingFactor={0.05} // Smooth movement
        />
        {/* Light here */}
        <ambientLight intensity={1} color="#ffffff" />
        <directionalLight
          position={[0, 0, 0]}
          intensity={0.3}
          color="#ffffff"
        />

        <group
          scale={isMobile ? 0.5 : isTablet ? 0.4 : 0.5}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        >
          <ThreeJs />
        </group>
      </Canvas>
    </div>
  );
};
export default ThreeJsCanvas;
