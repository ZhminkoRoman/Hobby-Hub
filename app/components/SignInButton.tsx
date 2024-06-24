"use client";

import { useActionState } from "react";
import { signInWithProvider } from "../actions/signIn";

interface SignInProps {
  title: string;
  provider: string;
}

export default function SignInButton({ title, provider }: SignInProps) {
  const [error, action, isPending] = useActionState(signInWithProvider, null);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          action(provider);
        }}
        disabled={isPending}
      >
        {isPending ? "Loading..." : title}
      </button>
      {error ? <p>{error}</p> : null}
    </>
  );
}
