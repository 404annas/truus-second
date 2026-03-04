import React, { useState, useRef, useLayoutEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';

import WorkDropdown from './WorkDropdown';
import WhatsappPopup from './WhatsappPopup';
// import syncLogo from '../assets/sync-logo.svg'; // Add your logo here

const Header = () => {
    const [isWorkOpen, setIsWorkOpen] = useState(false);
    const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);

    const workDropdownRef = useRef(null);
    const whatsappPopupRef = useRef(null);

    // GSAP animation for Work Dropdown
    useLayoutEffect(() => {
        if (isWorkOpen) {
            gsap.to(workDropdownRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        } else {
            gsap.to(workDropdownRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power2.in',
            });
        }
    }, [isWorkOpen]);

    // GSAP animation for WhatsApp Popup
    useLayoutEffect(() => {
        if (isWhatsappOpen) {
            gsap.to(whatsappPopupRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
            });
        } else {
            gsap.to(whatsappPopupRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: 'power2.in',
            });
        }
    }, [isWhatsappOpen]);

    return (
        <header className="fixed top-0 left-0 w-full p-6 text-black z-50">
            <div className="flex justify-between items-center">
                {/* Work Button and Dropdown */}
                <div
                    onMouseEnter={() => setIsWorkOpen(true)}
                    onMouseLeave={() => setIsWorkOpen(false)}
                    className="relative"
                >
                    <button className="font-serif text-2xl font-semibold">work</button>
                    <div
                        ref={workDropdownRef}
                        className="absolute top-full left-0 mt-2 opacity-0 -translate-y-5"
                    >
                        <WorkDropdown />
                    </div>
                </div>

                {/* Center Logo */}
                <div className="font-serif text-3xl font-medium">
                    {/* <img src={syncLogo} alt="Sync Logo" className="h-8" /> */}
                    sync
                </div>

                {/* WhatsApp Icon and Popup */}
                <div
                    onMouseEnter={() => setIsWhatsappOpen(true)}
                    onMouseLeave={() => setIsWhatsappOpen(false)}
                    className="relative"
                >
                    <button className="p-2 bg-white rounded-full">
                        <FaWhatsapp className="text-2xl text-green-500" />
                    </button>
                    <div
                        ref={whatsappPopupRef}
                        className="absolute top-full right-0 mt-2 opacity-0 -translate-y-5"
                    >
                        <WhatsappPopup />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
