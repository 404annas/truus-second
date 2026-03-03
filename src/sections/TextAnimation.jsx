import { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import thumbsUp from "../assets/svgs/thumbs-up.svg"
import phone from "../assets/svgs/phone.svg"
import star from "../assets/svgs/star-arrow.svg"
import ArrowDown from '../SvgComponents/ArrowDown';
// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const TextAnimation = () => {
    const main = useRef(null);
    const textRef = useRef(null);
    const wordContainerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const split = new SplitText(textRef.current, { type: 'chars' });

            // Calculate responsive end value based on screen size
            const isMobile = window.innerWidth < 768;
            const endValue = isMobile ? '+=1500' : '+=3000';

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top top',
                    end: endValue,
                    pin: true,
                    scrub: 6
                }
            });

            // --- Animation logic remains UNCHANGED ---

            tl.from(split.chars,
                {
                    y: () => gsap.utils.random(-180, 180),
                    x: () => gsap.utils.random(0, 150),
                    rotation: () => gsap.utils.random(-50, 50),
                    ease: "power1.inOut",
                    duration: 0.9,
                    stagger: {
                        each: 0.3,
                        from: 'start'
                    }
                },
                0);

            tl.to(split.chars, {
                y: () => gsap.utils.random(-30, 30),
                ease: "power1.inOut",
                duration: 0.9,
                stagger: {
                    each: 0.3,
                    from: 'start'
                }
            }, "<0.5")

            tl.to(split.chars,
                {
                    y: 0,
                    x: 0,
                    rotation: 0,
                    ease: "power1.inOut",
                    duration: 0.9,
                    stagger: {
                        each: 0.3,
                        from: 'start'
                    }
                },
                "<0.5");

            tl.fromTo(
                wordContainerRef.current,
                { x: '63vw' },
                {
                    x: '-80%',
                    ease: 'none',
                    duration: 12
                },
                0
            );
            tl.fromTo(
                ".thumbs",
                { scale: 0.2 },
                { scale: 1.2, duration: 1.5, ease: "power2.out" },
                1.5
            );
            tl.fromTo(
                ".star",
                { scale: 0.2 },
                { scale: 1.2, duration: 1.5, ease: "power2.out" },
                "<3"
            );
            tl.fromTo(
                ".phone",
                { scale: 0.2 },
                { scale: 1.2, duration: 1.5, ease: "power2.out" },
                "<2.5"
            );

        }, main);

        return () => ctx.revert();
    }, []);

    return (
        // THE FIX: Added h-screen and overflow-hidden to create a stable container for GSAP to pin.
        <div ref={main} className="w-full overflow-hidden">
            <section data-navbar-theme="light" className="relative justify-center h-screen w-full flex flex-col p-6">

                <div className="flex items-center">
                    <div ref={wordContainerRef} className="whitespace-nowrap flex gap-4 items-end">
                        <h1 ref={textRef} className="text-5xl sm:text-6xl lg:text-9xl font-extrabold text-black epilogue relative">
                            Making Every Event Special.

                            <img
                                className="thumbs absolute left-1/3 w-12 h-12 md:w-20 md:h-20 -translate-y-28 md:-translate-y-40"
                                src={thumbsUp}
                                alt=""
                            />

                            <img className='star absolute left-2/3 w-12 h-12 md:w-20 md:h-20 -bottom-2 md:-bottom-5 translate-y-8 md:translate-y-10' src={star} alt="" />

                            <img className='phone absolute left-[90%] w-12 h-12 md:w-20 md:h-20 -top-2 md:-top-5' src={phone} alt="" />
                        </h1>

                        <div className='translate-y-8 md:translate-y-12'>
                            <ArrowDown className={"w-24 md:w-32"} color="#000" />
                        </div>
                    </div>
                </div>

                <p className="max-w-lg text-base md:text-xl mx-auto text-center text-black z-10 mt-16 md:mt-24 dm-sans">
                    We represent exceptional artists and produce unforgettable events across music, corporate, cultural, and private platforms.
                </p>
            </section>
        </div>
    );
};

export default TextAnimation;
