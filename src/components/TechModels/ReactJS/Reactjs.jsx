import React from "react";
import { useGLTF } from "@react-three/drei";

export function Reactjs(props) {
  const { nodes, materials } = useGLTF(
    "models/techModels/ReactModel/reactjs.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes["React-Logo_Material002_0"].geometry}
            material={materials["Material.002"]}
            position={[0, 7.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[39.166, 39.166, 52.734]}
          />
          <mesh
            geometry={nodes.Backdrop_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-17.091, 7.935, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[247.854, 247.854, 52.734]}
          />
        </group>
      </group>
    </group>
  );
}

export default Reactjs;
