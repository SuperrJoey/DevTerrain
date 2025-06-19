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
        <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] border border-white/10 rounded-lg overflow-hidden">
            <Canvas camera={{ position: [15, 15, 15], fov: 60 }}>
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <ContributionGrid contributions={contributions} username={username} />
            </Canvas>
        </div>
    )
}