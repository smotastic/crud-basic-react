import FirebaseMasterDataRepository from "./firebasedata";
import MockMasterDataRepository from "./mockdata";

export interface MasterData {
    id?: string,
    name: string
}

export interface DataRepository {
    findById: (id: string) => Promise<MasterData>;
    findAll: () => Promise<MasterData[]>,
    update: (data: MasterData) => Promise<MasterData>,
    create: (data: MasterData) => Promise<MasterData>,
}

const dataRepo: DataRepository = process.env.DATA_REPOSITORY === 'mock' ? new MockMasterDataRepository() : new FirebaseMasterDataRepository();

export default dataRepo;