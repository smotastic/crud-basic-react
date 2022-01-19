import { DataRepository, SeasonalData } from "./index";

let seasonalMockData: SeasonalData[] = [
    { id: '1', name: 'Seasonal One' },
    { id: '2', name: 'Seasonal Two' },
    { id: '3', name: 'Seasonal Three' },
    { id: '4', name: 'Seasonal Four' },
];

export default class MockHouseplantDataRepository implements DataRepository {
    
    async findById(id: string) {
        const byId = seasonalMockData.find(d => d.id === id);
        if (!byId) {
            throw new Error(`$id does not exist`);
        }
        return byId;
    }
    async findAll() {
        return [...seasonalMockData];
    }
    async update(data: SeasonalData) {
        const index = seasonalMockData.findIndex(d => d.id === data.id);
        seasonalMockData.splice(index, 1, data);

        return data;
    };
    async create(data: SeasonalData) {
        const copy = {...data};
        copy.id = `${seasonalMockData.length + 1}`;
        seasonalMockData.push(copy);
        return copy;
    };

}