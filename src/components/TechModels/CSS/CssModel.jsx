import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

export function CssModel(props) {
  const { nodes, materials } = useGLTF("models/CssModel.gltf");

  useEffect(() => {
    console.log("CSS Model loaded:", { nodes, materials });
    console.log("Available nodes:", Object.keys(nodes));
    console.log("Available materials:", Object.keys(materials));
  }, [nodes, materials]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -1.578]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[20.789, 136.746, 10.172]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group position={[326.27, 35.487, 1926.616]}>
              {nodes.Object_7 && (
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials["Material.002"] || materials.default}
                />
              )}
              {nodes.Object_8 && (
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.003"] || materials.default}
                />
              )}
            </group>
            {nodes.Object_5 && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials["Material.005"] || materials.default}
                position={[-142.941, -32.748, -5922.869]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={100}
              />
            )}
            {nodes.Object_10 && (
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials["Material.001"] || materials.default}
                position={[-182.684, 35.487, 1926.616]}
              />
            )}
          </group>
        </group>
      </group>
    </group>
  );
}

export default CssModel;
