import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import CssLight from "./CssLight";
import CssModel from "./CssModel";

const CssCanvas = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 35 }}
        className="w-full h-full"
        onError={(error) => console.error("Canvas error:", error)}
      >
        <OrbitControls
          enableZoom={!isTablet}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxDistance={20}
          minDistance={5}
        />
        <CssLight />
        <React.Suspense fallback={null}>
          <group>
            <CssModel scale={isMobile ? 0.8 : 1} />
          </group>
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default CssCanvas;
