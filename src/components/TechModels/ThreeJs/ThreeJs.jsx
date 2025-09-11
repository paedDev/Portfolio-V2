import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
export function ThreeJs(props) {
  const { nodes, materials } = useGLTF("models/three.js-transformed.glb");

  const whiteMaterial = new THREE.MeshPhongMaterial({ color: "#ffffff" });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={whiteMaterial}
      />
    </group>
  );
}

export default ThreeJs;
