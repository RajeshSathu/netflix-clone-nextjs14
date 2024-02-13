import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getAuthCookie } from "../lib/authorize"; // Assumes an interface defined for the auth cookie





export default async function middleware(request: NextRequest): Promise<NextResponse> {
  const path = request.nextUrl.pathname;
  const authCookie = await getAuthCookie(request); // Type the returned value

  if (!authCookie && path!=='/auth') {
    
      return NextResponse.redirect(new URL("/auth", request.url));
  
  }

   

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/profiles", "/auth"],
};
export const dynamic = "true";