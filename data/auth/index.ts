import FirebaseAuth from "./firebaseauth";
import MockAuth from "./mockauth";

export interface AuthDetails {
    username: string,
    token?: string
}
export interface Auth {
    signin: (username: string, password: string) => Promise<AuthDetails>;
}

export const auth: Auth = process.env.DATA_REPOSITORY === 'mock' ? new MockAuth() : new FirebaseAuth();