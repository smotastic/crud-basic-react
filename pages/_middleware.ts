

import { NextRequest, NextResponse } from 'next/server'
import { Response } from "next/dist/server/web/spec-compliant/response";
import { auth } from "../data/auth";
import { getSession } from "next-auth/react"
import { getToken } from 'next-auth/jwt';



// https://gist.github.com/balazsorban44/30e2267fe1105529f217acbe3763b468
export async function middleware(req: any) {
    // return early if url isn't supposed to be protected
    // if (req.url.includes("/auth") || req.url.includes("splash")) {
    //     return NextResponse.next()
    // }

    // const session = await getToken({ req, secret: 'secrecy' });
    // if (!session) {
    //     return NextResponse.redirect("/auth/signin");
    // }
    // If user is authenticated, continue.
    return NextResponse.next()
}