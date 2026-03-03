import React, { useState, useEffect } from "react";
import FadingImage from "../components/FadingImage"; // The component from Step 1

// --- ASSETS (Create and place these in your assets folder) ---


// Stickers
import stickerGoodVibes from "../assets/svgs/goodVibes.svg";
import stickerHands from "../assets/svgs/hands.svg";
import stickerHi from "../assets/svgs/hi.svg";
import stickerJoinClub from "../assets/svgs/joinTheClub.svg";
import stickerLetsGo from "../assets/svgs/letsGo.svg";
import circle from "../assets/svgs/circle.svg";
import greenDoodle from "../assets/svgs/greenDoodle.svg";
import blueDoodle from "../assets/svgs/blue-doodle.svg";

import goodVibes from "../assets/svgs/goodVibes.svg";
import AnimatedSvgPath from "../SvgComponents/AnimatedSvgPath";
import CurveLine from "../SvgComponents/CurveLine";
import ArrowDown from "../SvgComponents/ArrowDown";
import RoundedArrow from "../SvgComponents/RoundedArrow";
import Popup from "../SvgComponents/Popup";
import blob2 from "../assets/svgs/blob2.svg";
import greenBlob from "../assets/svgs/greenBlob.svg";

const singerImages = [
  "/singer/ali-zafar.webp",
  "/singer/asim.jpg",
  "/singer/atif.jpg",
  "/singer/hasan-raheem.jpg",
  "/singer/talha.jpeg",
];
// SVG Doodles
const GreenDoodle = () => (
  <svg
    viewBox="0 0 250 250"
    className="absolute top-1/2 right-0 w-1/2 h-auto text-teal-500 z-0 transform -translate-y-1/2"
    fill="currentColor"
  >
    <path d="M245.5 125.5Q248 151 234 167Q220 183 214 206.5Q208 230 185.5 231Q163 232 145.5 241Q128 250 109 243Q90 236 71 228Q52 220 38.5 204Q25 188 15.5 169Q6 150 15.5 131Q25 112 30 89.5Q35 67 57.5 57.5Q80 48 94 30.5Q108 13 131.5 11Q155 9 174 19Q193 29 210 37Q227 45 236.5 64.5Q246 84 245.5 104.5Q245 125 245.5 125.5Z" />
  </svg>
);
const BlueDoodle = () => (
  <svg
    viewBox="0 0 250 250"
    className="absolute bottom-0 left-0 w-1/3 h-auto text-blue-500 z-0"
    fill="currentColor"
  >
    <path d="M245.5 125.5Q248 151 234 167Q220 183 214 206.5Q208 230 185.5 231Q163 232 145.5 241Q128 250 109 243Q90 236 71 228Q52 220 38.5 204Q25 188 15.5 169Q6 150 15.5 131Q25 112 30 89.5Q35 67 57.5 57.5Q80 48 94 30.5Q108 13 131.5 11Q155 9 174 19Q193 29 210 37Q227 45 236.5 64.5Q246 84 245.5 104.5Q245 125 245.5 125.5Z" />
  </svg>
);

// --- TEAM DATA ARRAY ---
const teamData = [
  {
    images: [singerImages[0], singerImages[1]],
    alt: "Team member 1",
    sticker: "",
    // Mobile-first: smaller size, adjusted position. md: uses original values.
    position:
      "absolute top-[2%] left-[10%] w-48 h-64 md:left-[15%] md:w-72 md:h-96 z-10",
    stickerPosition: "",
  },
  {
    images: [singerImages[2], singerImages[3]],
    alt: "Team member 4",
    sticker: stickerGoodVibes,
    // Mobile-first: smaller size. md: uses original values.
    position: "absolute top-[20%] left-[5%] w-48 h-52 md:w-72 md:h-68 z-20",
    stickerPosition: "top-5 -right-16 w-32 -rotate-[15deg] popup",
  },
  {
    images: [singerImages[4], singerImages[0]],
    alt: "Team member 2",
    sticker: stickerHands,
    // Mobile-first: smaller size, moved from edge. md: uses original values.
    position:
      "absolute top-[10%] right-[5%] w-44 h-44 md:top-[8%] md:right-[0%] md:w-72 md:h-72 z-20",
    stickerPosition: "top-32 -right-6 md:-right-12 w-24 md:w-32",
  },
  {
    images: [singerImages[1], singerImages[2]],
    alt: "Team member 3",
    // Mobile-first: smaller size, adjusted position. md: uses original values.
    position:
      "absolute top-[30%] right-[10%] w-48 h-48 md:top-[32%] md:right-[30%] md:w-72 md:h-72 z-10",
  },
  {
    images: [singerImages[3], singerImages[4]],
    alt: "Team member 5",
    sticker: stickerHi,
    // Mobile-first: smaller size, adjusted position. md: uses original values.
    position:
      "absolute top-[42%] right-[8%] w-44 h-44 md:right-[12%] md:w-72 md:h-72 z-10",
    stickerPosition: "top-5 -left-12 w-20 -rotate-12",
  },
  {
    images: [singerImages[0], singerImages[2]],
    alt: "Team member 5",
    sticker: stickerJoinClub,
    // Mobile-first: smaller size. md: uses original values.
    position:
      "absolute top-[52%] left-[5%] w-48 h-64 md:top-[50%] md:left-[8%] md:w-72 md:h-[360px] z-20",
    stickerPosition: "top-1/3 -left-10 md:-left-16 w-24 md:w-32",
  },
  {
    images: [singerImages[1], singerImages[3]],
    alt: "Team member 5",
    sticker: stickerLetsGo,
    // Mobile-first: smaller size, adjusted position. md: uses original values.
    position:
      "absolute top-[68%] right-[5%] w-48 h-64 md:top-[69%] md:right-[18%] md:w-72 md:h-[360px] z-10",
    stickerPosition:
      "-bottom-2 md:bottom-2 -right-7 md:-right-12 w-24 md:w-32 -rotate-[30deg]",
  },
  {
    images: [singerImages[4], singerImages[2]],
    alt: "Team member 5",
    sticker: stickerHands,
    // Mobile-first: smaller size, adjusted position. md: uses original values.
    position:
      "absolute md:hidden top-[82%] left-4 w-48 h-64 md:top-[69%] md:right-[18%] md:w-72 md:h-[360px] z-10",
    stickerPosition: "-bottom-8 -right-20 w-28 rotate-45 ",
  },
];

const TeamSection = () => {
  const [currentIndices, setCurrentIndices] = useState(teamData.map(() => 0));

  useEffect(() => {
    // Define a different duration for each image card (in milliseconds)
    const durations = [2000, 3000, 1800, 3500, 2500, 4000, 2000, 3400];

    // Create a separate interval for each team member
    const intervalIDs = teamData.map((member, index) => {
      return setInterval(() => {
        // Use the functional form of setState to ensure we always have the latest state
        setCurrentIndices((prevIndices) => {
          // Create a copy of the previous state array
          const newIndices = [...prevIndices];
          // Update only the index for the current card
          newIndices[index] = (prevIndices[index] + 1) % member.images.length;
          // Return the new array
          return newIndices;
        });
      }, durations[index] || 2000); // Use the specific duration, or a default of 2000ms
    });

    // Cleanup function: This will be called when the component unmounts
    return () => {
      // Clear every single interval to prevent memory leaks
      intervalIDs.forEach((id) => clearInterval(id));
    };
  }, []);

  return (
    <section
      data-navbar-theme="dark"
      className="relative overflow-x-hidden bg-black text-white w-full  pt-20 px-8 flex flex-col items-center"
    >
      {/* --- Heading --- */}
      <div className="w-full max-w-5xl  text-center mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold epilogue  ">
          We represent{" "}
          <span className="relative inline-block w-32 md:w-[200px] lora italic font-light">
            {" "}
            artists
            <AnimatedSvgPath
              className="absolute bottom-0  left-0 md:top-0 right-0 object-cover  "
              paths={[
                {
                  d: "M94.2928 1.00027C123.974 0.963816 154.146 4.60865 181.273 16.5546C189.974 20.3907 199.369 26.6143 199.971 36.0452C200.401 42.8702 195.929 49.03 190.946 53.75C180.208 63.9191 166.386 70.3066 152.306 74.9538C125.258 83.8745 96.2711 86.9179 67.9394 83.8289C50.4851 81.9245 33.011 77.6054 17.9651 68.6209C9.40333 63.509 1.07316 55.618 1.00038 45.7041C0.960683 39.7721 4.01088 34.1226 8.27852 29.9767C12.5461 25.8307 17.9452 23.015 23.4369 20.6915C48.2553 10.2126 75.8527 8.8093 102.795 7.54272",
                },
              ]}
              viewBox={"0 0 201 86"}
              color={"white "}
            />
          </span>
          , from rising stars to headline performers.{" "}
          <span className="lora font-light italic">ready to shine!</span>
        </h2>
      </div>

      {/* --- Image Grid --- */}
      <div className="relative w-full max-w-6xl  h-[280vh] ">
        {/* Decorative Doodles */}

        <img
          className="w-96  absolute top-[0] right-[5%]"
          src={greenBlob}
          alt=""
        />
        <img
          className="w-96 absolute top-[55%] -left-[10%] "
          src={blob2}
          alt=""
        />
        <RoundedArrow
          className="w-44 absolute top-[25%] left-[48%] lg:left-[32%] rotate-[45deg] "
          color={"white"}
        />

        {/* Team Member Cards */}
        {teamData.map((member, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-2xl ${member.position}`}
          >
            <FadingImage
              images={member.images}
              currentIndex={currentIndices[index]}
              alt={member.alt}
            />
            {member.sticker && (
              <Popup
                className={`absolute ${member.stickerPosition}  transform  drop-shadow-lg z-[70]`}
              >
                <img
                  loading="lazy"
                  src={member.sticker}
                  alt="Sticker"
                  className={`w-full h-full`}
                />
              </Popup>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
