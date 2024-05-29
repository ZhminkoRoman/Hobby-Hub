import { signIn } from "@/auth.ts";

export function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
        className="w-80 mx-auto"
      >
        <button
          type="submit"
          className="px-8 py-4 border-2 rounded w-full border-gray-900"
        >
          Signin with GitHub
        </button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
        className="w-80 mx-auto"
      >
        <button
          type="submit"
          className="px-8 py-4 border-2 rounded w-full border-red-500"
        >
          Signin with Google
        </button>
      </form>
    </>
  );
}
