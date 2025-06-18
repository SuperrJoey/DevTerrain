'use client'

import { useState } from "react"
import { useGitHubData } from "../../utils/useGithubData"
import { Scene3D } from "../../components/Scene3D"

export default function ExplorePage() {
    const { fetchData, loading, contributions, error} = useGitHubData();
    const [username, setUsername] = useState('')

    return (
        <div className="min-h-screen bg-black">
            <div className="p-6">
                <a 
                    href="/"
                    className="text-gray-500 hover:text-white transition-colors"
                    >
                    Home
                </a>
            </div>

                {/*Input Section */}
                <div className="container mx-auto px-8 py-12">
                    <div className="text-center mb-12">
                        <h1 className="text-white mb-4 text-4xl">
                            Explore your GitHub Terrain
                        </h1>
                        <p className="text-gray-400">
                            Enter your GitHub username
                        </p>
                    </div>

                {/* Input Form */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="flex gap-4">
                        <input 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Github username"
                            className="px-4 py-2 flex-1 bg-white/20 rounded text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none"
                            />
                        <button
                            onClick={() => fetchData(username)}
                            disabled={loading || !username}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 transition-all"
                            >
                            {loading ? 'Loading' : 'Explore'}
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-400 text-sm mt-2">{error}</p>
                    )}
                </div>
                {contributions.length > 0 && 
                (
                    <div>
                        <h2>
                            {username}'s DevTerrain
                        </h2>
                        <Scene3D contributions={contributions} username={username}/>
                    </div>
                )}

                </div>
            </div>
    )
}