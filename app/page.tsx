'use client'

// import { ContributionDisplay } from "@/components/ContributionDisplay";
import { ContributionGrid } from "@/components/ContributionGrid";
import { useGitHubData } from "../utils/useGithubData";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";



export default function Home() {
  const { fetchData, loading, contributions, error} = useGitHubData();
  const [username, setUsername] = useState("");


  return (
    <div>
      <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="p-2 border"
      />
      <button
        onClick={() => fetchData(username)}
        className="ml-2 p-2 bg-black text-white"
        >
        Fetch
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {/* {contributions.length > 0 && (
        <ContributionDisplay
          contributions={contributions}
          username={username}
        />
      )} */}

      {/* Test the 3D Scene */}
      <div className="mt-8">
        <div style={{ width: '100%', height: '70vh'}}>
        <Canvas camera={{ position: [15, 15, 15 ], fov: 60}}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[ 10, 10, 5 ]} intensity={1} />
            <ContributionGrid contributions={contributions} username={username}/>
        </Canvas>
        </div>
      </div>
    </div>
  )
}