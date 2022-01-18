import {Auth} from "./index";

export default class Mockauth implements Auth {
    async signin(username: string, password: string) {
        return username !== 'wrong';
    }

}

