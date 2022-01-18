import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import { auth } from "../../../data/auth";
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: { label: "password", type: "password" },
                token: { label: "Token", type: "text" }
            },
            authorize: async (credentials, req) => {
                try {
                    const authDetails = await auth.signin(credentials!.email, credentials!.password);
                    return { email: authDetails.username, token: authDetails.token };
                } catch (error) {
                    console.log(error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt(options) {
            const token = options.user?.token;
            options.token.firebaseToken = token;
            return options.token;
        },
        async session({ session, token, user }) {
            session.firebaseToken = token.firebaseToken;
            return session
        }
    },
    pages: {
        'signIn': '/auth/signin'
    },
    secret: 'secrecy'
})