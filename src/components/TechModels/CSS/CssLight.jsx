import React from "react";
import * as THREE from "three";
const CssLight = () => {
  return (
    <>
      <ambientLight intensity={0.6} color="#ffffff" />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} />
    </>
  );
};

export default CssLight;
