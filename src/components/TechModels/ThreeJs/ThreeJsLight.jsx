import React from "react";

const ThreeJsLight = () => {
  return (
    <>
      <ambientLight intensity={1} color="#ffffff" />
      <directionalLight position={[0, 0, 0]} intensity={0.3} color="#ffffff" />
    </>
  );
};

export default ThreeJsLight;
