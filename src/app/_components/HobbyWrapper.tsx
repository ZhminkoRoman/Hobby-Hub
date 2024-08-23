"use client";

import Masonry from "react-masonry-css";
import HobbyCard from "./HobbyCard";

const hobbiesEvents = [
  {
    person: "Dobby",
    description:
      "That is a description for the card. It should contain ane information about the events, meetups or just news",
  },
  {
    person: "Roma",
    description: "Lets imagine that's just a normal description.",
  },
  {
    person: "Faust_777",
    description:
      "test test test test test test test test test test test test test test test",
  },
  {
    person: "@---lohaaaa---@",
    description: "My email is loha@loha.com",
  },
  {
    person: "El Professor",
    description:
      "In This World, Everything Is Governed By A Simple Balance. There's What You Can Win And What You Can Lose.",
  },
  {
    person: "MC/Claus",
    description: "Ho-Ho-Ho",
  },
  {
    person: "eeeeeerr",
    description:
      "sakldjklsa dklfsjg jflks ajds jklgfj klsjg fljasdlkskkkkkkkkk glffff     gfksgjkffjklasjdfa",
  },
  {
    person: "Yuor ama",
    description: "BEACH",
  },
];

export default function HobbyWrapper() {
  return (
    <Masonry
      className="flex gap-2"
      columnClassName="bg-clip-padding"
      breakpointCols={5}
    >
      {hobbiesEvents.map((hobby, index) => {
        return (
          <HobbyCard
            title={hobby.person}
            key={`${hobby.person}_${index}`}
            description={hobby.description}
          />
        );
      })}
    </Masonry>
  );
}
