"use client";

interface HobbyCardExpandedProps {
  onClose: () => void;
}

export default function HobbyCardExpanded({ onClose }: HobbyCardExpandedProps) {
  return (
    <div
      className="flex w-screen h-screen justify-center items-center bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 z-[100]"
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
        {/* <input type="text" /> */}
      </div>
    </div>
  );
}
