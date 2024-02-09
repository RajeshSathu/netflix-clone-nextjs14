import { NextRequest } from "next/server";



export async function getAuthCookie(request: NextRequest) {
    // 1. Get the raw cookie value
    const cookie = request.cookies.get("next-auth.session-token");

    // 2. Check if the cookie exists
    if (!cookie) {
        return null;
    }
    return cookie;
}
