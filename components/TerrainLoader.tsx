'use client'

interface TerrainLoaderProps {
        username: string;
}

export const TerrainLoader = ({ username }: TerrainLoaderProps) =>{
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-20 px-4">
            <div className="flex items-end gap-1 mb-6 md:mb-8">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-t from-blue-500 to-green-400 rounded-sm animate-pulse"
                        style={{
                            width: '6px',
                            height: `${Math.random() * 30 + 15}px`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            {/*Loading text with typewriter effect*/}
            <div className="text-center max-w-md mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 md:mb-3">
                    Mapping {username}'s DevTerrain
                </h3>
                <p className="text-gray-400 mb-4 md:mb-6 text-sm sm:text-base">
                    Analyzing contribution patterns and building your 3D landscape...
                </p>

                {/* Animated dots */}
                <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0s'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s'}}></div>
                </div>
            </div>

            {/* Progress bar */}
            <div className="w-48 sm:w-64 h-1 bg-white/10 rounded-full mt-6 md:mt-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full animate-pulse"></div>
            </div>
        </div>
    )
}