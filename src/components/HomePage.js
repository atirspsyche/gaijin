import React, { useEffect, useState } from "react";
import Waves from "./Waves/waves";
import Stack from "./StackCard/StackCard";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
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
          <p className="font-heading text-kushiBlue px-6 pb-12 sm:px-6 sm:pb-16 lg:text-5xl text-6xl leading-tight tracking-wide mb-3">
            Japan through our lens.
          </p>
        </div>
      </div>

      {/* Scrollable Content Section - Second viewport */}
      <div className="relative w-full h-screen bg-kushiBlue flex flex-col overflow-hidden">
        {/* Background Image Layer with parallax */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{
            transform: `translateY(${(scrollY - (typeof window !== "undefined" ? window.innerHeight : 0)) * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src="/home/layer1.svg"
            alt="Layer 1"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Content Container - Card Stack and Text with parallax */}
        <div
          className="flex flex-col md:flex-row z-20"
          style={{
            height: "calc(100vh - 100px)",
            transform: `translateY(${(scrollY - (typeof window !== "undefined" ? window.innerHeight : 0)) * 0.15}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Card Stack Section */}
          <div className="flex items-start justify-center lg:justify-center lg:items-center w-full md:w-1/2 h-[65vh] md:h-full order-2 md:order-1 pr-5">
            <Stack
              randomRotation={false}
              sensitivity={300}
              sendToBackOnClick={false}
              cardDimensions={
                typeof window !== "undefined" && window.innerWidth < 768
                  ? { width: "80vw", height: "40vh" }
                  : { width: "30vw", height: "50vh" }
              }
              cardsData={images}
            />
          </div>
          {/* Text Section */}
          <div className="flex items-center justify-center w-full md:w-1/2 h-[35vh] md:h-full order-1 md:order-2">
            <div className="px-8 py-4 text-center md:text-left">
              <p className="font-heading text-zenLight text-2xl md:text-4xl mb-4 leading-tight">
                We capture the essence of Japan, one frame at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Button at Bottom - Fixed height */}
        <div className="relative z-20 flex justify-center items-start" style={{ height: "100px" }}>
          <button className="bg-rabataFlame hover:bg-reishyRed text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg tracking-wide">
            Explore Our Story
          </button>
        </div>
      </div>

      {/* Third viewport - Pinned section with rotating vinyl and changing text */}
      {/* Container for pinned effect - takes 4x viewport height for scrolling */}
      <div className="relative w-full" style={{ height: "400vh" }}>
        {/* Sticky/Fixed viewport */}
        <div className="sticky top-0 w-full h-screen bg-background overflow-hidden z-30">
          {/* Background Layer - layer1.svg with parallax */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            style={{
              transform: `translateY(${(scrollY - (typeof window !== "undefined" ? window.innerHeight : 0) * 2) * 0.1}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="/home/layer1.svg"
              alt="Background Layer"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Vinyl image - Rotates and has parallax movement */}
          <div 
            className="absolute top-0 right-0 w-[60%] md:w-[40%] z-10"
            style={{
              transform: `translate(50%, ${(scrollY - (typeof window !== "undefined" ? window.innerHeight : 0) * 2) * 0.05}px) rotate(${(scrollY - (typeof window !== "undefined" ? window.innerHeight : 0) * 2) * 0.15}deg)`,
              transition: "transform 0.05s linear",
            }}
          >
            <img
              src="/home/vinyl-full.png"
              alt="Vinyl"
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))",
              }}
            />
          </div>

          {/* Calculate scroll progress for this section */}
          {(() => {
            const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
            const sectionStart = windowHeight * 2;
            const sectionScroll = scrollY - sectionStart;
            const sectionHeight = windowHeight * 4;
            const progress = Math.max(0, Math.min(1, sectionScroll / sectionHeight));
            
            // Each text gets more space - transitions happen at 0.25, 0.5, 0.75
            let textIndex = 0;
            let textProgress = 0;
            
            if (progress < 0.3) {
              textIndex = 0;
              textProgress = 0;
            } else if (progress < 0.4) {
              textIndex = 0;
              textProgress = (progress - 0.3) / 0.1; // Transition from text 1 to 2
            } else if (progress < 0.65) {
              textIndex = 1;
              textProgress = 0;
            } else if (progress < 0.75) {
              textIndex = 1;
              textProgress = (progress - 0.65) / 0.1; // Transition from text 2 to 3
            } else {
              textIndex = 2;
              textProgress = 0;
            }

            return (
              <>
                {/* Text Section 1 */}
                <div 
                  className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl z-20"
                  style={{
                    opacity: textIndex === 0 ? 1 - textProgress : 0,
                    transform: `translateY(${textIndex === 0 ? textProgress * -80 : -80}px)`,
                    transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
                  }}
                >
                  <h2 className="font-heading text-kushiBlue text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Experience the Sound of Japan
                  </h2>
                  <p className="text-sage text-lg md:text-xl leading-relaxed">
                    Discover our curated collection of traditional and modern Japanese music.
                  </p>
                </div>

                {/* Text Section 2 */}
                <div 
                  className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl z-20"
                  style={{
                    opacity: textIndex === 1 ? 1 - textProgress : textIndex === 0 ? textProgress : 0,
                    transform: `translateY(${textIndex === 1 ? textProgress * -80 : textIndex === 0 ? (1 - textProgress) * 80 : textIndex === 2 ? -80 : 80}px)`,
                    transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
                  }}
                >
                  <h2 className="font-heading text-kushiBlue text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Authentic Japanese Cuisine
                  </h2>
                  <p className="text-sage text-lg md:text-xl leading-relaxed">
                    Crafted with tradition, served with passion. Every dish tells a story.
                  </p>
                </div>

                {/* Text Section 3 */}
                <div 
                  className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl z-20"
                  style={{
                    opacity: textIndex === 2 ? 1 : textIndex === 1 ? textProgress : 0,
                    transform: `translateY(${textIndex === 2 ? 0 : textIndex === 1 ? (1 - textProgress) * 80 : 80}px)`,
                    transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
                  }}
                >
                  <h2 className="font-heading text-kushiBlue text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    A Journey Through Culture
                  </h2>
                  <p className="text-sage text-lg md:text-xl leading-relaxed">
                    Where every moment is an immersion into the beauty of Japanese heritage.
                  </p>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </>
  );
};

export default HomePage;
