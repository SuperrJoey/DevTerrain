'use client'

interface Scene3DProps {
    contributions: { date: string; count: number }[];
    username: string;
}

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { ContributionGrid } from '../components/ContributionGrid'

export const Scene3D = ({ contributions, username }: Scene3DProps) => {
    return (
        <div style={{ width: '100%', height: '70vh', border: '1px solid #ccc'}}>
            <Canvas camera={{ position: [15, 15, 15], fov: 60 }}>
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <ContributionGrid contributions={contributions} username={username} />
            </Canvas>
        </div>
    )
}