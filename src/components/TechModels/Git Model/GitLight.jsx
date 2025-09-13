import React from "react";

const GitLight = () => {
  return (
    <>
      <ambientLight intensity={2} color={"#ffffff"} />
      <directionalLight position={[1, 1, 2]} intensity={1} color={"white"} />
    </>
  );
};

export default GitLight;
