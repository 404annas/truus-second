import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";


const Carousel_002 = ({
    images,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 40,
    ...rest
}) => {
    const css = `
  .Carousal_002 {
    padding-bottom: 50px !important;
    overflow: visible !important;
  }
  .swiper-slide-shadow {
    display: none !important;
  }
  `;
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.5,
            }}
            className={`relative w-full max-w-4xl ${className}`}
            {...rest}
        >
            <style>{css}</style>

            <Swiper
                // spaceBetween is ignored by "cards" effect, use cardsEffect instead
                autoplay={
                    autoplay
                        ? {
                            delay: 1000,
                            disableOnInteraction: false,
                        }
                        : false
                }
                effect="cards"
                // --- ADDED CONFIGURATION BELOW ---
                cardsEffect={{
                    perSlideOffset: 15, // Increases horizontal distance between cards
                    perSlideRotate: 10, // Increases the rotation angle (fanning effect)
                    slideShadows: false, // Removes the dark shadows between cards
                }}
                // ----------------------------------
                grabCursor={false}
                loop={loop}
                pagination={
                    showPagination
                        ? {
                            clickable: true,
                        }
                        : false
                }
                navigation={
                    showNavigation
                        ? {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }
                        : false
                }
                className="Carousal_002 h-[520px] md:h-[560px] w-[280px] md:w-[330px] "
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-stack rounded-3xl relative border-4 border-white bg-white " >
                        {({ isActive }) => (
                            <>
                                <img
                                    className="h-full w-full object-cover rounded-3xl"
                                    src={image.src}
                                    alt={image.alt}
                                />
                                {image.title && (
                                    <motion.p
                                        className="absolute w-full -bottom-[25%] md:-bottom-[12%] text-center text-black font-extrabold epilogue text-2xl  "
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: isActive ? 1 : 0,
                                            y: isActive ? 0 : 20,
                                        }}
                                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                                    >
                                        {image.title}
                                    </motion.p>
                                )}
                                {
                                    image.sticker1 && (
                                        <motion.img
                                            src={image.sticker1}
                                            className="absolute w-28 bottom-28 -left-10 text-center text-black font-extrabold epilogue text-2xl  "
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                scale: isActive ? 1 : 0.5,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                                        />
                                    )
                                }
                                {
                                    image.sticker2 && (
                                        <motion.div
                                            className="absolute  top-16 -right-10 md:-right-20 p-3 border-2 border-black text-xl rounded-md text-black  font-bold text-center epilogue  bg-[#F0EBE6]  "
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{
                                                opacity: isActive ? 1 : 0,
                                                scale: isActive ? 1 : 0.5,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
                                        >
                                            {image.sticker2}
                                        </motion.div>
                                    )
                                }
                            </>
                        )}
                    </SwiperSlide>
                ))}
                {showNavigation && (
                    <div>
                        <div className="swiper-button-next after:hidden">
                            <ChevronRightIcon className="h-6 w-6 text-black" />
                        </div>
                        <div className="swiper-button-prev after:hidden">
                            <ChevronLeftIcon className="h-6 w-6 text-black" />
                        </div>
                    </div>
                )}
            </Swiper>
        </motion.div>
    );
};

export { Carousel_002 };

/**
 * Skiper 48 Carousel_002 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
