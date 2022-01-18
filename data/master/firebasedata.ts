import { DataRepository, MasterData } from "./index";
import '../firebase/config';
import { getDocs, getFirestore } from "firebase/firestore"
import { collection, addDoc, doc, getDoc, query, where } from "firebase/firestore";
export default class FirebaseMasterDataRepository implements DataRepository {

    private db = getFirestore();
    async findById(id: string) {
        const docRef = doc(this.db, 'master', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return { id: docSnap.id, name: data.name };
        }
        throw new Error('Document does not exist');
    }
    async findAll() {
        const q = query(collection(this.db, 'master'));
        const snapshot = await getDocs(q);
        const result: MasterData[] = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            result.push({ id: doc.id, name: data.name })
        });
        return result;
    }
    async update(data: MasterData) {
        return data;
    };
    async create(data: MasterData) {
        return data;
    };

}