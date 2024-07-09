"use client";

import { signInForm } from "@/src/actions/signIn";
import SignInButton from "@/src/components/SignInButton";
import Link from "next/link";
import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "@/auth";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const searchError = searchParams.get("error");
  const [error, action, isPending] = useActionState(signInForm, null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

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
              value={email}
              onChange={handleEmailChange}
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
        {/* <hr className="divider" /> */}
        <SignInButton title="Google" provider="google" subclass="google" />
        <SignInButton title="GitHub" provider="github" subclass="github" />
        {error ? <p>{error}</p> : null}
        {searchError ? <p>{searchError}</p> : null}
      </form>
      <Link href="/auth/registration" className="link mx-auto">
        or Sign Up
      </Link>
    </main>
  );
}
