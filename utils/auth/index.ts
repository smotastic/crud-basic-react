import Mockauth from "./mockauth";

export interface AuthDetails {
    username: string
}
export interface Auth {
    signin: (username: string, password: string) => Promise<AuthDetails>;
}

export const auth: Auth = new Mockauth();