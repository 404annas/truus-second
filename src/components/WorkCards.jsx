import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Share2, RotateCcw, Video, Palette, Globe } from "lucide-react";

import orangeDoodle1 from "../assets/svgs/orange-d.svg";
import orangeDoodle2 from "../assets/svgs/orange2-d.svg";
import blueDoodle from "../assets/svgs/blue-d.svg";
import pinkDoodle from "../assets/svgs/pink-d.svg";
import arrowDoodle from "../assets/svgs/arrow-d.svg";
import curlyDoodle from "../assets/svgs/curly-d.svg";

const cards = [
  {
    src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68663be0740c68b890d87ff6_kfc-kipsalon-thumbnail.avif",
    brand: "douwe egberts",
    tag: "social",
    title: "feestje bouwe?",
    rotation: -6,
    position: "",
    z: "z-20",
  },
  {
    src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/6866999038def993f6901d98_c4b0a4b3-aa91-4239-85ab-0d24b205d802.avif",
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

const WorkCards = () => {
  const [canHover, setCanHover] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(hover: hover) and (pointer: fine)").matches
      : true,
  );

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
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

  return (
    <section
      data-navbar-theme="dark"
      className="relative min-h-screen w-full bg-black text-white overflow-hidden px-4 md:px-8 pb-10"
    >
      {/* <img src={orangeDoodle1} alt="" className="absolute left-0 bottom-0 w-40 md:w-56 pointer-events-none" /> */}
      {/* <img src={orangeDoodle2} alt="" className="absolute left-6 bottom-8 w-24 md:w-32 pointer-events-none" /> */}
      {/* <img src={blueDoodle} alt="" className="absolute right-4 top-20 w-16 md:w-24 pointer-events-none" /> */}
      {/* <img src={pinkDoodle} alt="" className="absolute right-16 top-36 w-10 md:w-14 pointer-events-none" /> */}
      <img
        src={arrowDoodle}
        alt=""
        className="absolute right-10 bottom-32 w-16 md:w-24 pointer-events-none rotate-12"
      />
      {/* <img src={curlyDoodle} alt="" className="absolute left-1/2 -translate-x-1/2 top-8 w-14 md:w-20 pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto pt-10">
        <h1 className="text-3xl text-center epilogue font-extrabold">
          let's take a look <br /> at some stuff!
        </h1>
        <div
          ref={containerRef}
          className="relative min-h-[560px] lg:min-h-[680px] flex flex-col lg:flex-row justify-center items-center gap-4"
        >
          {cards.map((card, index) => {
            const tag = tagConfig[card.tag];
            const Icon = tag?.icon;

            return (
              <article
                key={card.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`relative ${card.z} ${card.position} w-[300px] md:w-[340px] h-[500px] md:h-[560px] rounded-[28px] border-4 border-white overflow-hidden shadow-2xl`}
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/55" />

                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#938983] text-white text-base font-bold px-4 py-2 rounded epilogue">
                  {Icon && <Icon size={16} />}
                  {tag?.label || card.tag}
                </div>

                <div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 bg-[#d59de8] text-black px-4 py-1.5 rounded-2xl text-base font-semibold dm-sans">
                  {card.brand}
                </div>

                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-pre-line text-center text-lg md:text-xl epilogue font-extrabold leading-none">
                  {card.title}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkCards;
