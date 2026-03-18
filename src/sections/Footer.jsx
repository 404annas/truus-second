import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

// Import doodles and assets
import logo from "../assets/svgs/logo.svg";

// Import sticker assets
import stickerBam from "../assets/svgs/thumbs-up.svg";
import stickerSmiley from "../assets/svgs/smile.svg";
import stickerHeart from "../assets/svgs/heart.svg";
import stickerHands from "../assets/svgs/phone.svg";
import sticker100 from "../assets/svgs/heart2.svg";
import stickerCamera from "../assets/svgs/camera.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const openGmailCompose = (email) => {
    const width = 800;
    const height = 600;
    const left = Math.max(0, Math.round((window.innerWidth - width) / 2));
    const top = Math.max(0, Math.round((window.innerHeight - height) / 2));
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email,
    )}`;

    window.open(
      gmailUrl,
      "_blank",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`,
    );
  };

  return (
    // Responsive padding on the main footer element
    <footer
      data-navbar-theme="light"
      className="relative bg-[#015696] p-4 sm:p-6 md:p-8 h-screen"
    >
      <div className="relative bg-gradient-to-b from-[#002744] via-[#002744] to-[#015696] text-white rounded-3xl w-full h-full p-6 md:p-8 overflow-hidden flex flex-col">
        {/* --- Content Columns --- */}
        {/* Responsive grid gap and top margin */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-2 md:mt-6">
          {/* Column 1: Services */}
          <div className="space-y-3">
            <div className="bg-white/90 text-black text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
              services
            </div>
            {/* Responsive font size */}
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold man">
              music production <br />
              recording studio <br />
              mixing & mastering <br />
              music distribution <br />
              artist development <br />
              post production
            </h3>
          </div>

          {/* Column 2: Studio */}
          <div className="space-y-3">
            <div className="bg-white/90 text-black text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
              pages
            </div>
            {/* Responsive font size */}
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold man">
              our artsits <br />{" "}
              <Link to={"/work"} onClick={() => scrollTo(0, 0)}>
                our events
              </Link>
            </h3>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <div className="bg-white/90 text-black text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
              contact
            </div>
            {/* Responsive font size */}
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold man">
              <button
                type="button"
                onClick={() =>
                  openGmailCompose("m.osamakhan@thesyncevents.com")
                }
                className="underline underline-offset-4"
              >
                m.osamakhan@thesyncevents.com
              </button>
              <br />
              <button
                type="button"
                onClick={() => openGmailCompose("qasimazhar@thesyncevents.com")}
                className="underline underline-offset-4"
              >
                qasimazhar@thesyncevents.com
              </button>
              <br />
            </h3>
            <p className="text-xs text-white/70">
              we respond fast for tours, campaigns, and launches.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Whatsapp">
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://www.instagram.com/thesyncevents"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <p className="text-right pl-6 text-xs man">
                Developed By{" "}
                <a
                  className="font-semibold"
                  href="https://techxudo.com/"
                  target="_blank"
                >
                  Techxudo
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* --- Spacer to push the wavy shape to the bottom --- */}
        <div className="flex-grow"></div>

        {/* --- Wavy Shape & Stickers --- */}
        {/* Responsive height for the container */}
        <div className="relative -mb-6 md:-mb-8 -mx-6 md:-mx-8 w-auto h-54 sm:h-64 md:h-80 z-10">
          <img
            src={"/synclogo2.svg"}
            className="absolute bottom-0 left-0 w-full object-obtain md:object-cover h-full"
            alt="Wavy background shape"
          />

          {/* --- Responsive Stickers --- */}
          {/* Each sticker has mobile-first styles for size and position, with `md:` prefixes for the original desktop styles. */}
          <img
            src={stickerBam}
            alt="Bam sticker"
            className="hidden md:block absolute bottom-10 left-[2%] w-16 transform -rotate-12 md:bottom-16 md:left-[5%] md:w-24"
          />
          <img
            src={stickerSmiley}
            alt="Smiley sticker"
            className="hidden md:block absolute top-4 left-[25%] w-16 sm:w-18 md:top-10 md:left-[20%] md:w-20"
          />
          <img
            src={stickerHeart}
            alt="Heart sticker"
            className="hidden md:block absolute bottom-12 left-[40%] w-16 sm:w-18 md:bottom-16 md:left-[35%] md:w-20"
          />
          <img
            src={stickerHands}
            alt="Hands sticker"
            className="hidden md:block absolute top-2 left-[55%] w-16 transform rotate-12 sm:w-18 md:top-7 md:left-[40%] md:w-20"
          />
          <img
            src={sticker100}
            alt="100 sticker"
            className="hidden md:block absolute top-4 left-[70%] w-16 transform -rotate-12 sm:w-20 md:bottom-20 md:left-[55%] md:w-24"
          />
          <img
            src={stickerCamera}
            alt="Camera sticker"
            className="hidden md:block absolute bottom-10 right-[2%] w-20 sm:right-[5%] md:bottom-16 md:left-[80%] md:right-auto md:w-24 drop-shadow-[0_0_3px_rgba(255,255,255,0.7)]"
          />
        </div>
        {/* --- Credits Button --- */}
        {/* Responsive positioning */}
      </div>
      {/* <h3 className="md:text-lg text-center py-5">
        Developed By{" "}
        <a
          href="https://techxudo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Techxudo
        </a>
      </h3> */}
    </footer>
  );
};

export default Footer;
