import GitHubProvider from "next-auth/providers/github";
import { CredentialsProvider } from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   credentials: {
    //     username: {
    //       label: 'Username:',
    //       type: 'text',
    //       placeholder: 'username'
    //     },
    //   },
    //   async authorize(credentials) {
    //     const user = { id: '42', name: 'Roma', password: 'roma123' }
    //   }
    // })
  ],
};
