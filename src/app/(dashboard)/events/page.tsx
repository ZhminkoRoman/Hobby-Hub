import { createEvent } from "@/src/actions/actions";

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
        <input
          type="file"
          accept="image/png, image/jpeg, video/*"
          name="eventImage"
        />
        <button type="submit" className="btn">
          Create event
        </button>
      </form>
    </>
  );
}
