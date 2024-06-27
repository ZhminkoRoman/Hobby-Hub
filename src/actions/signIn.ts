"use server";

// import { signIn } from "@/auth";

type SignInFormValues = {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};

type RawFormDataType = Partial<SignInFormValues> & {
  redirectTo: string;
};

export async function signInForm(previousState: unknown, formData: FormData) {
  const rawFormData: RawFormDataType = {
    redirectTo: "http://localhost:3000/dashboard",
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // await signIn("credentials", rawFormData);
}

export async function signInWithProvider(
  previousState: unknown,
  provider: string
) {
  const rawFormData = {
    redirectTo: "http://localhost:3000/dashboard",
  };

  // await signIn(provider, rawFormData);
}
