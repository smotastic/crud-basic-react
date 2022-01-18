import { Auth } from "./index";

export default class MockAuth implements Auth {
    async signin(username: string, password: string) {
        if (username === 'wrong') {
            throw new Error('Invalid Credentials');
        }
        return { username };
    }

}

