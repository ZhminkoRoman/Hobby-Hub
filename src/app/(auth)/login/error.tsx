"use client";

import { useEffect } from "react";

export default function LoginError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <p>Auth Error</p>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
