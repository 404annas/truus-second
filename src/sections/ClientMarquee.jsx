// src/components/ClientsMarquee.jsx

import React, { useEffect, useState } from 'react';

// --- LOGO ASSETS ---
// Import your logo images. Make sure they are transparent PNGs or SVGs.
// import logoKfc from '../assets/logos/kfc.png';
// import logoHema from '../assets/logos/hema.png';
// import logoAnwb from '../assets/logos/anwb.png';
// import logoOxxio from '../assets/logos/oxxio.png';
// import logoNetflix from '../assets/logos/netflix.png';
// import logoSwapfiets from '../assets/logos/swapfiets.png';
// import logoGetir from '../assets/logos/getir.png';
// import logoAceTate from '../assets/logos/ace-tate.png';
import cloud from "../assets/svgs/cloud.svg"
import bts from "../assets/svgs/bts.svg"
import roundarrow from "../assets/svgs/roundarrow.svg"
import RoundedArrow from '../SvgComponents/RoundedArrow';
import LogoLoop from "../components/LogoLoop.jsx"
import Popup from '../SvgComponents/Popup.jsx';

// --- DATA FOR THE COLUMNS ---
const column1Logos = [
    { name: 'Ace & Tate', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc299e71b345ff0fd4429_ace_tate_kigi.svg", bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { name: 'KFC', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc2b720d4c815b09435c2_KFC_Logo.svg", bgColor: 'bg-red-500' },
    { name: 'ANWB', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc2a8f4b310a3d6a5ce7d_anwb_logo.svg", bgColor: 'bg-teal-600' },
    { name: 'Getir', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc3846484817fc9124f30_getir_logo.svg", bgColor: 'bg-purple-800' },
    { name: 'Ace & Tate', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc299e71b345ff0fd4429_ace_tate_kigi.svg", bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600' }, // Duplicated for seamless loop
];

const column2Logos = [
    { name: 'Swapfiets', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc2d7cace3b14a9d8aa44_swapfiets_logo.svg", bgColor: 'bg-pink-300' },
    { name: 'HEMA', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc2d117d329bcecd8377b_hema_logo.svg", bgColor: 'bg-red-700' },
    { name: 'OXXIO', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc2c07339dde8931c0c50_oxxio_logo.svg", bgColor: 'bg-blue-500' },
    { name: 'Netflix', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc2c7844be9421f0335c7_netflix_logo.svg", bgColor: 'bg-lime-200' },
    { name: 'Swapfiets', src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686bc2d7cace3b14a9d8aa44_swapfiets_logo.svg", bgColor: 'bg-pink-300' }, // Duplicated for seamless loop
];

// --- SVG DOODLE COMPONENT ---
const HandDoodle = () => (
    <div className="absolute left-1/4 top-3/4 z-20">
        {/* Hand Doodle */}
        <svg width="60" height="60" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -translate-x-1/2 -translate-y-1/2">
            <path d="M26.208 88.5C18.104 88.5 11.208 81.25 11.208 73C11.208 64.75 18.104 57.5 26.208 57.5C28.2293 57.5 30.1667 58.0208 31.875 58.8125C31.5625 58.0208 31.25 56.9792 31.25 55.75C31.25 51.5 34.6875 48 38.75 48H44.375C46.7187 48 48.75 46.0417 48.75 43.75V19.75C48.75 11.5 55.625 4.75 63.75 4.75C71.875 4.75 78.75 11.5 78.75 19.75V22.25C78.75 25.0625 76.5625 27.25 73.75 27.25C70.9375 27.25 68.75 25.0625 68.75 22.25V19.75C68.75 16.625 66.5625 14.25 63.75 14.25C60.9375 14.25 58.75 16.625 58.75 19.75V43.75C58.75 51.25 52.8125 57.5 45 57.5H38.75C34.6875 57.5 31.25 60.75 31.25 65.25C31.25 68.25 31.875 71 33.125 73.5C31.875 73.25 30.3125 73 29.0625 73C26.25 73 23.75 75.5 23.75 78.25C23.75 81 26.25 83.5 29.0625 83.5C30.3125 83.5 31.5625 83 32.8125 82.25C34.375 85.75 35.3125 88.5 40.3125 88.5H48.125C51.5625 88.5 53.75 85.5 53.75 82.25C53.75 79 51.5625 76 48.125 76H40.3125C39.0625 76 38.75 75.25 38.75 74.25C38.75 72.5 40.3125 70.75 41.875 69.25C44.6875 66.5 48.4375 65.25 52.5 65.25H58.75C60.625 65.25 62.1875 66.75 62.1875 68.5C62.1875 70.25 60.625 71.75 58.75 71.75H52.5C51.25 71.75 50 73 50 74.25C50 75.5 51.25 76.75 52.5 76.75H64.0625C67.5 76.75 69.6875 79.75 69.6875 83C69.6875 86.25 67.5 88.5 64.0625 88.5H26.208Z" fill="#FFA5B5" />
        </svg>
        {/* Arrow Doodle */}
        <svg width="150" height="100" viewBox="0 0 207 109" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2">
            <path d="M2.5 2.5C2.5 2.5 62.5 130.5 200 101.5L185.5 81.5" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
);


const ClientsMarquee = () => {
    // We duplicate the arrays to create the seamless loop effect
    const duplicatedCol1 = [...column1Logos, ...column1Logos];
    const duplicatedCol2 = [...column2Logos, ...column2Logos];

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

    return (
        <section data-navbar-theme="light" className="relative max-w-7xl lg:pr-10 mx-auto min-h-screen bg-[#F3EEE7] flex items-center overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full ">

                {/* --- Left Static Section --- */}
                <div className=" h-96 flex justify-center items-center overflow-visible epilogue font-extrabold">
                    {/* Blue Blob SVG */}
                    <img className='absolute w-96 h-96 top-[30%] lg:top-[50%] -translate-y-1/2 left-0' src={cloud} alt="" />

                    <div className="relative z-20 text-center lg:translate-x-20 perspective-dramatic transform-3d">
                        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
                            proud to have <br />
                            <b className="font-extrabold">worked</b><span className=' ml-2 lora font-light'>with:</span>
                        </h2>
                        <div className="absolute -bottom-[150%] lg:-bottom-[100%] right-20 lg:-rotate-12">

                            <Popup className='w-16 lg:w-20 z-10 relative -rotate-10'>
                                <img src={bts} className='w-full h-full' alt="" />
                            </Popup>
                            <RoundedArrow className='z-0  translate-x-9 rotate-[50deg] lg:rotate-[30deg] w-40 lg:w-60  lg:rotate-x-180 transform-3d perspective-midrange ' />
                        </div>

                    </div>

                </div>

                {/* --- Right Marquee Section --- */}
                <div className="relative  h-[500px] flex gap-4 md:gap-6 overflow-hidden mask-image-gradient max-lg:hidden ">
                    <div className='absolute top-0 h-24 w-full bg-gradient-to-b from-[#F3EEE7] to-transparent z-10'></div>
                    {/* Column 1 (Scrolling Up) */}
                    <div className=" flex flex-col gap-3  animate-[marquee-up_5s_linear_infinite]">
                        {duplicatedCol1.map((item, index) => (
                            <div key={`col1-${index}`} className={`w-40 h-40 md:w-48 md:h-48 rounded-xl flex items-center justify-center p-4 shadow-lg shrink-0 ${item.bgColor}`}>
                                <img src={item.src} alt={item.name} className=" h-full w-full  object-contain filter drop-shadow-lg" />
                            </div>
                        ))}
                    </div>

                    {/* Column 2 (Scrolling Down) */}
                    <div className=" flex flex-col gap-3 md:gap-4 animate-[marquee-down_5s_linear_infinite]">

                        {duplicatedCol2.map((item, index) => (
                            <div key={`col2-${index}`} className={`w-40 h-40 md:w-48 md:h-48 rounded-xl flex items-center justify-center p-4 shadow-lg shrink-0 ${item.bgColor}`}>
                                <img src={item.src} alt={item.name} className=" w-full h-full object-contain filter drop-shadow-lg" />
                            </div>
                        ))}
                    </div>
                    <div className='absolute bottom-0 h-24 w-full bg-gradient-to-t from-[#F3EEE7] to-transparent z-10'></div>

                </div>
                {!isDesktop &&
                    <div className=' w-full'>
                        <LogoLoop logos={column1Logos} logoHeight={isDesktop ? 230 : 100} className={"mt-24 lg:hidden"} />
                        <LogoLoop logos={column2Logos} logoHeight={isDesktop ? 230 : 100} direction={"right lg:hidden"} />
                    </div>}
            </div>
        </section>
    );
};

export default ClientsMarquee;
