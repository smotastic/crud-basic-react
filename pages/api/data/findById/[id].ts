import type { NextApiRequest, NextApiResponse } from 'next'
import DataRepository, { MasterData } from "../../../../data/master"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query;
        let data = await DataRepository.findById(id as string);
        res.status(200).json(JSON.stringify({ status: 200, data: data }));
    } catch (error) {
        res.status(401).json(JSON.stringify({ status: 401, msg: 'Insufficient permissions' }))
    }
}