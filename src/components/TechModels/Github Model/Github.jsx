import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
function Github(props) {
  const { nodes, materials } = useGLTF("models/Github.gltf");
  const whiteMaterial = new THREE.MeshPhongMaterial({ color: "#fff" });
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.005, 0]}>
        <group
          rotation={[0, Math.PI / 4, -Math.PI]}
          scale={[-4.167, 4.167, 4.167]}
        >
          <mesh
            geometry={nodes.Object_10.geometry}
            material={whiteMaterial}
            position={[-12, -11.702, -2.5]}
          />
        </group>
      </group>
    </group>
  );
}

export default Github;
