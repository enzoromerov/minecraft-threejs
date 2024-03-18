import React from 'react'
import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/2ASZkX7i6jS-YptB/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#4f0063']} />
      <group {...props} dispose={null}>
        <scene name="Scene">
          <mesh
            name="Sphere"
            geometry={nodes.Sphere.geometry}
            material={materials['Sphere Material']}
            castShadow
            receiveShadow
            rotation={[Math.PI, -1.1, Math.PI]}
            scale={1}
          />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            position={[-811.97, 87.31, 300]}
          />
          <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
