"use client";

import { useCallback, useEffect, useRef } from "react";

export default function AnimatedWord({
  word,
  width,
}: {
  word: string;
  width: number;
}) {
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const initialDelay = Math.random() * 5;

    const updatePosition = () => {
      if (elementRef.current) {
        const position = Math.ceil(Math.random() * width) + "px";
        elementRef.current.style.left = position;
      }
    };

    updatePosition();

    let intervalId: NodeJS.Timeout | undefined;

    const timerId = setTimeout(() => {
      if (elementRef.current) {
        elementRef.current.style.animation = `wordBlink 5s ease-in-out infinite, wordMove 5s linear infinite`;
      }

      intervalId = setInterval(updatePosition, 5000);
    }, initialDelay * 1000);

    return () => {
      if (elementRef.current) {
        elementRef.current.style.animation = "none";
      }
      if (intervalId) clearInterval(intervalId);
      clearTimeout(timerId);
    };
  }, [width]);

  return (
    <li className="animated-background relative w-full h-28">
      <p
        ref={elementRef}
        className="animated-word w-fit absolute font-extrabold tracking-tighter"
      >
        {word}
      </p>
    </li>
  );
}
