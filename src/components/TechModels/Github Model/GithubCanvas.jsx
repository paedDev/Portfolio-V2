import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { useMediaQuery } from "react-responsive";
import GithubLight from "./GithubLight";
import Github from "./Github";
const GithubCanvas = () => {
  const isTablet = useMediaQuery({ query: "(max-width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <div>
      <Canvas
        camera={{ position: [2, 0, 2], fov: 75, near: 0.1, far: 1000 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/3  "
      >
        <OrbitControls
          enablePan={false}
          enableDamping={false}
          enableZoom={!isTablet}
          enableRotate={true}
          minDistance={80}
          maxDistance={80}
          minPolarAngle={Math.PI / 6} // 30° from top
          maxPolarAngle={Math.PI / 2.2} // Don't go under model
        />
        <GithubLight />

        <group scale={1}>
          <Github />
        </group>
      </Canvas>
    </div>
  );
};

export default GithubCanvas;
