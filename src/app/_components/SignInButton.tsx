"use client";

import { useActionState } from "react";
import Image from "next/image";
import { signInWithProvider } from "../../actions/signIn";

interface SignInProps {
  title: string;
  provider: string;
  subclass?: string;
}

const icons: { [key: string]: string } = {
  google: "/google.png",
  github: "/github.png",
  credentials: "/email.png",
};

export default function SignInButton({
  title,
  provider,
  subclass,
}: SignInProps) {
  const [error, action, isPending] = useActionState(signInWithProvider, null);
  return (
    <button
      className="btn-wrapper"
      formAction={() => action(provider)}
      disabled={isPending}
    >
      <div className={`btn ${subclass}`}>
        <p className="btn-title font-secondary tracking-widest font-bold">
          {isPending ? "...Loading" : title}
        </p>
      </div>
      <div className={`btn-icon ${subclass}`}>
        <Image
          width="35"
          height="35"
          src={icons[provider]}
          alt={title}
          className="icon"
        />
      </div>
    </button>
  );
}
