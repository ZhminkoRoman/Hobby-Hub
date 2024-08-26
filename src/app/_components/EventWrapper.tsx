"use client";

import Masonry from "react-masonry-css";
import EventCard from "./EventCard";
import { User } from "@/src/actions/actions";

export default function EventWrapper({ user }: { user: User }) {
  console.log(user);
  return (
    <Masonry
      className="flex"
      columnClassName="bg-clip-content"
      breakpointCols={5}
    >
      {user?.events?.map((hobbyEvent, index) => {
        return (
          <EventCard
            title={hobbyEvent.title}
            key={`${hobbyEvent.id}`}
            description={hobbyEvent.content}
            userName={user.name}
            userImage={user.image}
            eventImage={hobbyEvent.eventImage}
          />
        );
      })}
    </Masonry>
  );
}
