"use client";
import Image from "next/image";
import HobbyCardExpanded from "./HobbyCardExpanded";
import { useState } from "react";

export default function HobbyCard() {
  const [cardOpened, setCardOpened] = useState(false);

  const handleOpenCard = () => {
    setCardOpened((prev) => !prev);
  };

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setCardOpened(false);
    }
  });

  return (
    <>
      <div
        className="flex flex-col rounded-2xl rounded-br-none w-60 border-4 border-[#090909] p-2 bg-[#222] cursor-pointer hover:shadow-glow hover:shadow-[#05d9e8]"
        onClick={handleOpenCard}
      >
        <Image
          width="200"
          height="250"
          src={""}
          alt={"image"}
          className="rounded-sm bg-[#111] w-full"
        />
        <div className="px-4 py-2 pl-20 flex justify-end h-fit w-full relative before:absolute before:-top-7 before:left-5 before:rounded-full before:w-14 before:h-14 bg-[#666] before:bg-[#666]">
          <Image
            width="20"
            height="20"
            src={""}
            alt={"image"}
            className="absolute w-12 h-12 rounded-full bg-[#eee] -top-6 left-6"
          />
          <p className="">Person</p>
        </div>
        <p className="h-fit w-full z-10 p-1 py-4">
          That is a description for the card. It should contain ane information
          about the events, meetups or just news
        </p>
      </div>
      {cardOpened ? (
        <HobbyCardExpanded onClose={() => setCardOpened(false)} />
      ) : null}
    </>
  );
}
