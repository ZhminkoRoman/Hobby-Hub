"use client";
import Image from "next/image";
import EventCardExpanded from "./EventCardExpanded";
import { useEffect, useState } from "react";

export default function EventCard({
  title,
  description,
}: {
  readonly title: string;
  readonly description: string;
}) {
  const [cardOpened, setCardOpened] = useState(false);

  const handleOpenCard = () => {
    setCardOpened((prev) => !prev);
  };

  const handleCloseCard = () => {
    setCardOpened(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseCard();
      }
    });

    return () =>
      window.removeEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          handleCloseCard();
        }
      });
  }, []);

  return (
    <>
      <div
        className="flex flex-col rounded-2xl w-80 rounded-br-none border-4 border-[#090909] p-2 bg-[#222] cursor-pointer hover:shadow-glow hover:shadow-[#05d9e8] mb-4"
        onClick={handleOpenCard}
      >
        <Image
          width="200"
          height="150"
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
          <p className="font-secondary tracking-widest">{title}</p>
        </div>
        <p className="h-fit w-full z-10 p-1 py-4">{description}</p>
      </div>
      {cardOpened ? (
        <EventCardExpanded
          onClose={() => setCardOpened(false)}
          title={title}
          description={description}
        />
      ) : null}
    </>
  );
}
