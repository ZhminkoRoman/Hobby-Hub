export default function LoginPage() {
  async function signIn(formData: FormData) {
    "use server";

    const rawFormData = {
      login: formData.get("login"),
      password: formData.get("password"),
    };
  }

  return (
    <main className="w-full h-full font-mono">
      <form
        action={signIn}
        className="w-80 flex flex-col h-full mx-auto justify-center gap-3"
      >
        <div className="flex flex-row">
          <label htmlFor="login" className="sign-label">
            Login
          </label>
          <input
            type="text"
            name="login"
            id="login"
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
    </main>
  );
}
