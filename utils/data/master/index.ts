import { MockMasterDataRepository } from "./mockdata";

export interface MasterData {
    id: number,
    name: string
}

export interface DataRepository {
    findById: (id: number) => Promise<MasterData>;
    findAll: () => Promise<MasterData[]>,
    update: (data: MasterData) => Promise<MasterData>,
}

const dataRepo: DataRepository = MockMasterDataRepository;

export default dataRepo;