import React from "react";
// import Threads from "../components/Threads";
import Waves from "../components/Waves/waves";

const IndexPage = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Layer 0: Background Color */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "#E4DCCA",
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* Layer 0: Background Image - Commented Out */}
      {/* <div className="absolute inset-0 w-full h-full">
        <img
          src="/home/background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div> */}
      {/* Threads Component - Wave Effect on Top */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Waves
          lineColor="#C9C0A9"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.02}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={10}
          yGap={10}
        />
      </div>

      {/* Layer 1: First SVG */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/home/layer1.svg"
          alt="Layer 1"
          className="w-full h-full object-cover"
          style={{ width: "100vw", height: "100vh" }}
        />
      </div>

      {/* Layer 2: Second SVG */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <img
          src="/home/layer2.svg"
          alt="Layer 2"
          className="w-1/2 h-1/2 object-contain"
        />
      </div>

      {/* Optional: Content overlay area for future text/navigation */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          {/* Future content can go here - restaurant name, navigation, etc. */}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Gaijin - Authentic Japanese Cuisine</title>
    <meta
      name="description"
      content="Experience authentic Japanese cuisine with cultural authenticity and modern presentation"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);
