import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions: NextAuthOptions = {
  providers: [
    // Configure one or more authentication providers
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
};
