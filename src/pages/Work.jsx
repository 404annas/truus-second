import React from "react";
import WorkCards from "../components/WorkCards";
import arrowDoodle from "../assets/svgs/arrow-d.svg";

import event1 from "../assets/images/event1.jpeg"
import event2 from "../assets/images/event2.jpeg"

const featuredCards = [
  {
    src: event1,
    brand: "douwe egberts",
    tag: "social",
    title: "feestje bouwe?",
    rotation: -3,
    position: "lg:-translate-y-4",
    z: "z-20",
  },
  {
    src: event2,
    brand: "hema",
    tag: "360",
    title: "skibidi school",
    rotation: 5,
    position: "lg:translate-y-2",
    z: "z-30",
  },
  {
    src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686b959b09dca3375fba5ba4_1.avif",
    brand: "hema",
    tag: "social",
    title: "hema socials",
    rotation: -3,
    position: "lg:-translate-y-3",
    z: "z-20",
  },
];

const moreCards = [
  {
    src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68668b10ee9a57f9367edf77_Ferry.avif",
    brand: "netflix",
    tag: "video",
    title: "city nights",
    rotation: 3,
    position: "",
    z: "z-20",
  },
  {
    src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/6866999038def993f6901d98_c4b0a4b3-aa91-4239-85ab-0d24b205d802.avif",
    brand: "kfc",
    tag: "design",
    title: "midnight bites",
    rotation: -5,
    position: "",
    z: "z-20",
  },
  {
    src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68668570b1d8971ed16d3beb_02.avif",
    brand: "prime",
    tag: "web",
    title: "brand splash",
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
