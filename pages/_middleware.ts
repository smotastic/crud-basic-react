

import { NextRequest, NextResponse } from 'next/server'
import {Response} from "next/dist/server/web/spec-compliant/response";
import {auth} from "../utils/auth";

// https://github.com/vercel/examples/blob/main/edge-functions/basic-auth-password/pages/_middleware.ts
export async function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('authorization')
    // if (basicAuth) {
    //     const auth = basicAuth.split(' ')[1]
    //     const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
    //
    //     if (user === 'admin' && pwd === 'testpwd123') {
    //         return NextResponse.next()
    //     }
    // }
   
    // return NextResponse.redirect('/signin');
}