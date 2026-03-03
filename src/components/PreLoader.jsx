// src/components/InitialLoader.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/svgs/logo.svg";
const InitialLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 3000); // 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-[999] bg-[#4B69F0] flex items-center justify-center flex-col gap-1
                     ${isVisible ? "h-screen" : "h-0"} transition-all duration-1000 ease-in-out overflow-hidden`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{
            rotate: [0, -7, 7, -7, 7, 0], // jiggle
          }}
          exit={{
            rotate: -20,
            opacity: 0,
            scale: 0.8,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-3xl md:text-5xl font-bold flex justify-center items-center tracking-widest text-white"
        >
          <img className="w-56" src={"/synclogo2.svg"} alt="Logo" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InitialLoader;
