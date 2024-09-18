"use client";
import { useEffect, useMemo, useState } from "react";
import AnimatedWord from "./AnimatedWord";

const layoutWords = [
  "Reading",
  "Painting",
  "Hiking",
  "Photography",
  "Cooking",
  "Gardening",
  "Traveling",
  "Knitting",
  "Writing",
  "Playing musical instruments",
  "Cycling",
  "Swimming",
  "Jogging",
  "Drawing",
  "Fishing",
  "Birdwatching",
  "Collecting stamps",
  "Woodworking",
  "Baking",
  "Rock climbing",
  "Yoga",
  "Dancing",
  "Pottery",
  "Playing video games",
  "Learning languages",
  "Chess",
  "Sewing",
  "Scrapbooking",
  "Meditation",
  "Candle making",
  "Origami",
  "Surfing",
  "Sculpting",
  "Wine tasting",
  "Calligraphy",
  "Horseback riding",
  "Astronomy",
  "Archery",
  "Martial arts",
  "Kite flying",
  "Skateboarding",
  "Camping",
  "Puzzles",
  "Robotics",
  "Blogging",
  "Podcasting",
  "DIY projects",
  "Volunteering",
  "Journaling",
  "Board games",
];

export default function AuthAnimatedLayout() {
  /**
   * TODO: add another font for the words, make it bolder and bigger;
   */
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animatedWords = useMemo(() => {
    return layoutWords;
  }, [layoutWords]);

  return (
    <ul className="absolute w-full h-screen overflow-hidden z-0">
      {animatedWords.map((word, index) => {
        return (
          <AnimatedWord
            key={`${word}_${index}`}
            word={word}
            width={windowSize.width}
          />
        );
      })}
    </ul>
  );
}
