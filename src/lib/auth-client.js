import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: [
    "https://ph-assignment-08-qoz5.vercel.app",
    "http://localhost:3000", // keep for local dev
  ],
})
