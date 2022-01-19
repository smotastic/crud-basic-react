import FirebaseHouseplantDataRepository from "./firebasedata";
import MockHouseplantDataRepository from "./mockdata";

export interface HouseplantData {
    id?: string,
    name: string,
    description: string,
    lastWatered?: Date,
    waterRequirement: string,
    sunlight: string
}

export interface DataRepository {
    findById: (id: string) => Promise<HouseplantData>;
    findAll: () => Promise<HouseplantData[]>,
    update: (data: HouseplantData) => Promise<HouseplantData>,
    create: (data: HouseplantData) => Promise<HouseplantData>,
}

const dataRepo: DataRepository = process.env.DATA_REPOSITORY === 'mock' ? new MockHouseplantDataRepository() : new FirebaseHouseplantDataRepository();

export default dataRepo;