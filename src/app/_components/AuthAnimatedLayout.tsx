"use client";
import { useEffect, useMemo, useState } from "react";
import AnimatedWord from "./AnimatedWord";

const layoutWords = [
  "kendo",
  "cycling",
  "drawing",
  "dance",
  "fight",
  "games",
  "engineering",
  "movies",
  "lego",
  "photo",
  "kendo",
  "cycling",
  "drawing",
  "dance",
  "fight",
  "games",
  "engineering",
  "movies",
  "lego",
  "photo",
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
    <ul className="absolute w-full h-auto z-0">
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
