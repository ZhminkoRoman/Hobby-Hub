"use client";

import EventCard from "./EventCard";
import { User } from "@/src/actions/actions";

export default function EventWrapper({ user }: { user: User }) {
  // переписать эту хрень

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_350px)] gap-2">
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
    </div>
  );
}
