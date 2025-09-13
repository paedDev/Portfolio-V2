import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import IphoneLight from "./IphoneLight";
import Iphone from "./Iphone";
import { useMediaQuery } from "react-responsive";

const IphoneCanvas = () => {
  const isTablet = useMediaQuery({ query: "max-width:1024" });
  const isMobile = useMediaQuery({ query: "max-width:768" });
  return (
    <Canvas camera={{ position: [0, 0, 5] }} className="h-full w-full">
      <OrbitControls
        enableZoom={!isTablet}
        enablePan={false}
        enableRotate
        autoRotate
        maxDistance={5}
        minDistance={4}
        minPolarAngle={Math.PI / 6} // 30° from top
        maxPolarAngle={Math.PI / 2.2} // Don't go under mod
      />
      {/* light */}
      <IphoneLight />
      <group>
        <Iphone scale={isMobile ? 1 : 2} />
      </group>
    </Canvas>
  );
};

export default IphoneCanvas;
