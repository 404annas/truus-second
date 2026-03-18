import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Share2, RotateCcw, Video, Palette, Globe } from "lucide-react";

import orangeDoodle1 from "../assets/svgs/orange-d.svg";
import orangeDoodle2 from "../assets/svgs/orange2-d.svg";
import blueDoodle from "../assets/svgs/blue-d.svg";
import pinkDoodle from "../assets/svgs/pink-d.svg";
import arrowDoodle from "../assets/svgs/arrow-d.svg";
import curlyDoodle from "../assets/svgs/curly-d.svg";
import arrowDown from "../assets/svgs/arrow-d.svg";

import event1 from "../assets/images/event1.jpeg"
import event2 from "../assets/images/event2.jpeg"
import event3 from "../assets/images/poster.jpeg"
import event5 from "../assets/images/event5.jpg"
import event4 from "../assets/images/event4.jpg"
import event6 from "../assets/images/event6.jpg"

import video1 from "../assets/videos/video1.mp4"
import video2 from "../assets/videos/video2.MP4"
import video3 from "../assets/videos/video3.MP4"
import video4 from "../assets/videos/video4.mp4"

const defaultCards = [
  {
    src: event1,
    brand: "douwe egberts",
    tag: "social",
    title: "feestje bouwe?",
    rotation: -6,
    position: "",
    z: "z-20",
  },
  {
    src: event2,
    brand: "hema",
    tag: "360",
    title: "skibidi school",
    rotation: -1,
    position: "",
    z: "z-30",
  },
  {
    src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686b959b09dca3375fba5ba4_1.avif",
    brand: "hema",
    tag: "social",
    title: "hema socials",
    rotation: 4,
    position: "",
    z: "z-20",
  },
];

const WorkCards = ({
  title,
  cards = defaultCards,
  doodleSrc,
  doodleClassName,
}) => {
  const [canHover, setCanHover] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(hover: hover) and (pointer: fine)").matches
      : true,
  );

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const videoRefs = useRef(new Map());
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setCanHover(
        window.matchMedia("(hover: hover) and (pointer: fine)").matches,
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    cardRefs.current.forEach((cardElement, index) => {
      if (!cardElement) return;
      gsap.set(cardElement, {
        x: 0,
        y: 0,
        rotation: cards[index].rotation,
        transformOrigin: "center center",
      });
    });

    const ticker = gsap.ticker.add(() => {
      cardRefs.current.forEach((cardElement, index) => {
        if (!cardElement) return;

        const rect = cardElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;

        const deltaX = centerX - mouseX;
        const deltaY = centerY - mouseY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = canHover ? 700 : 0;
        const strength = canHover ? 70 : 0;

        let targetX = 0;
        let targetY = 0;

        if (distance < maxDistance && distance > 0) {
          const force = ((maxDistance - distance) / maxDistance) * strength;
          const normalizedX = deltaX / distance;
          const normalizedY = deltaY / distance;

          targetX = normalizedX * force;
          targetY = normalizedY * force;
        }

        const currentX = gsap.getProperty(cardElement, "x");
        const currentY = gsap.getProperty(cardElement, "y");

        const lerpFactor = 0.12;
        const newX = gsap.utils.interpolate(currentX, targetX, lerpFactor);
        const newY = gsap.utils.interpolate(currentY, targetY, lerpFactor);

        gsap.set(cardElement, {
          x: newX,
          y: newY,
          rotation: cards[index].rotation,
        });
      });
    });

    const handleMouseMove = (e) => {
      mousePositionRef.current = canHover
        ? { x: e.clientX, y: e.clientY }
        : { x: 0, y: 0 };
    };

    const handleMouseLeave = () => {
      cardRefs.current.forEach((cardElement, index) => {
        if (!cardElement) return;
        gsap.to(cardElement, {
          x: 0,
          y: 0,
          rotation: cards[index].rotation,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      });
    };

    containerElement.addEventListener("mousemove", handleMouseMove);
    containerElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      gsap.ticker.remove(ticker);
      containerElement.removeEventListener("mousemove", handleMouseMove);
      containerElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [canHover]);

  const tagConfig = {
    social: {
      label: "Social",
      icon: Share2,
    },
    360: {
      label: "360",
      icon: RotateCcw,
    },
    video: {
      label: "Video",
      icon: Video,
    },
    design: {
      label: "Design",
      icon: Palette,
    },
    web: {
      label: "Web",
      icon: Globe,
    },
  };

  const handleVideoMouseEnter = (index) => {
    const video = videoRefs.current.get(index);
    if (!video) return;
    video.muted = true;
    video.loop = true;
    const playPromise = video.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  };

  const handleVideoMouseLeave = (index) => {
    const video = videoRefs.current.get(index);
    if (!video) return;
    video.pause();
    try {
      video.currentTime = 0;
    } catch {
      // Ignore if video isn't ready yet
    }
    if (video.poster) {
      video.load();
    }
  };

  return (
    <section
      data-navbar-theme="dark"
      className="relative  w-full bg-black text-white overflow-hidden px-4 md:px-8 pb-10"
    >
      {doodleSrc ? (
        <motion.img
          src={doodleSrc}
          alt=""
          className={
            doodleClassName ||
            "absolute left-35 bottom-0 w-40 md:w-70 pointer-events-none"
          }
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        />
      ) : null}
      <div className="max-w-7xl mx-auto pt-10">
        {title ? (
          <>
            {" "}
            <motion.img
              src={arrowDown}
              alt=""
              className="mx-auto mt-2 w-10 md:w-40 pb-5 translate-x-30 rotate-20"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <h1 className="text-3xl text-center epilogue font-extrabold">
              {title}
            </h1>
          </>
        ) : null}

        <div
          ref={containerRef}
          className="relative min-h-[560px] lg:min-h-[680px] flex flex-col lg:flex-row justify-center items-center gap-4"
        >
          {cards.map((card, index) => {
            const tag = tagConfig[card.tag];
            const Icon = tag?.icon;

            return (
              <motion.article
                key={card.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                onMouseEnter={() => {
                  if (card.type === "video" && card.hoverPlay) {
                    handleVideoMouseEnter(index);
                  }
                }}
                onMouseLeave={() => {
                  if (card.type === "video" && card.hoverPlay) {
                    handleVideoMouseLeave(index);
                  }
                }}
                className={`relative ${card.z} ${card.position} w-[300px] md:w-[340px] h-[500px] md:h-[560px] rounded-[28px] border-4 border-white overflow-hidden shadow-2xl`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {card.type === "video" ? (
                  <video
                    ref={(el) => {
                      if (el) {
                        videoRefs.current.set(index, el);
                      } else {
                        videoRefs.current.delete(index);
                      }
                    }}
                    src={card.src}
                    poster={card.poster}
                    autoPlay={!card.hoverPlay}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55" />

                {/* <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-md text-white text-base font-bold px-4 py-2 rounded epilogue">
                  {Icon && <Icon size={16} />}
                  {tag?.label || card.tag}
                </div> */}

                <div className="absolute bottom-[60px] left-1/2 -translate-x-1/2 bg-[#f4523a] text-black px-4 py-1.5 rounded-full text-base font-semibold dm-sans">
                  {card.brand}
                </div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-pre-line text-center text-lg md:text-2xl epilogue font-extrabold ">
                  <p>{card.title}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkCards;
