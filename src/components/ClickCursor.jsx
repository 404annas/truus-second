import { useEffect, useRef, useState } from "react";

const CLICK_SELECTOR =
  "a, button, [role='button'], input[type='submit'], input[type='button'], [data-cursor-click]";

const ClickCursor = () => {
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 768 : true,
  );

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setVisible(false);
      return;
    }

    const handleMove = (event) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${event.clientX}px`;
      cursorRef.current.style.top = `${event.clientY}px`;

      const target = event.target;
      const isClickable = Boolean(target?.closest(CLICK_SELECTOR));
      setVisible(isClickable);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div ref={cursorRef} className={`click-cursor z-[999] ${visible ? "is-visible" : ""}`}>
      <span className="click-cursor__pill bg-[#015696] text-white z-[999]">click</span>
      <img className="click-cursor__icon" src="/cursor.svg" alt="" aria-hidden="true" />
    </div>
  );
};

export default ClickCursor;
