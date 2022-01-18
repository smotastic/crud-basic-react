import type { NextApiRequest, NextApiResponse } from 'next'
import DataRepository, { MasterData } from "../../../data/master"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = JSON.parse(req.body) as MasterData;
        const createdData = await DataRepository.create(data);
        res.status(200).json(JSON.stringify({ status: 200, data: createdData }));
    } catch (error) {
        res.status(401).json(JSON.stringify({ status: 401, msg: 'Insufficient permissions' }))
    }
}