import type { NextApiRequest, NextApiResponse } from 'next'
import DataRepository, { HouseplantData } from "../../../../data/houseplants"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = JSON.parse(req.body) as HouseplantData;
        const updatedData = await DataRepository.update(data);
        res.status(200).json(JSON.stringify({ status: 200, data: updatedData }));
    } catch (error) {
        res.status(401).json(JSON.stringify({ status: 401, msg: 'Insufficient permissions' }))
    }
}