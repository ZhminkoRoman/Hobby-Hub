import { auth, signIn } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RegistrationPage() {
  async function signUpForm(formData: FormData) {
    "use server";

    const rawFormData = {
      redirectTo: "http://localhost:3000/login",
      email: formData.get("email"),
      password: formData.get("password"),
      repeatPassword: formData.get("repeatPassword"),
    };

    await signIn("credentials", rawFormData);
  }

  return (
    <main className="w-full h-full font-mono flex flex-col justify-center gap-3">
      <form className="w-96 flex flex-col mx-auto justify-center gap-3">
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
        <div className="flex flex-row">
          <label htmlFor="repeatPassword" className="sign-label w-80">
            Repeat password
          </label>
          <input
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            required
            className="sign-input"
          />
        </div>
        <button className="btn" formAction={signUpForm}>
          Sign Up
        </button>
      </form>
    </main>
  );
}
