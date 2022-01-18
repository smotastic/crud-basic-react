import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";
import {auth} from "../../../utils/auth";
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "email", type: "text", placeholder: "jsmith" },
                password: {  label: "password", type: "password" }
              },
            authorize: async (credentials, req) => {
                try {
                    const authDetails = await auth.signin(credentials!.email, credentials!.password);
                    return {email: authDetails.username};
                } catch(error) {
                    return null;
                }
            }
        }),
    ],
    pages: {
        'signIn': '/auth/signin'
    },
    secret: 'secrecy'
})