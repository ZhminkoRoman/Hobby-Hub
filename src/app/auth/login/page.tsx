"use client";

import { signInForm } from "@/src/actions/signIn";
import SignInButton from "@/src/components/SignInButton";
import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "@/auth";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const searchError = searchParams.get("error");
  const [error, action, isPending] = useActionState(signInForm, null);

  return (
    <main className="w-full h-full font-mono flex flex-col justify-center gap-3">
      <form className="w-80 flex flex-col mx-auto justify-center gap-3">
        <div className="input-wrapper">
          <label htmlFor="email" className="input-label">
            Email:
          </label>
          <div className="input-field-border">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="input-field"
              placeholder="enter your email"
            />
          </div>
        </div>
        {/* <div className="flex flex-row">
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
        </div> */}
        <SignInButton title="Sign In" provider="credentials" />
        {error ? <p>{error}</p> : null}
        {searchError ? <p>{searchError}</p> : null}
      </form>
      <span className="divider">OR</span>
      <form className="w-80 flex flex-col mx-auto justify-center gap-3">
        <SignInButton title="Google" provider="google" subclass="google" />
        <SignInButton title="GitHub" provider="github" subclass="github" />
      </form>
      {/* <Link href="/auth/registration" className="link mx-auto">
        or Sign Up
      </Link> */}
    </main>
  );
}
