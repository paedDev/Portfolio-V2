import React from "react";
import * as THREE from "three";
const ReactLights = () => {
  return (
    <>
      <spotLight
        position={[1, 4, 1]}
        intensity={100}
        angle={0.5}
        color={"white"}
        penumbra={0.5}
      />

      <primitive
        object={new THREE.RectAreaLight("pink", 8, 3, 2)}
        position={[1, 1, 5]}
        intensity={20}
        // rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
    </>
  );
};

export default ReactLights;
