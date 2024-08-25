"use client";

interface EventCardExpandedProps {
  onClose: () => void;
  readonly title: string;
  readonly description: string;
}

export default function EventCardExpanded({
  onClose,
  title,
  description,
}: Readonly<EventCardExpandedProps>) {
  return (
    <div
      className="flex w-screen h-screen justify-center items-center bg-[rgba(0,0,0,0.6)] absolute top-0 left-0 z-[100]"
      role="button"
      onClick={onClose}
    >
      <div
        className="flex flex-col rounded-2xl rounded-br-none w-1/2 h-1/2 border-4 border-[#090909] p-2 bg-[#222]"
        role="button"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <p>{title}</p>
        <p>{description}</p>
        {/* <input type="text" /> */}
      </div>
    </div>
  );
}
