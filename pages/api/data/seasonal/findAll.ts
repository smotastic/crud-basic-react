import type { NextApiRequest, NextApiResponse } from 'next'
import DataRepository from "../../../../data/seasonal"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        let allData = await DataRepository.findAll();
        res.status(200).json(JSON.stringify({ status: 200, data: allData }));
    } catch (error) {
        res.status(401).json(JSON.stringify({ status: 401, msg: 'Insufficient permissions' }))
    }
}