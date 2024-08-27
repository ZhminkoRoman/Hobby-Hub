"use client";
import { useState, ChangeEvent } from "react";

export default function UploadImageToEvent() {
  const [eventFile, setEventFile] = useState<string | null>(null);

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const base64 = await convertToBase64(file);
      setEventFile(base64);
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/png, image/jpeg, video/*"
        name="eventImage"
        onChange={handleFileChange}
      />
      <input type="hidden" name="eventImageBase64" value={eventFile || ""} />
    </>
  );
}
