// src/components/Callus.jsx

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useState, useEffect } from 'react';
// --- ASSETS ---
import stickerCamera from '../assets/svgs/camera.svg';
import stickerPhone from '../assets/svgs/phone.svg';
import stickerSmiley from '../assets/svgs/smile.svg';
import stickerThumbsUp from '../assets/svgs/thumbs-up.svg';
import stickerHearts from '../assets/svgs/heart2.svg';
import twoLines from "../assets/svgs/two-lines.svg";
import Twolines from '../SvgComponents/Twolines';

// --- CARD DATA ---


// --- The Main Component ---
const Callus = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);

    useEffect(() => {
        // Update the state when the window is resized
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };

        window.addEventListener('resize', handleResize);
        // Clean up the event listener
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const cardData = [
        {
            title: 'Artist Management',
            services: ['Talent Representation', 'Brand Collaborations', 'PR & Media Handling', 'Show Bookings', 'Tour Management', 'Digital Growth Strategy'],
            bgColor: 'bg-[#008080] text-white',
            positioning: 'transform left-[10%] top-15 z-10',
            rotation: 7, // degrees
            sticker: stickerCamera,
            stickerPositioning: 'absolute -top-8 right-4 w-24 transform rotate-[15deg]'
        },
        {
            title: 'Artist Booking',
            services: ['Concerts & Festivals', 'Corporate Shows', 'University Events', 'Private Celebrations', 'Brand Activations'],
            bgColor: 'bg-[#6495ED]',
            positioning: `transform ${isDesktop && "left-[30%]"} z-20`,
            rotation: -5, // degrees
            sticker: stickerPhone,
            stickerPositioning: `absolute max-lg:-left-4 -top-12 lg:-top-12 ${isDesktop && "right-0"} w-20 transform rotate-[10deg]`
        },
        {
            title: 'Event Management & Production',
            services: ['Event Strategy', 'Venue Coordination', 'Stage & Production', 'Sound & Lighting', 'Artist Logistics', 'Live Execution'],
            bgColor: 'bg-[#FF4500]',
            positioning: 'relative z-30 top-15 right-70',
            rotation: 0, // degrees
            sticker: stickerSmiley,
            stickerPositioning: `absolute ${isDesktop ? "-top-8" : ""} right-8 w-16`
        },
        {
            title: 'Corporate & Brand Experiences',
            services: ['Product Launches', 'Brand Activations', 'Marketing Events', 'Award Ceremonies', 'Corporate Retreats'],
            bgColor: 'bg-[#B22222] text-white',
            positioning: 'transform right-[5%] z-40',
            rotation: -7, // degrees
            sticker: stickerThumbsUp,
            stickerPositioning: 'absolute -top-16 right-4 w-20 transform rotate-[15deg]'
        },
    ];
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    const mousePositionRef = useRef({ x: 0, y: 0 });

    useLayoutEffect(() => {
        const containerElement = containerRef.current;
        if (!containerElement) return;

        // Set initial transforms for GSAP with original rotations
        cardRefs.current.forEach((cardElement, index) => {
            if (cardElement) {
                const originalRotation = cardData[index].rotation;
                gsap.set(cardElement, {
                    x: 0,
                    y: 0,
                    rotation: originalRotation,
                    transformOrigin: "center center"
                });
            }
        });

        // Create GSAP ticker for smooth 60fps animation
        const ticker = gsap.ticker.add(() => {
            cardRefs.current.forEach((cardElement, index) => {
                if (!cardElement) return;

                const rect = cardElement.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const mouseX = mousePositionRef.current.x;
                const mouseY = mousePositionRef.current.y;

                // Calculate distance and direction
                const deltaX = centerX - mouseX;
                const deltaY = centerY - mouseY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                const maxDistance = isDesktop ? 700 : 0;
                const strength = isDesktop ? 70 : 0;

                let targetX = 0;
                let targetY = 0;

                if (distance < maxDistance && distance > 0) {
                    const force = (maxDistance - distance) / maxDistance * strength;
                    const normalizedX = deltaX / distance;
                    const normalizedY = deltaY / distance;

                    targetX = normalizedX * force;
                    targetY = normalizedY * force;
                }

                // Use GSAP's built-in interpolation for ultra-smooth movement
                const currentX = gsap.getProperty(cardElement, "x");
                const currentY = gsap.getProperty(cardElement, "y");

                const lerpFactor = 0.12;
                const newX = gsap.utils.interpolate(currentX, targetX, lerpFactor);
                const newY = gsap.utils.interpolate(currentY, targetY, lerpFactor);

                // Apply transform with original rotation preserved
                const originalRotation = cardData[index].rotation;
                gsap.set(cardElement, {
                    x: newX,
                    y: newY,
                    rotation: originalRotation
                });
            });
        });

        const handleMouseMove = (e) => {
            mousePositionRef.current = isDesktop ? { x: e.clientX, y: e.clientY } : {};
        };

        const handleMouseLeave = () => {
            // Animate back to original positions smoothly while preserving rotation
            cardRefs.current.forEach((cardElement, index) => {
                if (!cardElement) return;
                const originalRotation = cardData[index].rotation;
                gsap.to(cardElement, {
                    x: 0,
                    y: 0,
                    rotation: originalRotation,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        };

        containerElement.addEventListener('mousemove', handleMouseMove);
        containerElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            gsap.ticker.remove(ticker);
            containerElement.removeEventListener('mousemove', handleMouseMove);
            containerElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);


    return (
        <section data-navbar-theme="light" className='pt-16 bg-[#F3EEE7]'>
            <h1 className='flex  lg:gap-5 justify-center text-center font-extrabold epilogue text-4xl lg:text-7xl tracking-[-0.06em]'>
                call us if you
                <p className='lora font-light'>
                    need
                    {/* <img className='w-36' src={twoLines} alt="" /> */}
                    <Twolines className={"w-20 lg:w-36"} />
                </p>
            </h1>

            <div className="w-full flex justify-center items-center p-10 font-sans">
                <div
                    ref={containerRef}
                    className="relative flex flex-col max-lg:translate-y-20 max-lg:pb-32 max-lg:justify-center max-lg:gap-12 lg:flex-row justify-center items-center w-full max-w-6xl lg:h-[600px]"
                >
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            ref={(el) => cardRefs.current[index] = el}
                            className={`lg:absolute max-lg:sticky max-lg:mt-5 max-lg:top-0 w-72 min-h-96 p-8 rounded-lg shadow-2xl ${card.bgColor} 
                            lg:${card.positioning} lg:hover:z-[60] `}
                        >
                            {/* Sticker Image */}
                            <img
                                src={card.sticker}
                                alt={`${card.title} sticker`}
                                className={`drop-shadow-[0_0_3px_rgba(255,255,255,0.7)] ${card.stickerPositioning} pointer-events-none z-20 `}
                                draggable={false}
                            />

                            {/* Card Content */}
                            <div className="relative z-10 pointer-events-none">
                                <h2 className="text-3xl font-extrabold mb-4 epilogue">{card.title}</h2>
                                <hr className="border-t-2 border-white/80 mb-4" />
                                <ul className="space-y-1 text-lg dm-sans">
                                    {card.services.map((service, i) => (
                                        <li key={i} className="flex items-start gap-x-3">
                                            <span className="mt-1 text-xs">◆</span>
                                            <span>{service}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Callus;
