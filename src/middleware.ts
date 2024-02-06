import { useParams } from "next/navigation";
import useCurrentUser from "../hooks/useCurrentUser";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export default function middleware(request: NextRequest) {
    let cookie = request.cookies.get('next-auth.session-token');
    const path = request.nextUrl.pathname;
    if (!cookie && path !== '/auth') {
        return NextResponse.redirect(new URL('/auth', request.url))
    }
else if(cookie && path!=='/auth')        return NextResponse.next();
    }

export const config = {
  matcher: ["/", "/profiles",'/auth'],
};