import { DataRepository, SeasonalData } from "./index";
import '../firebase/config';
import { getDocs, getFirestore } from "firebase/firestore"
import { collection, addDoc, doc, getDoc, query, updateDoc } from "firebase/firestore";

const collectionName = 'seasonal';
export default class FirebaseHouseplantDataRepository implements DataRepository {


    private db = getFirestore();
    async findById(id: string) {
        const docRef = doc(this.db, collectionName, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return { id: docSnap.id, name: data.name };
        }
        throw new Error('Document does not exist');
    }
    async findAll() {
        const q = query(collection(this.db, collectionName));
        const snapshot = await getDocs(q);
        const result: SeasonalData[] = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            result.push({ id: doc.id, name: data.name })
        });
        return result;
    }
    async update(data: SeasonalData) {
        const docRef = doc(this.db, collectionName, data.id!);
        const copy = { ...data };
        delete copy.id;
        await updateDoc(docRef, copy)

        return data;
    };
    async create(data: SeasonalData) {
        const docRef = await addDoc(collection(this.db, collectionName), data);
        return { ...data, id: docRef.id };
    };

}