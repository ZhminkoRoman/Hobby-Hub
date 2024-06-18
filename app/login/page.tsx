import { auth, signIn } from "@/auth";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const cookieStore = cookies();
  async function signInForm(formData: FormData) {
    "use server";

    const rawFormData = {
      redirectTo: "/",
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await signIn("credentials", rawFormData);
  }

  async function signInWithGithub() {
    "use server";

    await signIn("github", { redirectTo: "/" });
  }

  async function signInWithGoogle() {
    "use server";

    await signIn("google", { redirectTo: "/" });
  }

  return (
    <main className="w-full h-full font-mono flex flex-col justify-center gap-3">
      <form
        action={signInForm}
        className="w-80 flex flex-col mx-auto justify-center gap-3"
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
        <button className="btn" formAction={signInForm}>
          Sign In
        </button>
        <button
          formAction={signInWithGithub}
          className="px-8 py-4 border-2 rounded w-full border-gray-900"
        >
          Signin with GitHub
        </button>
        <button
          formAction={signInWithGoogle}
          className="px-8 py-4 border-2 rounded w-full border-red-500"
        >
          Signin with Google
        </button>
      </form>
      <Link href="/registration" className="mx-auto">
        or Sign Up
      </Link>
    </main>
  );
}