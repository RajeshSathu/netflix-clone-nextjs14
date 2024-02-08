import { useParams } from "next/navigation";
import useCurrentUser from "../hooks/useCurrentUser";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

 
async function getCookieData() {
  return new Promise((resolve) =>
    setTimeout(() => {
      // cookies will be called outside of the async context, causing a build-time error
      resolve(cookies().get("next-auth.session-token"));
    }, 1000)
  );
}

export async function middleware(request: NextRequest) {
    const cookieData = await getCookieData();
    const path = request.nextUrl.pathname;
    if (!cookieData && path !== '/auth') {
        return NextResponse.redirect(new URL('/auth', request.url))
    }
else if(cookieData && path!=='/auth')        return NextResponse.next();
    }

export const config = {
  matcher: ["/", "/profiles",'/auth'],
};