import { useEffect, useRef, useState } from "react";

const CLICK_SELECTOR =
  "a, button, [role='button'], input[type='submit'], input[type='button'], [data-cursor-click]";

const ClickCursor = () => {
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div ref={cursorRef} className={`click-cursor ${visible ? "is-visible" : ""}`}>
      <span className="click-cursor__pill">click</span>
      <img className="click-cursor__icon" src="/cursor.svg" alt="" aria-hidden="true" />
    </div>
  );
};

export default ClickCursor;
