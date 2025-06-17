'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-green-900/20"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className={`text-center max-w-5xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Title - much smaller and refined */}
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mb-6 tracking-tight">
            DevTerrain
          </h1>
          
          {/* Subtitle - smaller and more elegant */}
          <div className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
            Transform your{' '}
            <span className="text-green-400 font-medium">GitHub contributions</span>
            {' '}into breathtaking{' '}
            <span className="text-blue-400 font-medium">3D terrains</span>
            . Watch your coding journey unfold as stunning landscapes.
          </div>
          
          {/* Feature cards - smaller text */}
          <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">🏔️</div>
              <div className="text-white font-medium text-sm">3D Visualization</div>
              <div className="text-gray-400 text-xs">Interactive terrain maps</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-white font-medium text-sm">Real-time Data</div>
              <div className="text-gray-400 text-xs">Live GitHub integration</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-2xl mb-2">🎨</div>
              <div className="text-white font-medium text-sm">Beautiful UI</div>
              <div className="text-gray-400 text-xs">Stunning visual experience</div>
            </div>
          </div>
          
          {/* CTA Button - smaller and more refined */}
          <button className="group relative bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 hover:from-blue-600 hover:via-purple-600 hover:to-green-600 text-white font-semibold py-4 px-8 rounded-xl text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <span className="relative z-10">Start Exploring</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </button>
          
        </div>
      </div>
    </div>
  )
}