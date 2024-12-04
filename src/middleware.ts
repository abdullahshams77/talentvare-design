import { NextResponse } from "next/server";

export default async function middleware(req: any) {
  return NextResponse.next();
}

//return NextResponse.redirect(new URL('/login', req.url));
// GET /_next/data/build-id/hello.json

// with the flag this now /_next/data/build-id/hello.json
// without the flag this would be normalized to /hello
