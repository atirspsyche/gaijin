import React from "react";

const MenuPage = () => {
  return (
    <>
      {/* Menu Page Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: "#F5F0E8",
          width: "100vw",
          height: "100vh",
        }}
      />

      {/* Menu Page Content */}
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
            maxWidth: "1000px",
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
              Our Menu
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
              Discover our carefully curated selection of traditional Japanese
              dishes, crafted with authenticity and care.
            </p>
          </div>

          {/* Menu Categories */}
          <div style={{ display: "grid", gap: "40px" }}>
            {/* Appetizers */}
            <div
              style={{
                backgroundColor: "rgba(228, 220, 202, 0.5)",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "#5C4D3C",
                  marginBottom: "24px",
                  borderBottom: "2px solid #C9C0A9",
                  paddingBottom: "10px",
                }}
              >
                前菜 Appetizers
              </h2>
              <div style={{ display: "grid", gap: "20px" }}>
                <MenuItem
                  name="Edamame"
                  description="Steamed young soybeans with sea salt"
                  price="$6"
                />
                <MenuItem
                  name="Gyoza"
                  description="Pan-fried dumplings with pork and vegetables"
                  price="$8"
                />
                <MenuItem
                  name="Agedashi Tofu"
                  description="Lightly fried tofu in dashi broth"
                  price="$7"
                />
              </div>
            </div>

            {/* Sushi & Sashimi */}
            <div
              style={{
                backgroundColor: "rgba(228, 220, 202, 0.5)",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "#5C4D3C",
                  marginBottom: "24px",
                  borderBottom: "2px solid #C9C0A9",
                  paddingBottom: "10px",
                }}
              >
                寿司 Sushi & Sashimi
              </h2>
              <div style={{ display: "grid", gap: "20px" }}>
                <MenuItem
                  name="Chef's Omakase"
                  description="Selection of seasonal sushi and sashimi"
                  price="$48"
                />
                <MenuItem
                  name="Tuna Sashimi"
                  description="Fresh bluefin tuna, thinly sliced"
                  price="$22"
                />
                <MenuItem
                  name="Rainbow Roll"
                  description="California roll topped with assorted fish"
                  price="$18"
                />
              </div>
            </div>

            {/* Main Dishes */}
            <div
              style={{
                backgroundColor: "rgba(228, 220, 202, 0.5)",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "#5C4D3C",
                  marginBottom: "24px",
                  borderBottom: "2px solid #C9C0A9",
                  paddingBottom: "10px",
                }}
              >
                主菜 Main Dishes
              </h2>
              <div style={{ display: "grid", gap: "20px" }}>
                <MenuItem
                  name="Tonkatsu"
                  description="Breaded pork cutlet with tonkatsu sauce"
                  price="$24"
                />
                <MenuItem
                  name="Teriyaki Salmon"
                  description="Grilled salmon with house teriyaki glaze"
                  price="$26"
                />
                <MenuItem
                  name="Wagyu Sukiyaki"
                  description="Premium beef hot pot with vegetables"
                  price="$38"
                />
              </div>
            </div>

            {/* Ramen & Noodles */}
            <div
              style={{
                backgroundColor: "rgba(228, 220, 202, 0.5)",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  color: "#5C4D3C",
                  marginBottom: "24px",
                  borderBottom: "2px solid #C9C0A9",
                  paddingBottom: "10px",
                }}
              >
                麺 Ramen & Noodles
              </h2>
              <div style={{ display: "grid", gap: "20px" }}>
                <MenuItem
                  name="Tonkotsu Ramen"
                  description="Rich pork bone broth with chashu pork"
                  price="$16"
                />
                <MenuItem
                  name="Vegetable Udon"
                  description="Thick wheat noodles with seasonal vegetables"
                  price="$14"
                />
                <MenuItem
                  name="Cold Soba"
                  description="Chilled buckwheat noodles with dipping sauce"
                  price="$15"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Menu Item Component
const MenuItem = ({ name, description, price }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "20px",
      }}
    >
      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#5C4D3C",
            marginBottom: "4px",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#8B7355",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#8B7355",
          whiteSpace: "nowrap",
        }}
      >
        {price}
      </div>
    </div>
  );
};

export default MenuPage;
