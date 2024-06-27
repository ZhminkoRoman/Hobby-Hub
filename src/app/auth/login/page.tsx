"use client";

import { signInForm } from "@/src/actions/signIn";
import SignInButton from "@/src/app/components/SignInButton";
import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const searchError = searchParams.get("error");
  const [error, action, isPending] = useActionState(signInForm, null);

  return (
    <main className="w-full h-full font-mono flex flex-col justify-center gap-3">
      <form
        className="w-80 flex flex-col mx-auto justify-center gap-3"
        action={action}
      >
        <div className="flex flex-row">
          <label htmlFor="email" className="sign-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="sign-input"
          />
        </div>
        <div className="flex flex-row">
          <label htmlFor="password" className="sign-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="sign-input"
          />
        </div>
        <button className="btn" type="submit">
          {isPending ? "Loading..." : "Sign In"}
        </button>
        {error ? <p>{error}</p> : null}
        {searchError ? <p>{searchError}</p> : null}
        <SignInButton title="Sign In with GitHub" provider="github" />
        <SignInButton title="Sign In with Google" provider="google" />
      </form>
      <Link href="/auth/registration" className="mx-auto">
        or Sign Up
      </Link>
    </main>
  );
}
