import React from "react";
import Reactjs from "./Reactjs";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import ReactLights from "./ReactLights";
const ReactCanvas = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas camera={{ position: [-2, -1, 2], fov: 35 }} className="p-6">
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={10}
        minDistance={10}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <ReactLights />
      <group
        scale={isMobile ? 0.9 : 1}
        position={isMobile ? [0, -0.2, 0] : [0, 0.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        {/* <Room /> */}
        <Reactjs />
      </group>
    </Canvas>
  );
};

export default ReactCanvas;
