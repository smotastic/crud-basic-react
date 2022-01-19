import FirebaseSeasonalDataRepository from "./firebasedata";
import MockSeasonalDataRepository from "./mockdata";

export interface SeasonalData {
    id?: string,
    name: string
}

export interface DataRepository {
    findById: (id: string) => Promise<SeasonalData>;
    findAll: () => Promise<SeasonalData[]>,
    update: (data: SeasonalData) => Promise<SeasonalData>,
    create: (data: SeasonalData) => Promise<SeasonalData>,
}

const dataRepo: DataRepository = process.env.DATA_REPOSITORY === 'mock' ? new MockSeasonalDataRepository() : new FirebaseSeasonalDataRepository();

export default dataRepo;