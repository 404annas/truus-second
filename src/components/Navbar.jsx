import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import star from "../assets/svgs/star.svg";
import qrCode from "../assets/svgs/qr-code.svg";
import twoLines from "../assets/svgs/two-lines.svg";
import logo2 from "../assets/images/logo2.png";

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
  const [whatsappHover, setWhatsappHover] = useState(false);
  const [navTheme, setNavTheme] = useState("dark");
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1280 : true,
  );

  const workRef = useRef(null);
  const whatsappRef = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDesktop) return;

      if (workRef.current && !workRef.current.contains(event.target)) {
        setHover(false);
      }

      if (whatsappRef.current && !whatsappRef.current.contains(event.target)) {
        setWhatsappHover(false);
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

    if (nextTheme && nextTheme !== navTheme) {
      setNavTheme(nextTheme);
    }
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

  const baseTextColor = navTheme === "dark" ? "text-white" : "text-black";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-8 -mt-20">
      <div className="w-full max-w-6xl mx-auto px-8 xl:px-0">
        <div className="flex justify-between items-center">
          <div
            ref={workRef}
            className="relative cursor-pointer work-container group"
            onMouseEnter={isDesktop ? () => setHover(true) : undefined}
            onMouseLeave={isDesktop ? () => setHover(false) : undefined}
            onClick={!isDesktop ? () => setHover((prev) => !prev) : undefined}
            data-cursor-click
          >
            <img
              className="absolute -left-3 -top-1 z-40 w-12 h-12 md:w-14 md:h-14 xl:w-12 xl:h-12 transition-all duration-300 ease-in-out group-hover:rotate-180"
              src={star}
              alt=""
            />
            <span
              className={`${hover ? "text-black" : baseTextColor} z-50 relative font-extrabold max-md:text-3xl max-xl:text-4xl transition-all duration-200 ease-in-out text-3xl epilogue`}
            >
              work
            </span>
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
                    exit={{ y: 0 }}
                    key={item.title}
                    className="flex items-center gap-4 cursor-pointer group"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <span className="text-sm text-purple-600 font-semibold">
                        {item.brand}
                      </span>
                      <p className="font-medium group-hover:underline">
                        {item.title}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
              <Link to="/work" onClick={() => scrollTo(0, 0)}>
                <motion.button
                  transition={{ duration: (3 + 0.2) / 7, ease: "easeInOut" }}
                  animate={{ y: hover ? 0 : 100 }}
                  exit={{ y: 0 }}
                  className="mt-6 w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-950 transition-colors duration-300 cursor-pointer"
                >
                  All our work
                </motion.button>
              </Link>
            </motion.div>
          </div>

          <Link to="/">
            <img
              className={`w-40 md:w-60 h-full ${navTheme === "dark" ? "logo-on-dark" : "logo-on-light"}`}
              src={logo2}
              alt="Truus"
            />
          </Link>

          <div
            ref={whatsappRef}
            className="relative cursor-pointer work-container group"
            onMouseEnter={isDesktop ? () => setWhatsappHover(true) : undefined}
            onMouseLeave={isDesktop ? () => setWhatsappHover(false) : undefined}
            onClick={
              !isDesktop ? () => setWhatsappHover((prev) => !prev) : undefined
            }
            data-cursor-click
          >
            <IoLogoWhatsapp
              className={`text-3xl md:text-4xl xl:text-3xl relative z-10 ${baseTextColor} group-hover:text-green-700 transition-all duration-200 ease-in-out`}
            />
            <motion.div
              animate={{
                height: whatsappHover ? "auto" : 0,
                width: whatsappHover ? "300px" : 0,
                opacity: whatsappHover ? 1 : 0,
              }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="bg-stone-100 rounded-2xl shadow-xl absolute -top-2 -right-5 sm:-right-5 overflow-hidden p-6 pt-10"
            >
              <motion.div
                animate={{ y: whatsappHover ? 0 : 100 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}
                exit={{ y: 0 }}
                className="flex flex-col justify-center text-black items-center gap-5 dm-sans"
              >
                <img src={qrCode} alt="WhatsApp QR" className="w-36" />
                <div className="text-center">
                  <p className="font-bold">WhatsApp Us</p>
                  <p className="text-sm sm:text-base">
                    Scan the QR code to chat with us via your smartphone.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-center">Chat via desktop</p>
                  <img src={twoLines} alt="" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
