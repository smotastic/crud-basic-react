
import { Auth } from "./index";
import '../firebase/config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default class FirebaseAuth implements Auth {

    private auth = getAuth();
    async signin(username: string, password: string) {
        try {
            const credentials = await signInWithEmailAndPassword(this.auth, username, password);
            const token = await credentials.user.getIdToken();
            return { username: credentials.user.email!, token }

        } catch (error) {
            throw new Error('Invalid Credentials');
        }
    }

}

