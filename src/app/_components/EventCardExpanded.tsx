"use client";

import Image from "next/image";
import EventChat from "./EventChat";

interface EventCardExpandedProps {
  onClose: () => void;
  readonly title: string;
  readonly description: string;
  readonly eventImageSource: string | null;
}

export default function EventCardExpanded({
  onClose,
  title,
  description,
  eventImageSource,
}: Readonly<EventCardExpandedProps>) {
  return (
    <div
      className="flex w-screen h-screen justify-center items-center bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 z-[100]"
      role="button"
      onClick={onClose}
    >
      <div
        className="flex flex-row rounded-2xl rounded-br-none w-1/2 h-fit border-4 border-[#090909] p-2 bg-[#222] gap-2"
        role="button"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className=" flex flex-col gap-2">
          <Image
            src={eventImageSource || "/defaultBackgroundPicture.png"}
            width="100"
            height="100"
            alt="Event image or video"
            className="h-auto w-auto max-h-[36rem] rounded-md"
          />
          <p className="bg-[#111] rounded-md p-2">{title}</p>
        </div>
        <div className="w-full">
          <p className="p-2 bg-[#111] rounded-md w-full h-24">{description}</p>
          <EventChat />
        </div>
      </div>
    </div>
  );
}
