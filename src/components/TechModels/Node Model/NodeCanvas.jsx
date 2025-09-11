import React from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Node from "./Node.jsx";
import NodeLight from "./NodeLight.jsx";
const NodeCanvas = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas
      camera={{ position: [1, 1, 5], fov: 35 }}
      className="w-full h-full "
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        minDistance={5}
        autoRotate={0.1}
      />
      <NodeLight />
      <group scale={isMobile ? 1 : 2.5}>
        <Node />
      </group>
    </Canvas>
  );
};

export default NodeCanvas;
