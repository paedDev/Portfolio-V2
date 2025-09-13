import React from "react";

const IphoneLight = () => {
  return (
    <>
      <ambientLight intensity={10} color={"#FCD8CD"} />
      <spotLight position={(5, 5, 5)} color={"orange"} intensity={12} />
    </>
  );
};

export default IphoneLight;
