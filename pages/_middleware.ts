

import { NextRequest, NextResponse } from 'next/server'
import { Response } from "next/dist/server/web/spec-compliant/response";
import { auth } from "../utils/auth";
import { getSession } from "next-auth/react"
import { getToken } from 'next-auth/jwt';



// https://github.com/vercel/examples/blob/main/edge-functions/basic-auth-password/pages/_middleware.ts
export async function middleware(req: any) {
    // return early if url isn't supposed to be protected
    if (req.url.includes("/auth")) {
        return NextResponse.next()
    }

    const session = await getToken({ req, secret: 'secrecy' });
    if (!session) {
        return NextResponse.redirect("/auth/signin");
    }
    // If user is authenticated, continue.
    return NextResponse.next()
}