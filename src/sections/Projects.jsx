


//stickers
import stickerGoodVibes from '../assets/svgs/goodVibes.svg';
import stickerHands from '../assets/svgs/hands.svg';
import stickerHi from '../assets/svgs/hi.svg';
import stickerJoinClub from '../assets/svgs/joinTheClub.svg';
import stickerLetsGo from '../assets/svgs/letsGo.svg';
import circle from '../assets/svgs/circle.svg';
import greenDoodle from '../assets/svgs/greenDoodle.svg';
import blueDoodle from '../assets/svgs/blue-doodle.svg';
import smileySticker from '../assets/svgs/smile.svg';

import { useEffect, useRef, useState } from 'react';
import AnimatedSvgPath from '../SvgComponents/AnimatedSvgPath';
import { Carousel_002 } from '../components/Carosel_002';
import Twolines from '../SvgComponents/Twolines';

const Projects = () => {
    const cursorRef = useRef(null);
    const [cursorVisible, setCursorVisible] = useState(false);
    const cursorActiveRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => setCursorVisible(false);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCursorMove = (event) => {
        if (!cursorRef.current) return;
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;

        const target = document.elementFromPoint(event.clientX, event.clientY);
        const isOverCard = Boolean(target?.closest(".swiper-slide"));
        if (cursorActiveRef.current !== isOverCard) {
            cursorActiveRef.current = isOverCard;
            setCursorVisible(isOverCard);
        }
    };

    const images = [
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68668b10ee9a57f9367edf77_Ferry.avif",
            alt: "Project image 1",
            title: "Ferry",
            subtitle: "netflix",
            sticker1: stickerGoodVibes,
            sticker2: "👍🏻 social"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68663be0740c68b890d87ff6_kfc-kipsalon-thumbnail.avif",
            alt: "Project image 2",
            title: "KFC",
            subtitle: "kipsalon",
            sticker1: stickerHi,
            sticker2: "✨ 360"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/6866999038def993f6901d98_c4b0a4b3-aa91-4239-85ab-0d24b205d802.avif",
            alt: "Project image 3",
            title: "Squid Game",
            subtitle: "netflix",
            sticker1: stickerLetsGo,
            sticker2: "👍🏻 social"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68668570b1d8971ed16d3beb_02.avif",
            alt: "Project image 4",
            title: "Prime",
            subtitle: "campaign",
            sticker1: smileySticker,
            sticker2: "✨ 360"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686b959b09dca3375fba5ba4_1.avif",
            alt: "Project image 5",
            title: "Hema",
            subtitle: "socials",
            sticker1: stickerJoinClub,
            sticker2: "👍🏻 social"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68668b10ee9a57f9367edf77_Ferry.avif",
            alt: "Project image 1",
            title: "Ferry",
            subtitle: "netflix",
            sticker1: stickerHands,
            sticker2: "✨ 360"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68663be0740c68b890d87ff6_kfc-kipsalon-thumbnail.avif",
            alt: "Project image 2",
            title: "KFC",
            subtitle: "kipsalon",
            sticker1: stickerGoodVibes,
            sticker2: "👍🏻 social"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/6866999038def993f6901d98_c4b0a4b3-aa91-4239-85ab-0d24b205d802.avif",
            alt: "Project image 3",
            title: "Squid Game",
            subtitle: "netflix",
            sticker1: stickerHi,
            sticker2: "✨ 360"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68668570b1d8971ed16d3beb_02.avif",
            alt: "Project image 4",
            title: "Prime",
            subtitle: "campaign",
            sticker1: stickerHands,
            sticker2: "👍🏻 social"
        },
        {
            src: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686b959b09dca3375fba5ba4_1.avif",
            alt: "Project image 5",
            title: "Hema",
            subtitle: "socials",
            sticker1: stickerLetsGo,
            sticker2: "✨ 360"
        },
    ];

    return (
        <section
            data-navbar-theme="dark"
            className="relative w-full bg-black text-white overflow-hidden flex flex-col justify-center p-6 md:p-8 min-h-screen"
            onMouseMove={handleCursorMove}
            onMouseLeave={() => {
                cursorActiveRef.current = false;
                setCursorVisible(false);
            }}
        >
            <div className="relative flex-1 flex justify-center items-center mt-10 project-cursor-zone">
                <div ref={cursorRef} className={`project-cursor ${cursorVisible ? 'is-visible' : ''}`}>
                    <span className="project-cursor__pill">drag</span>
                    <img className="project-cursor__icon" src="/cursor.svg" alt="" aria-hidden="true" />
                </div>
                <AnimatedSvgPath
                    color={"white"}
                    className="absolute left-0 sm:left-[25%] -top-2 lg:top-0  w-16 h-auto md:w-24 z-10 max-lg:rotate-12"
                    paths={[{ d: "M11.1056 107.429C11.1056 107.429 41.3921 75.9563 1.85536 45.3846C39.6893 67.1983 37.5729 21.5813 34.6647 13.925C40.0573 22.0799 72.2872 32.0642 78.2717 2.44878" }]}
                    viewBox={"0 0 80 109"}
                />
                <img src={greenDoodle} className="absolute right-0 sm:right-[20%] bottom-7 md:bottom-[2%] w-64 md:w-96 h-auto " />

                {/* The main container is now just for sizing and positioning */}
                <Carousel_002
                    images={images}
                    loop={true}
                    spaceBetween={"1000px"}
                    className="project-carousel"
                />
            </div>

            <div className='flex flex-col gap-2 items-center mb-6 mt-8'>

                <p className='text-center text-white epilogue text-lg md:text-xl '>view project</p>
                <Twolines className={"w-24"} color={"white"} />
            </div>
        </section>
    );
};

export default Projects;
