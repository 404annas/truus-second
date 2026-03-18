import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const pulseTransition = {
  duration: 2.4,
  repeat: Infinity,
  ease: "easeInOut",
};

const sweepTransition = {
  duration: 1.8,
  repeat: Infinity,
  ease: "easeInOut",
};

const PreLoader = ({ isVisible }) => {
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="site-preloader"
          className="fixed inset-0 z-[9999] overflow-hidden bg-gradient-to-r from-[#011625] to-[#014172]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
        >
          <div className="absolute inset-0">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
              animate={{ scale: [0.92, 1.08, 0.95], opacity: [0.18, 0.35, 0.22] }}
              transition={pulseTransition}
            />
            <motion.div
              className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"
              animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-12 bottom-12 h-72 w-72 rounded-full bg-blue-200/10 blur-3xl"
              animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative flex h-full flex-col items-center justify-center px-6">
            <div className="relative flex items-center justify-center">
              <motion.div
                className="absolute h-36 w-36 rounded-full border border-white/15"
                animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.12, 0.45] }}
                transition={pulseTransition}
              />
              <motion.div
                className="absolute h-52 w-52 rounded-full border border-white/8"
                animate={{ scale: [0.94, 1.08, 0.94], rotate: [0, 90, 180] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="rounded-[2rem] border border-white/20 bg-white/8 px-8 py-7 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.28)]"
                initial={{ y: 16, opacity: 0.7, scale: 0.96 }}
                animate={{ y: [0, -6, 0], opacity: 1, scale: 1 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.img
                  src="/synclogo2.svg"
                  alt="Sync Events"
                  className="w-44 sm:w-56"
                  animate={{ filter: ["drop-shadow(0 0 0 rgba(255,255,255,0.1))", "drop-shadow(0 0 18px rgba(255,255,255,0.28))", "drop-shadow(0 0 0 rgba(255,255,255,0.1))"] }}
                  transition={pulseTransition}
                />
              </motion.div>
            </div>

            <motion.p
              className="shadow-font mt-10 text-center text-sm font-semibold uppercase text-white/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Loading the experience
            </motion.p>

            <div className="mt-5 h-[3px] w-52 overflow-hidden rounded-full bg-white/15">
              <motion.div
                className="h-full w-24 rounded-full bg-white"
                animate={{ x: [-96, 208, -96] }}
                transition={sweepTransition}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PreLoader;
