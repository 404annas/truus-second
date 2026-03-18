// src/components/ImageCollage.jsx

import React, { useLayoutEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import collage1 from "../assets/images/collage1.avif";
import collage2 from "../assets/images/collage2.avif";
import collage3 from "../assets/images/collage3.avif";
import collage4 from "../assets/images/collage4.avif";
import blueDoodle from "../assets/svgs/blue-doodle3.svg";

import plan1 from "../assets/images/plan1.png"
import plan2 from "../assets/images/plan2.png"
import plan3 from "../assets/images/plan3.avif"
import plan4 from "../assets/images/plan4.avif"

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// --- Component Data (Easy to update later) ---
const imageData = [
  {
    src: plan1,
    alt: "People at a table",
    tag: "Live Event Experiences",
    tagColor: "bg-pink-300",
    position: "absolute top-[10%] left-0 z-10",
    rotation: -6, // degrees
  },
  {
    src: plan2,
    alt: "Man in a wizard hat",
    tag: "Music Marketing Strategy",
    tagColor: "bg-orange-500",
    position: "absolute top-[40%]  md:top-[20%] right-1/2 md:left-1/4 z-20",
    rotation: 3, // degrees
  },
  {
    src: plan3,
    alt: "Man relaxing",
    tag: "Artist Campaign Execution",
    tagColor: "bg-orange-500",
    position: "absolute top-[10%] right-0 md:right-1/4 z-30",
    rotation: -6, // degrees
  },
  {
    src: plan4,
    alt: "Group at an event",
    tag: "Concert Production Experts",
    tagColor: "bg-lime-300",
    position: "absolute top-[40%] md:top-[20%] left-1/2 md:left-[65%] z-40",
    rotation: 3, // degrees
  },
];

// --- The Main Component ---
const ImageCollage = () => {
  const component = useRef(null);
  const imagesRef = useRef(null);
  const imageRefs = useRef([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const componentElement = component.current;
    if (!componentElement) return;

    // Set initial transforms for GSAP with original rotations
    imageRefs.current.forEach((imageElement, index) => {
      if (imageElement) {
        const originalRotation = imageData[index].rotation;
        gsap.set(imageElement, {
          x: 0,
          y: 0,
          rotation: originalRotation,
        });
      }
    });

    // Create GSAP ticker for smooth 60fps animation
    const ticker = gsap.ticker.add(() => {
      imageRefs.current.forEach((imageElement, index) => {
        if (!imageElement) return;

        const rect = imageElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;

        // Calculate distance and direction
        const deltaX = centerX - mouseX;
        const deltaY = centerY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = 350;
        const strength = 80;

        let targetX = 0;
        let targetY = 0;

        if (distance < maxDistance && distance > 0) {
          const force = ((maxDistance - distance) / maxDistance) * strength;
          const normalizedX = deltaX / distance;
          const normalizedY = deltaY / distance;

          targetX = normalizedX * force;
          targetY = normalizedY * force;
        }

        // Use GSAP's built-in interpolation for ultra-smooth movement
        const currentX = gsap.getProperty(imageElement, "x");
        const currentY = gsap.getProperty(imageElement, "y");

        const lerpFactor = 0.1;
        const newX = gsap.utils.interpolate(currentX, targetX, lerpFactor);
        const newY = gsap.utils.interpolate(currentY, targetY, lerpFactor);

        // Apply transform with original rotation preserved
        const originalRotation = imageData[index].rotation;
        gsap.set(imageElement, {
          x: newX,
          y: newY,
          rotation: originalRotation,
        });
      });
    });

    const handleMouseMove = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      // Animate back to original positions smoothly while preserving rotation
      imageRefs.current.forEach((imageElement, index) => {
        if (!imageElement) return;
        const originalRotation = imageData[index].rotation;
        gsap.to(imageElement, {
          x: 0,
          y: 0,
          rotation: originalRotation,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      });
    };

    componentElement.addEventListener("mousemove", handleMouseMove);
    componentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      gsap.ticker.remove(ticker);
      componentElement.removeEventListener("mousemove", handleMouseMove);
      componentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={component}
      className="relative w-full overflow-hidden pt-6 sm:pt-8  px-4 sm:px-6"
    >
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto h-full  flex justify-center items-center">
        {/* --- Background SVG Shape --- */}
        <img
          src={blueDoodle}
          alt=""
          className="absolute left-2 sm:left-4 lg:left-1/21 top-0 w-1/4 sm:w-1/3 h-auto text-blue-400 z-0"
        />

        {/* --- Image Container for Parallax --- */}
        <div ref={imagesRef} className="relative w-full h-[50vh] lg:h-[80vh]">
          {imageData.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imageRefs.current[index] = el)}
              className={`shadow-lg w-[150px] sm:w-[180px] md:w-[220px] lg:w-[250px] sm:shadow-xl rounded-xl sm:rounded-2xl overflow-hidden ${image.position}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-88 object-cover  "
              />

              {image.tag && (
                <div
                  className={`absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4 text-black text-xs sm:text-sm font-semibold p-1.5 sm:p-2 rounded-md sm:rounded-lg ${image.tagColor}`}
                >
                  <span className="hidden sm:inline">{image.tag}</span>
                  <span className="sm:hidden">
                    {image.tag.length > 15
                      ? image.tag.substring(0, 15) + "..."
                      : image.tag}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="dm-sans font-light text-white text-center max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl pt-24 lg:pt-10 px-2 sm:px-0 pb-8">
        We are a live entertainment company focused on producing concerts,
        public shows, and large-scale events. From securing talent to full-scale
        production, we bring vision, sound, and crowd energy together to create
        experiences that audiences remember.
      </p>
    </section>
  );
};

export default ImageCollage;
