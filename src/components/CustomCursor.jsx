import React from "react";

export default function CustomCursor() {
  const cursorRef = React.useRef(null);
  const [isPointer, setIsPointer] = React.useState(false);

  React.useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;

      const clickable =
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.closest("[role='button']");

      setIsPointer(!!clickable);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] hidden -translate-x-1/2 -translate-y-1/2 md:block"
    >
      <div
        className={`relative flex items-center justify-center transition-all duration-150 ${
          isPointer ? "h-14 w-14" : "h-10 w-10"
        }`}
      >
        <div className="absolute h-full w-full rounded-full border border-white/80" />
        <div className="absolute h-[70%] w-[70%] rounded-full border border-white/45" />
        <div className="absolute h-[38%] w-[38%] rounded-full border border-white/30" />
        <div className="absolute h-full w-px bg-white/55" />
        <div className="absolute h-px w-full bg-white/55" />
        <div className="h-[5px] w-[5px] rounded-full bg-white" />
      </div>
    </div>
  );
}