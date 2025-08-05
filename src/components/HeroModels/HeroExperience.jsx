import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from "react-responsive";
import { Room2 } from "./Room2";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width:1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 35 }} className="rounded-2xl absolute left-20 top-20">

      <OrbitControls enablePan={false} enableZoom={!isTablet}
        maxDistance={8}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <group scale={isMobile ? 0.9 : 1}
        position={isMobile ? [0, -0.2, 0] : [0, .5, 0]}
        rotation={[0, -Math.PI / 4, 0]}>
        {/* <Room /> */}
        <Room2 />
      </group>

    </Canvas>
  );
};

export default HeroExperience;
