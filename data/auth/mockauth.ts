import { Auth } from "./index";

export default class Mockauth implements Auth {
    async signin(username: string, password: string) {
        if (username === 'wrong') {
            throw new Error('Invalid Credentials');
        }
        return { username };
    }

}

