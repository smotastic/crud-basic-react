import { DataRepository, MasterData } from "./index";

const data: MasterData[] = [
    { id: 1, name: 'Master One' },
    { id: 2, name: 'Master Two' },
    { id: 3, name: 'Master Three' },
    { id: 4, name: 'Master Four' },
];

export const MockMasterDataRepository: DataRepository = {
    findById: async function (id: number): Promise<MasterData> {
        const byId = data.find(d => d.id === id);
        if(!byId) {
            throw new Error(`$id does not exist`);
        }
        return byId;
    },
    findAll: async function (): Promise<MasterData[]> {
        return [...data];
    }
}
