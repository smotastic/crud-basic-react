import { DataRepository, HouseplantData } from "./index";

let houseplantMockData: HouseplantData[] = [
    { id: '1', name: 'Master One' },
    { id: '2', name: 'Master Two' },
    { id: '3', name: 'Master Three' },
    { id: '4', name: 'Master Four' },
];

export default class MockHouseplantDataRepository implements DataRepository {
    
    async findById(id: string) {
        const byId = houseplantMockData.find(d => d.id === id);
        if (!byId) {
            throw new Error(`$id does not exist`);
        }
        return byId;
    }
    async findAll() {
        return [...houseplantMockData];
    }
    async update(data: HouseplantData) {
        const index = houseplantMockData.findIndex(d => d.id === data.id);
        houseplantMockData.splice(index, 1, data);

        return data;
    };
    async create(data: HouseplantData) {
        const copy = {...data};
        copy.id = `${houseplantMockData.length + 1}`;
        houseplantMockData.push(copy);
        return copy;
    };

}