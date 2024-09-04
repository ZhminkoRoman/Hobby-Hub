import { createEvent } from "@/src/actions/actions";
import UploadImageToEvent from "../../_components/UploadImageToEvent";

export default function EventsPage() {
  return (
    <>
      <h2 className="page-title">Events creating page</h2>

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
    </>
  );
}
