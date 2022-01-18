import { DataRepository, MasterData } from "./index";

let masterMockData: MasterData[] = [
    { id: '1', name: 'Master One' },
    { id: '2', name: 'Master Two' },
    { id: '3', name: 'Master Three' },
    { id: '4', name: 'Master Four' },
];

export default class MockMasterDataRepository implements DataRepository {
    
    async findById(id: string) {
        const byId = masterMockData.find(d => d.id === id);
        if (!byId) {
            throw new Error(`$id does not exist`);
        }
        return byId;
    }
    async findAll() {
        return [...masterMockData];
    }
    async update(data: MasterData) {
        const index = masterMockData.findIndex(d => d.id === data.id);
        masterMockData.splice(index, 1, data);

        return data;
    };
    async create(data: MasterData) {
        const copy = {...data};
        copy.id = `${masterMockData.length + 1}`;
        masterMockData.push(copy);
        return copy;
    };

}