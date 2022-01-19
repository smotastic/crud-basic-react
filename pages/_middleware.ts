

import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt';
import { NextApiRequest } from 'next';

type NextApiRequestWithUrl = NextApiRequest & {
    url: string
}

// https://gist.github.com/balazsorban44/30e2267fe1105529f217acbe3763b468
export async function middleware(req: NextApiRequestWithUrl) {
    // return early if url isn't supposed to be protected
    if (req.url.includes("/auth") || req.url.includes("splash")) {
        return NextResponse.next()
    }

    const session = await getToken({ req, secret: 'secrecy' });
    if (!session) {
        return NextResponse.redirect("/auth/signin");
    }
    // If user is authenticated, continue.
    return NextResponse.next()
}