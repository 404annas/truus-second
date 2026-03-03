import React from 'react';
import { FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

// Import doodles and assets
import logo from '../assets/svgs/logo.svg';

// Import sticker assets
import stickerBam from '../assets/svgs/thumbs-up.svg';
import stickerSmiley from '../assets/svgs/smile.svg';
import stickerHeart from '../assets/svgs/heart.svg';
import stickerHands from '../assets/svgs/phone.svg';
import sticker100 from '../assets/svgs/heart2.svg';
import stickerCamera from '../assets/svgs/camera.svg';

const Footer = () => {
    return (
        // Responsive padding on the main footer element
        <footer data-navbar-theme="light" className="relative bg-[#F3EEE7] p-4 sm:p-6 md:p-8 h-screen">
            <div className="relative bg-[#4169E1] text-white rounded-3xl w-full h-full p-6 md:p-8 overflow-hidden flex flex-col">

                {/* --- Content Columns --- */}
                {/* Responsive grid gap and top margin */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-20">
                    {/* Column 1: Jobs */}
                    <div className="space-y-3">
                        <div className="bg-white/90 text-black text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
                            looking for a job?
                        </div>
                        {/* Responsive font size */}
                        <h3 className="text-2xl md:text-3xl font-extrabold">experienced camera/edit</h3>
                    </div>

                    {/* Column 2: Office */}
                    <div className="space-y-3">
                        <div className="bg-white/90 text-black text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
                            office
                        </div>
                        {/* Responsive font size */}
                        <h3 className="text-2xl md:text-3xl font-extrabold">papaverhof 21 <br /> 1032 LX amsterdam</h3>
                        <a href="#" className="inline-block text-lg underline underline-offset-4 decoration-2">
                            Google Maps
                        </a>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-3">
                        <div className="bg-white/90 text-black text-sm font-semibold px-4 py-1.5 rounded-full w-fit">
                            contact
                        </div>
                        {/* Responsive font size */}
                        <h3 className="text-2xl md:text-3xl font-extrabold">
                            hello@truus.co <br />
                            <a href="#" className="underline underline-offset-4">send us a whatsapp*</a>
                        </h3>
                        <p className="text-xs text-white/70">*we're millennials and gen-z; please do not call us.</p>
                        <div className="flex items-center gap-4 pt-2">
                            <a href="#" aria-label="LinkedIn"><FaLinkedin size={28} /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram size={28} /></a>
                            <a href="#" aria-label="TikTok"><FaTiktok size={28} /></a>
                        </div>
                    </div>
                </div>

                {/* --- Spacer to push the wavy shape to the bottom --- */}
                <div className="flex-grow"></div>

                {/* --- Wavy Shape & Stickers --- */}
                {/* Responsive height for the container */}
                <div className="relative -mb-6 md:-mb-8 -mx-6 md:-mx-8 w-auto h-56 sm:h-64 md:h-72 z-10">
                    <img src={logo} className="absolute bottom-0 left-0 w-full object-obtain md:object-cover h-full" alt="Wavy background shape" />

                    {/* --- Responsive Stickers --- */}
                    {/* Each sticker has mobile-first styles for size and position, with `md:` prefixes for the original desktop styles. */}
                    <img src={stickerBam} alt="Bam sticker" className="absolute bottom-10 left-[2%] w-16 transform -rotate-12 md:bottom-16 md:left-[5%] md:w-24" />
                    <img src={stickerSmiley} alt="Smiley sticker" className="absolute top-4 left-[25%] w-16 sm:w-18 md:top-10 md:left-[20%] md:w-20" />
                    <img src={stickerHeart} alt="Heart sticker" className="absolute bottom-12 left-[40%] w-16 sm:w-18 md:bottom-16 md:left-[35%] md:w-20" />
                    <img src={stickerHands} alt="Hands sticker" className="absolute top-2 left-[55%] w-16 transform rotate-12 sm:w-18 md:top-7 md:left-[40%] md:w-20" />
                    <img src={sticker100} alt="100 sticker" className="absolute top-4 left-[70%] w-16 transform -rotate-12 sm:w-20 md:bottom-20 md:left-[55%] md:w-24" />
                    <img src={stickerCamera} alt="Camera sticker" className="absolute bottom-10 right-[2%] w-20 sm:right-[5%] md:bottom-16 md:left-[80%] md:right-auto md:w-24 drop-shadow-[0_0_3px_rgba(255,255,255,0.7)]" />
                </div>

                {/* --- Credits Button --- */}
                {/* Responsive positioning */}
                <div title='Brian' className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-black text-white text-sm font-semibold px-4 py-1.5 rounded-full z-20">
                    credits
                </div>
            </div>
            <h3 className="md:text-lg text-center py-5">Developed By Techxudo</h3>

        </footer>
    );
};

export default Footer;
