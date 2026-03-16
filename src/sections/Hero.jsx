import React from 'react'
import HeroText from '../components/HeroText'

import heroDarkImg from "../assets/images/hero-dark.png"
import heroSecondImg from "../assets/images/hero-second.webp"
import heroFirstImg from "../assets/images/hero-first.webp"

export default function Hero() {
  return (
    // 1. Container
    <div className="relative h-screen w-full overflow-hidden bg-[#0B0C10]">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b48cd9] via-[#3F3C7B] to-[#0B0C10] z-0" />

      {/* 2. TEXT CONTENT: Positioned clearly in the "sky" area, below the logo */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-start pt-[23vh] px-6">
        <div className="w-full max-w-6xl text-center">
          <HeroText />
        </div>
      </div>

      {/* 3. THE CROWD LAYERS: All anchored to the bottom */}
      
      {/* Layer 1: Furthest away (Small/Blurry) */}
      <img
      loading='lazy'
        src={heroFirstImg} 
        alt="" 
        className="absolute bottom-0 left-0 w-full h-[80vh] scale-[0.5] object-cover object-top opacity-50 blur-[4px] z-10"
      />

      {/* Layer 2: Middle ground */}
      <img 
      loading='lazy'
        src={heroSecondImg} 
        alt="" 
        className="absolute bottom-0 left-0 w-full h-[70vh] scale-[0.7] pt-20 object-cover object-top z-20"
      />

      {/* Layer 3: Foreground (The Dark Silhouettes) */}
      {/* We make this taller but push it down slightly with translate to match your "Goal" image */}
      <img 
      loading='lazy'
        src={heroDarkImg} 
        alt="" 
        className="absolute bottom-0 left-0 w-full h-[75vh] pt-20 object-cover object-top blur-[5px] z-30 translate-y-[15%]"
      />

      {/* 4. Small Ground Fade - Reduced height so it doesn't hide the people */}
      <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-[#0B0C10] to-transparent z-40" />

    </div>
  )
}