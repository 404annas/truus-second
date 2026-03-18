import React from "react";
import WorkCards from "../components/WorkCards";
import arrowDoodle from "../assets/svgs/arrow-d.svg";

import event1 from "../assets/images/event1.jpeg";
import event2 from "../assets/images/event2.jpeg";
import event3 from "../assets/images/poster.jpeg";
import event5 from "../assets/images/event5.jpg";
import event4 from "../assets/images/event4.jpg";
import event6 from "../assets/images/event6.jpg";

import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.MP4";
import video3 from "../assets/videos/video3.MP4";
import video4 from "../assets/videos/video4.mp4";

const featuredCards = [
  {
    type: "video",
    src: video1,
    brand: "Events",
    tag: "social",
    title: "Sync Events",
    rotation: 3,
    position: "lg:-translate-y-3",
    z: "z-20",
  },
  {
    type: "video",
    src: video3,
    poster: event1,
    hoverPlay: true,
    brand: "Port Grand",
    tag: "social",
    title: "HAVI",
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
  },
  {
    type: "video",
    src: video4,
    poster: event2,
    hoverPlay: true,
    brand: "Fam Fest",
    tag: "360",
    title: "AFUSIC",
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
  },
];

const moreCards = [
  {
    type: "video",
    src: video2,
    poster: event5,
    hoverPlay: true,
    brand: "ILMA",
    tag: "video",
    title: "ASIM AZHAR",
    rotation: 3,
    position: "",
    z: "z-20",
  },
  {
    src: event6,
    brand: "Event",
    tag: "ASIM AZHAR",
    title: "ASIM AZHAR",
    rotation: -5,
    position: "",
    z: "z-20",
  },
  {
    src: event3,
    brand: "Tour",
    tag: "web",
    title: "ASIM ALI TOUR",
    rotation: 2,
    position: "",
    z: "z-20",
  },
];

const Work = () => {
  return (
    <div data-navbar-theme="dark" className="relative bg-black text-white">
      <img
        src={arrowDoodle}
        alt=""
        className="pointer-events-none absolute right-6 top-10 w-16 md:w-24 rotate-12 animate-float"
      />
      <WorkCards
        title={
          <>
            let's take a look <br /> at some stuff!
          </>
        }
        cards={featuredCards}
        doodleSrc="/svg-image-18.svg"
      />
      <WorkCards
        title=""
        cards={moreCards}
        doodleSrc="/svg-image-19.svg"
        doodleClassName="absolute right-25 top-0 w-40 md:w-65 pointer-events-none"
      />
    </div>
  );
};

export default Work;
