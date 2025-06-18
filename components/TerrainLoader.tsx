'use client'

interface TerrainLoaderProps {
        username: string;
}

export const TerrainLoader = ({ username }: TerrainLoaderProps) =>{
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="flex items-end gap-1 mb-8">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-t from-blue-500 to-green-400 rounded-sm animate-pulse"
                        style={{
                            width: '8px',
                            height: `${Math.random() * 40 + 20}px`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            {/*Loading text with typewriter effect*/}
            <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                    Mapping {username}'s DevTerrain
                </h3>
                <p className="text-gray-400 mb-6">
                    Analyzing contribution patterns and building your 3D lanscape...
                </p>

                {/* Animated dots */}
                <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s'}}></div>
                </div>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
                <div className="w-full bg-gradient-to-r from-blue-500 to-geen-400 rounded-full animate-pulse w-full"></div>
            </div>
        </div>
    )
}