import React, { useEffect, useState } from "react";
import Waves from "./Waves/waves";

const HomePage = () => {
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
        {/* Layer 0: Background Color - Slowest parallax */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: "#E4DCCA",
            width: "100vw",
            height: "100vh",
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Waves Component - Subtle parallax */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            width: "100vw",
            height: "100vh",
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Waves
            lineColor="#C9C0A9"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.04}
            waveSpeedY={0.04}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={10}
            yGap={10}
          />
        </div>

        {/* Layer 1: First SVG - Medium parallax */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="/home/layer1.svg"
            alt="Layer 1"
            className="w-full h-full object-cover"
            style={{ width: "100vw", height: "100vh" }}
          />
        </div>

        {/* Layer 2: Second SVG - Faster parallax */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.6}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="/home/layer2.svg"
            alt="Layer 2"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>

        {/* Hero Text Overlay - Fastest parallax for foreground feel */}
        <div
          className="relative inset-0 w-full h-full pointer-events-none z-40 flex flex-col justify-end text-center"
          style={{
            transform: `translateY(${scrollY * 0.8}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <p
            className="font-heading text-kushi-blue px-8 pb-12 sm:px-12 sm:pb-16 lg:text-5xl text-3xl leading-relaxed tracking-wide font-bold mb-40"
            style={{
              // marginLeft: "10%",
              // marginRight: "10%",
              // marginBottom: "7%",
              //   marginBottom: "2%",
            }}
          >
            {/* Rooted in tradition. Inspired by seasons. <br /> */}
            Japan Through Our Lens.
          </p>
        </div>
      </div>

      {/* Scrollable Content Section - Second viewport */}
      <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-2xl">Something - This is the scrollable section!</p>
      </div>
    </>
  );
};

export default HomePage;
