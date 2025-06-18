'use client'

import { useState } from "react"
import { useGitHubData } from "../../utils/useGithubData"
import { Scene3D } from "../../components/Scene3D"
import { TerrainLoader } from "../../components/TerrainLoader"

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
                    </div>

                {/* Loading Animation */}
                {loading && username && (
                    <TerrainLoader username={username} />
                )}

                {/* Only show the input form when not loading */}
                {!loading && (
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
                )}
                {contributions.length > 0 && 
                (
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2">
                                {username}'s DevTerrain
                            </h2>
                            <p>
                                Your GitHub contribution journey visualized in 3D
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blue-sm border border-white/10 rounded-xl p-6"> 
                            <Scene3D contributions={contributions} username={username}/>
                        </div>

                        {/*Stats Section*/}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-green-400">
                                    {contributions.reduce((sum, day) => sum + day.count, 0)}
                                </div>
                                <div className="text-sm text-gray-400">
                                    Total Contributions
                                </div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400">
                                    {contributions.filter(day => day.count > 0).length}
                                </div>
                                <div className="text-sm text-gray-400">Active Days</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-purple-400">
                                    {Math.max(...contributions.map(day => day.count))}
                                </div>
                                <div className="text-sm text-gray-400">
                                    Max Daily
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                </div>
            </div>
    )
}