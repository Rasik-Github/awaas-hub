import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { auth } from "./auth";
import {
  lastLoginMethodClient,
} from "better-auth/client/plugins";


export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL!,
  plugins: [inferAdditionalFields<typeof auth>(), lastLoginMethodClient()],
});

export const { signIn, signUp, signOut, useSession, getSession } = authClient;
