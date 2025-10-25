import React, { useState } from "react";
import GlassSurface from "../components/GlassSurface/GlassSurface";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import MenuPage from "../components/MenuPage";
import { colors } from "../styles/colors";

const IndexPage = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <main className="relative w-full min-h-screen">
      {/* Conditionally Render Page Components */}
      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "menu" && <MenuPage />}

      {/* Glass Navigation Bar - Fixed at Top */}
      <nav
        className="fixed left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        style={{ top: "1.3rem" }}
      >
        <GlassSurface
          width="auto"
          height={60}
          borderRadius={50}
          brightness={50}
          opacity={0.93}
          blur={11}
          className="px-8"
          saturation={1}
          borderWidth={0.07}
          displace={0.5}
          distortionScale={-180}
          redOffset={0}
          greenOffset={0}
          blueOffset={0}
          backgroundOpacity={0.3}
        >
          <div
            className="flex items-center h-full "
          >
            <button
              onClick={() => setCurrentPage("home")}
              className="bg-transparent border-none text-[1.3rem] cursor-pointer px-4 py-2 transition-all duration-300 ease-in-out tracking-wide"
              style={{
                color:
                  currentPage === "home"
                    ? colors.rabataFlame
                    : colors.kushiBlue,
                fontWeight: "400",
                fontFamily:
                  "'JapaneseStyle', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.rabataFlame)}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  currentPage === "home"
                    ? colors.rabataFlame
                    : colors.kushiBlue)
              }
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="bg-transparent border-none text-[1.3rem] cursor-pointer px-4 py-2 transition-all duration-300 ease-in-out tracking-wide"
              style={{
                color:
                  currentPage === "about"
                    ? colors.rabataFlame
                    : colors.kushiBlue,
                fontWeight: "400",
                fontFamily:
                  "'JapaneseStyle', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.rabataFlame)}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  currentPage === "about"
                    ? colors.rabataFlame
                    : colors.kushiBlue)
              }
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage("menu")}
              className="bg-transparent border-none text-[1.3rem] cursor-pointer px-4 py-2 transition-all duration-300 ease-in-out tracking-wide"
              style={{
                color:
                  currentPage === "menu"
                    ? colors.rabataFlame
                    : colors.kushiBlue,
                fontWeight: "400",
                fontFamily:
                  "'JapaneseStyle', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
              onMouseEnter={(e) => (e.target.style.color = colors.rabataFlame)}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  currentPage === "menu"
                    ? colors.rabataFlame
                    : colors.kushiBlue)
              }
            >
              Menu
            </button>
          </div>
        </GlassSurface>
      </nav>
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
