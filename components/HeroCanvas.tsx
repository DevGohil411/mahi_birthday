'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Plane, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface HeroCanvasProps {
  imageUrl: string
}

function PlaneWithTexture({ imageUrl }: HeroCanvasProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useTexture(imageUrl)
  const { mouse } = useThree()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * 0.1
      meshRef.current.rotation.y = mouse.x * 0.1
      meshRef.current.position.z = Math.sin(Date.now() * 0.001) * 0.5
    }
  })

  return (
    <Plane ref={meshRef} args={[6, 8]} position={[0, 0, 0]}>
      <meshPhongMaterial map={texture} />
    </Plane>
  )
}

export default function HeroCanvas({ imageUrl }: HeroCanvasProps) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} style={{ height: '100%' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, -10, -10]} intensity={0.3} />
      <PlaneWithTexture imageUrl={imageUrl} />
    </Canvas>
  )
}
