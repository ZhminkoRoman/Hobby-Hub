import NextAuth from "next-auth";
import { ZodError } from "zod";
import { signInSchema, signUpSchema } from "./lib/zod";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
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
          const { email, password } = await signUpSchema.parseAsync(
            credentials
          );

          const pwHash = "";

          const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
          });

          console.log(
            "ERR",
            error?.cause,
            error?.name,
            error?.status,
            error?.message
          );
          console.log("DATA", data);

          if (!data.user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error(error?.message);
          }

          return data.user;
        } catch (error) {
          console.log("ERROR", error);
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            throw new Error(error.message);
          }

          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true;
      } else {
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user = token.user;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
