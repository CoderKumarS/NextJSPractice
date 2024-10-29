import "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    isVerfied?: boolean;
    isAcceptingMessage?: boolean;
    username?: string;
  }
  interface session {
    user: {
      _id?: string;
      isVerfied?: boolean;
      isAcceptingMessage?: boolean;
      username?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    isVerfied?: boolean;
    isAcceptingMessage?: boolean;
    username?: string;
  }
}
