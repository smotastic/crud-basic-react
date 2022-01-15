// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {auth} from "../../utils/auth";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const body = JSON.parse(req.body);

    const loginSuccessful = await auth.signin(body.username, body.password);
    console.log(loginSuccessful);
    if(loginSuccessful) {
        return res.redirect('/');
    } else {
        res.status(401).json({error: 'Invalid Credentials'})
    }
    return res;

}
