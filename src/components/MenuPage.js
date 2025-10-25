import React, { useEffect, useState } from "react";

const MenuPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section Container - Takes up first viewport */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Image Background & Overlay - Static (no parallax) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/menu/bg-img.jpg"
            alt="Menu Background"
            className="absolute inset-0 w-full h-full object-cover z-[1]"
          />
          {/* Black Gradient Overlay */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-zen-shadow/100 via-black/70 to-black/0" />
        </div>

        {/* Content with parallax */}
        <div
          className="absolute inset-0 flex flex-col justify-between items-center z-[3]"
          style={{
            padding: "4rem",
            transform: `translateY(${scrollY * 0.8}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Top Spacer */}
          <div />

          {/* Center - Menu Heading */}
          <h1
            className="font-heading text-zen-light text-5xl font-bold tracking-wider text-center m-0"
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
            }}
          >
            Our Menu
          </h1>

          {/* Bottom - One-liner text */}
          <p
            className="text-zen-light text-xl font-light tracking-wide text-center max-w-4xl leading-relaxed"
            style={{
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
            }}
          >
            Experience the authentic flavors of Japan, crafted with tradition
            and passion
          </p>

          {/* Scroll Down Button */}
          <button
            className="text-rabata-flame text-sm font-medium tracking-wider uppercase flex flex-col items-center gap-2 animate-bounce cursor-pointer bg-transparent border-none"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }}
            // style={{
            //   textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
            // }}
          >
            <span>Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Content Section - Second viewport */}
      <div className="relative w-full h-screen bg-zen-light flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-kushi-blue text-4xl font-bold mb-4">
            Menu Content Coming Soon
          </h2>
          <p className="text-sage text-xl">
            This is the scrollable section with parallax effect
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
