import React from 'react'
import HeroText from '../components/HeroText'

import heroDarkImg from "../assets/images/hero-dark.png"
import heroSecondImg from "../assets/images/hero-second.webp"
import heroFirstImg from "../assets/images/hero-first.webp"

export default function Hero() {
  return (
    // 1. Changed bg to match the dark silhouettes (#0B0C10 is the common dark shade in your inspo)
    <div data-navbar-theme="dark" className="h-[150vh] w-full flex justify-center items-center bg-gradient-to-b from-[#8BA0C7] via-[#3F3C7B] to-[#0B0C10]">
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        
        {/* Layer 1: Background (First) - Aligned to top */}
        <img 
          src={heroFirstImg} 
          alt="" 
          className="absolute top-0 left-0 w-full h-[100vh] blur-[2px] pt-30 object-cover object-top z-0"
        />

        {/* Layer 2: Middle Ground (Second) - Aligned to top */}
        <img 
          src={heroSecondImg} 
          alt="" 
          className="absolute top-0 left-0 w-full h-[100vh] pt-60 object-cover object-top z-10"
        />

        {/* Layer 3: Foreground Silhouettes (Dark) - Aligned to top */}
        <img 
          src={heroDarkImg} 
          alt="" 
          className="absolute top-0 left-0 w-full h-[190vh] pt-80 blur-sm object-cover object-top z-20"
        />

        {/* Text Content Layer - Positioned over the dark void */}
        <div className="absolute inset-0 z-30 flex items-center justify-center px-6">
          <div className="w-full mt-[20vh] lg:mt-[100vh]">
            <HeroText />
          </div>
        </div>

      </div>
    </div>
  )
}