import React from "react";

const AboutPage = () => {
  return (
    <>
      {/* About Page Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "#F5F0E8",
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* About Page Content */}
      <div
        className="absolute inset-0 w-full h-full overflow-y-auto"
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
        }}
      >
        <div
          className="mx-auto"
          style={{
            maxWidth: "900px",
            padding: "0 40px",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#5C4D3C",
                marginBottom: "20px",
                letterSpacing: "1px",
              }}
            >
              About Gaijin
            </h1>
            <p
              style={{
                fontSize: "20px",
                color: "#8B7355",
                lineHeight: "1.8",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Experience the essence of Japanese culture through authentic
              cuisine and mindful presentation.
            </p>
          </div>

          {/* Story Section */}
          <div
            style={{
              backgroundColor: "rgba(228, 220, 202, 0.5)",
              padding: "40px",
              borderRadius: "20px",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#5C4D3C",
                marginBottom: "20px",
              }}
            >
              Our Story
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#5C4D3C",
                lineHeight: "1.8",
                marginBottom: "16px",
              }}
            >
              Founded with a deep respect for Japanese culinary traditions,
              Gaijin brings authentic flavors and cultural authenticity to every
              dish we serve. Our name, meaning "foreigner" in Japanese,
              represents our journey of embracing and honoring a culture with
              humility and reverence.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#5C4D3C",
                lineHeight: "1.8",
              }}
            >
              Every ingredient is carefully selected, every technique
              meticulously practiced, and every presentation thoughtfully
              crafted to deliver an authentic Japanese dining experience.
            </p>
          </div>

          {/* Philosophy Section */}
          <div
            style={{
              backgroundColor: "rgba(228, 220, 202, 0.5)",
              padding: "40px",
              borderRadius: "20px",
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#5C4D3C",
                marginBottom: "20px",
              }}
            >
              Our Philosophy
            </h2>
            <div
              style={{
                display: "grid",
                gap: "20px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#8B7355",
                    marginBottom: "8px",
                  }}
                >
                  🌸 Cultural Authenticity
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#5C4D3C",
                    lineHeight: "1.6",
                  }}
                >
                  We honor Japanese traditions in every aspect, from cooking
                  techniques to presentation and service.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#8B7355",
                    marginBottom: "8px",
                  }}
                >
                  🍃 Quality Ingredients
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#5C4D3C",
                    lineHeight: "1.6",
                  }}
                >
                  Only the finest, freshest ingredients make it to your plate,
                  sourced with care and respect.
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#8B7355",
                    marginBottom: "8px",
                  }}
                >
                  🎎 Mindful Experience
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#5C4D3C",
                    lineHeight: "1.6",
                  }}
                >
                  Every visit is designed to be a moment of tranquility and
                  appreciation for Japanese culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
