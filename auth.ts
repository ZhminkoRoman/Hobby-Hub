import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
  jwt: {
    encode: ({ secret, token }) =>
      jsonwebtoken.sign(
        {
          ...token,
          iss: "nextauth",
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60,
        },
        secret as string
      ),
    decode: async ({ secret, token }) =>
      jsonwebtoken.verify(token!, secret as string) as JWT,
  },
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.username = profile?.login;
      }
      return token;
    },
    session({ session, token }) {
      if (token.username) {
        session.username = token?.username;
      }
      return session;
    },
  },
});
