import { createEvent } from "@/src/actions/actions";
import UploadImageToEvent from "../../_components/UploadImageToEvent";
import EventWrapper from "../../_components/EventWrapper";

export default function EventsPage() {
  return (
    <>
      <div className="flex justify-between w-full">
        <EventWrapper />
        <form
          action={createEvent}
          className="flex flex-col w-[36rem] mx-auto gap-3"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input-field"
          />
          <textarea
            name="content"
            placeholder="Content"
            rows={5}
            className="input-field"
          />
          <UploadImageToEvent />
          <button type="submit" className="btn">
            <p className="btn-title font-secondary tracking-widest font-bold">
              Create event
            </p>
          </button>
        </form>
        <button className="h-14 bg-[rgba(10,_10,_10,_0.7)] w-14 create-button relative"></button>
      </div>
    </>
  );
}
