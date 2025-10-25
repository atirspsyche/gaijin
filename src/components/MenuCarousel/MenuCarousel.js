import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import "./style.css";

const DEFAULT_MENU_ITEMS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop",
  },
];

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 20;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function MenuCarousel({
  items = DEFAULT_MENU_ITEMS,
  autoplay = false,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
}) {
  const [containerHeight, setContainerHeight] = useState(600); // Default height
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const itemWidth = containerHeight * 0.75; // Maintain aspect ratio
  const trackItemOffset = itemWidth + GAP;

  const containerRef = useRef(null);

  // Set container height on client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setContainerHeight(window.innerHeight * 0.6);
    }
  }, []);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          if (nextIndex >= items.length) {
            return 0; // Simple reset to beginning
          }
          return nextIndex;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, items.length]);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      // Next item
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      // Previous item
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div
      ref={containerRef}
      className="menu-carousel-container"
      style={{
        height: `${containerHeight}px`,
        width: "100%",
      }}
    >
      <motion.div
        className="menu-carousel-track"
        drag="x"
        dragConstraints={{
          left: -(trackItemOffset * (items.length - 1)),
          right: 0,
        }}
        style={{
          gap: `${GAP}px`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={SPRING_OPTIONS}
      >
        {items.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [15, 0, -15];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          return (
            <motion.div
              key={index}
              className="menu-carousel-item"
              style={{
                width: itemWidth,
                height: containerHeight,
                rotateY: rotateY,
                backgroundImage: `url(${item.image})`,
              }}
              transition={SPRING_OPTIONS}
            />
          );
        })}
      </motion.div>

      {/* Indicators */}
      <div className="menu-carousel-indicators-container">
        <div className="menu-carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`menu-carousel-indicator ${
                currentIndex === index ? "active" : "inactive"
              }`}
              animate={{
                scale: currentIndex === index ? 1.2 : 1,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
