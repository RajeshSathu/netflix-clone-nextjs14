import { NextRequest, NextResponse } from "next/server";
import prismadb from "../../../../lib/prismadb";
import serverAuth from "../../../../lib/serverAuth";
export const dynamic = "force-dynamic";

export async function GET(req:NextRequest) {
    try {
        await serverAuth(req);

        const moviesCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random() * moviesCount);

        const randomMovies = await prismadb.movie.findMany({
            take: 1,
            skip:randomIndex
        });
        return NextResponse.json(randomMovies[0]);
        
    }
    catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}