import {Auth} from "./index";

export const Mockauth :Auth = {
    signin(username: string, password: string): Promise<boolean> {
        return Promise.resolve(username !== 'wrong');
    }
    
}
