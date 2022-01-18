import Mockauth from "./mockauth";

export interface Auth {
    signin: (username: string, password: string) => Promise<boolean>;
}

export const auth: Auth = new Mockauth();