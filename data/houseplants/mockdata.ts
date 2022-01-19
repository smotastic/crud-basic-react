import { SUNLIGHT, WATER_REQUIREMENT } from "../../utils/houseplant.select";
import { DataRepository, HouseplantData } from "./index";

let houseplantMockData: HouseplantData[] = [
    { id: '1', name: 'Master One', description: 'A description', waterRequirement: WATER_REQUIREMENT[0], sunlight: SUNLIGHT[0] },
    { id: '2', name: 'Master Two', description: 'A description', waterRequirement: WATER_REQUIREMENT[0], sunlight: SUNLIGHT[1] },
    { id: '3', name: 'Master Three', description: 'A description', waterRequirement: WATER_REQUIREMENT[1], sunlight: SUNLIGHT[2] },
    { id: '4', name: 'Master Four', description: 'A description', waterRequirement: WATER_REQUIREMENT[2], sunlight: SUNLIGHT[3] },
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
        const copy = { ...data };
        copy.id = `${houseplantMockData.length + 1}`;
        houseplantMockData.push(copy);
        return copy;
    };

}