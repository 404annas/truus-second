import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Mail, X, Phone } from "lucide-react"; // Using Lucide for the toggle icons
import star from "../assets/svgs/star.svg";
import twoLines from "../assets/svgs/two-lines.svg";

const workItems = [
  {
    img: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/686b7e0ed3ab3045b28a2012_3.avif",
    brand: "hema",
    title: "hema socials",
  },
  {
    img: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/68663be0740c68b890d87ff6_kfc-kipsalon-thumbnail.avif",
    brand: "kfc",
    title: "kipsalon",
  },
  {
    img: "https://cdn.prod.website-files.com/683863cbe1f5a81b667b9939/6866999038def993f6901d98_c4b0a4b3-aa91-4239-85ab-0d24b205d802.avif",
    brand: "netflix",
    title: "squid game",
  },
];

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false); // New state for floating button
  const [navTheme, setNavTheme] = useState("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1280 : true
  );

  const workRef = useRef(null);
  const { pathname } = useLocation();

  // Floating Social Icons Configuration
  const socialIcons = [
    { id: 1, icon: <FaInstagram size={18} />, x: 25, y: -60, delay: 0.05 },
    { id: 2, icon: <FaLinkedinIn size={18} />, x: -30, y: -60, delay: 0.1 },
    { id: 3, icon: <IoLogoWhatsapp size={18} />, x: -65, y: -20, delay: 0.15 },
    { id: 4, icon: <Mail size={18} />, x: -55, y: 30, delay: 0.2 },
  ];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDesktop) return;
      if (workRef.current && !workRef.current.contains(event.target)) {
        setHover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktop]);

  const updateNavTheme = useCallback(() => {
    const sections = document.querySelectorAll("[data-navbar-theme]");
    if (!sections.length) return;
    let nextTheme = navTheme;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const anchor = 120;
      if (rect.top <= anchor && rect.bottom >= anchor) {
        nextTheme = section.dataset.navbarTheme;
      }
    });
    if (nextTheme && nextTheme !== navTheme) setNavTheme(nextTheme);
  }, [navTheme]);

  useEffect(() => {
    updateNavTheme();
    window.addEventListener("scroll", updateNavTheme, { passive: true });
    window.addEventListener("resize", updateNavTheme);
    return () => {
      window.removeEventListener("scroll", updateNavTheme);
      window.removeEventListener("resize", updateNavTheme);
    };
  }, [pathname, updateNavTheme]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseTextColor = navTheme === "dark" ? "text-white" : "text-black";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-6 -mt-20">
        <div className="w-full max-w-6xl mx-auto px-8 xl:px-0">
          <div className="flex justify-between items-center">
            
            {/* LEFT: EVENTS / WORK DROPDOWN */}
            <div
              ref={workRef}
              className="relative cursor-pointer work-container group"
              onMouseEnter={isDesktop ? () => setHover(true) : undefined}
              onMouseLeave={isDesktop ? () => setHover(false) : undefined}
              onClick={!isDesktop ? () => setHover((prev) => !prev) : undefined}
            >
              <img
                className="absolute -left-3 -top-1 z-40 w-12 h-12 md:w-14 md:h-14 xl:w-12 xl:h-12 transition-all duration-300 ease-in-out group-hover:rotate-180"
                src={star}
                alt=""
              />
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className={`${hover ? "text-black" : baseTextColor} z-50 relative font-extrabold max-md:text-3xl max-xl:text-4xl transition-all duration-200 ease-in-out text-3xl epilogue`}
              >
                events
              </Link>
              <motion.div
                animate={{
                  height: hover ? "auto" : 0,
                  width: hover ? "300px" : 0,
                  opacity: hover ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-stone-100 rounded-2xl shadow-xl absolute -top-2 -left-5 sm:-left-5 overflow-hidden p-6 pt-10 z-30"
              >
                <ul className="space-y-4 mt-4">
                  {workItems.map((item, i) => (
                    <motion.li
                      animate={{ y: hover ? 0 : 100 }}
                      transition={{ duration: (i + 0.2) / 6, ease: "easeInOut" }}
                      key={item.title}
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                      <div>
                        <span className="text-sm text-purple-600 font-semibold">{item.brand}</span>
                        <p className="font-medium group-hover:underline text-black">{item.title}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <Link to="/work" onClick={() => window.scrollTo(0, 0)}>
                  <motion.button
                    animate={{ y: hover ? 0 : 100 }}
                    className="mt-6 w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-950 transition-colors duration-300 cursor-pointer"
                  >
                    All our work
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* CENTER: LOGO */}
            <Link to="/">
              <img
                className={`h-full transition-all duration-300 ease-in-out ${
                  isScrolled ? "w-28 md:w-44" : "w-40 md:w-60"
                } ${navTheme === "dark" ? "logo-on-dark" : "logo-on-light"}`}
                src="/synclogo2.svg"
                alt="Sync"
              />
            </Link>

            {/* RIGHT: EMPTY (Moved to Bottom) */}
            <div className="w-10 h-10"></div> 
          </div>
        </div>
      </header>

      {/* FLOATING SOCIAL SLIDING BUBBLES */}
      <div className="fixed bottom-5 sm:bottom-7 right-6 sm:right-7 z-[120] flex items-center justify-center">
        <AnimatePresence>
          {isSocialOpen &&
            socialIcons.map((item) => (
              <motion.a
                key={item.id}
                href="#"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{ x: item.x, y: item.y, opacity: 1, scale: 1 }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: isSocialOpen ? item.delay : 0,
                }}
                className="absolute w-11 h-11 bg-black rounded-full flex items-center justify-center text-white shadow-sm hover:scale-110"
              >
                {item.icon}
              </motion.a>
            ))}
        </AnimatePresence>

        {/* MAIN TOGGLE BUTTON */}
        <button
          onClick={() => setIsSocialOpen(!isSocialOpen)}
          className="relative z-[130] p-5 sm:p-6 rounded-full bg-stone-100 text-black flex items-center justify-center transition-transform duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg border border-stone-200"
        >
          <motion.div
            key={isSocialOpen ? "close" : "phone"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isSocialOpen ? <X size={22} /> : <Phone size={20} />}
          </motion.div>
        </button>
      </div>
    </>
  );
};

export default Navbar;