import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
export function Iphone(props) {
  // const picMaterial = useTexture("images/logo-images/texture/pfp.png");
  const backMaterial = useTexture("models/textures/back.png");
  backMaterial.flipY = false; // Flip the image vertically
  const customBackMaterial = new THREE.MeshPhongMaterial({ map: backMaterial });

  const blackMaterial = new THREE.MeshPhongMaterial({ color: "#57564F" });
  const { nodes, materials } = useGLTF("models/Iphone.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0.003, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={blackMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={blackMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={customBackMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group position={[0.002, 0, 0.061]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group position={[0.002, 0, -0.064]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={customBackMaterial}
        />
      </group>
      <group
        position={[0.223, 0.937, -0.103]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.411}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={customBackMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={customBackMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials["Material.001"]}
        position={[0.006, 1.237, 0.066]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={customBackMaterial}
        position={[-0.683, 0.812, 0.01]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.014}
      />
    </group>
  );
}

export default Iphone;
