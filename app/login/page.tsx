import { auth, signIn } from "@/auth";
import { SignIn } from "../components/SignIn";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  async function signInForm(formData: FormData) {
    "use server";

    const rawFormData = {
      redirect: false,
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await signIn("credentials", rawFormData);
  }

  const session = await auth();

  console.log("SESSION: -", session);
  if (session?.user) redirect("/");

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
        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
      <SignIn />
    </main>
  );
}
