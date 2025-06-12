'use client'

import { ContributionDisplay } from "@/components/ContributionDisplay";
import { useGitHubData } from "../utils/useGithubData";
import { useState } from "react";

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
      
      {contributions.length > 0 && (
        <ContributionDisplay
          contributions={contributions}
          username={username}
        />
      )}
    </div>
  )
}