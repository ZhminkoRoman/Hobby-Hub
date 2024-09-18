import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";
import credentials from "next-auth/providers/credentials";
import { signInSchema } from "./src/lib/zod";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

function isFormDataValue(value: FormDataEntryValue | null): value is string {
  return typeof value === "string";
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = await signInSchema.parseAsync(credentials);

        // const hashedPassword = await bcrypt.hash(password, 10);

        user = await prisma.user.findUnique({
          where: {
            email: email,
            // password: hashedPassword,
          },
        });

        if (!user) {
          throw new Error("User not found.");
        }

        return user;
      },
    }),
    GitHub,
    Google,
  ],
  // callbacks: {
  //   authorized: async ({ auth }) => {
  //     return !!auth;
  //   },
  // },
  // jwt: {
  //   encode: ({ secret, token }) =>
  //     jsonwebtoken.sign(
  //       {
  //         ...token,
  //         iss: "nextauth",
  //         exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60,
  //       },
  //       secret as string
  //     ),
  //   decode: async ({ secret, token }) =>
  //     jsonwebtoken.verify(token!, secret as string) as JWT,
  // },
  // callbacks: {
  //   async jwt({ token, profile }) {
  //     if (profile) {
  //       token.username = profile?.login;
  //     }
  //     return token;
  //   },
  //   session({ session, token }) {
  //     if (token.username) {
  //       session.username = token?.username;
  //     }
  //     return session;
  //   },
  // },
});
