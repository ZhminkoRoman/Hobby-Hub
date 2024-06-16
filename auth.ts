import NextAuth from "next-auth";
import { ZodError } from "zod";
import { signInSchema } from "./lib/zod";
import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          console.log("CREDENTIALS: -", credentials);

          const pwHash = "";

          const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          });

          console.log("DATA: -", data);

          if (!data.user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error(error?.message);
          }

          console.log("USER: -", data.user);

          return { id: data.user.id, email: data.user.email };
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            throw new Error(error.message);
          }
          console.log("EEEEEEEEEE", error);

          return null;
        }
      },
    }),
    GitHub,
    Google,
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = { id: user.id, email: user.email, name: user.name };
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
