'use client'

import { useMemo } from "react"
import { useState } from "react";
import { Mesh } from "three";

interface Contribution {
    date: string;
    count: number;
}

interface hoveredCubeProps {
    date: string;
    count: number;
    position: [number, number, number];
  }

interface ContributionGridProps {
    contributions: Contribution[];
    username: string;
}

export const ContributionGrid = ({ contributions, username }: ContributionGridProps) => {

    const [hoveredCube, setHoveredCube] = useState<hoveredCubeProps | null>(null);
    //Grid logic here

    const getColor = (count: number) => {
    if (count === 0) return '#f3f4f6';  // gray-100
    if (count <= 1) return '#bbf7d0';   // green-200
    if (count <= 3) return '#4ade80';   // green-400
    if (count <= 5) return '#16a34a';   // green-600
    return '#166534'; 
    }

    const gridLayout = useMemo(() => {
        const CUBE_SIZE = 0.5; //size of each cube
        const GAP = 0.1;        //gap between cubes
        const WEEK_COUNT = 52;  
        const DAYS_PER_WEEK = 7;

        return contributions.map((contribution, index) => {
            const week = Math.floor(index / DAYS_PER_WEEK);
            const day = index % DAYS_PER_WEEK;
            
            const x = week * (CUBE_SIZE + GAP);
            const z = day * (CUBE_SIZE + GAP);
            const y = (contribution.count * CUBE_SIZE) / 2; //height based on contribution count
            return {
                position: [x, y, z] as [number, number, number],
                color: getColor(contribution.count),
                count: contribution.count,
                date: contribution.date
            }
        })

    }, [contributions])


    return (
        <group>
           {gridLayout.map((cube, index) => (
            <mesh 
                key={index} 
                position={cube.position}
                onPointerEnter={(e) => {
                    e.stopPropagation();
                    setHoveredCube({
                        date:cube.date,
                        count: cube.count,
                        position: cube.position
                    });
                }}
                onPointerLeave={() => setHoveredCube(null)}
                >
                <boxGeometry args={[0.5, cube.count * 0.5, 0.5]} />
                <meshStandardMaterial 
                    color={cube.color}
                    opacity={hoveredCube?.date === cube.date ? 0.8 : 1}
                    transparent
                    />
            </mesh>
           ))}
        {hoveredCube && (
            <mesh position={[
                hoveredCube.position[0], 
                hoveredCube.position[1] + 1, 
                hoveredCube.position[2]
            ]}>
                <planeGeometry args={[2, 0.5]}/>
                <meshBasicMaterial color="white" opacity={0.9} transparent/>
            </mesh>
        )}
        </group>
    )
}

interface Scene3DProps {
    contributions: { date: string; count: number }[];
    username: string;
}

export const Scene3D = ({ contributions, username }: Scene3DProps) => {
}