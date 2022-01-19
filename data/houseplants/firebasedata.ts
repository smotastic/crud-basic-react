import { DataRepository, HouseplantData } from "./index";
import '../firebase/config';
import { getDocs, getFirestore } from "firebase/firestore"
import { collection, addDoc, doc, getDoc, query, where, updateDoc, setDoc } from "firebase/firestore";
const collectionName = 'houseplants';
export default class FirebaseHouseplantDataRepository implements DataRepository {


    private db = getFirestore();
    async findById(id: string) {
        const docRef = doc(this.db, collectionName, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            return { id: docSnap.id, name: data.name, description: data.description, waterRequirement: data.waterRequirement, sunlight: data.sunlight, lastWatered: data.lastWatered };
        }
        throw new Error('Document does not exist');
    }
    async findAll() {
        const q = query(collection(this.db, collectionName));
        const snapshot = await getDocs(q);
        const result: HouseplantData[] = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            result.push({ id: doc.id, name: data.name, description: data.description, waterRequirement: data.waterRequirement, sunlight: data.sunlight, lastWatered: data.lastWatered });
        });
        return result;
    }
    async update(data: HouseplantData) {
        const docRef = doc(this.db, collectionName, data.id!);
        const copy = { ...data };
        delete copy.id;
        await updateDoc(docRef, copy)

        return data;
    };
    async create(data: HouseplantData) {
        const docRef = await addDoc(collection(this.db, collectionName), data);
        return { ...data, id: docRef.id };
    };

}