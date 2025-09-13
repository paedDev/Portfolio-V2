import React from "react";

const GithubLight = () => {
  return (
    <>
      <directionalLight intensity={2} color={"#ffffff"} />
      <directionalLight position={[1, 1, 2]} intensity={1} color={"white"} />
    </>
  );
};

export default GithubLight;
