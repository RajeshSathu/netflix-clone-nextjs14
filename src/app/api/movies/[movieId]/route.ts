import { NextRequest, NextResponse } from "next/server";
import serverAuth from "../../../../../lib/serverAuth";


export async function GET(req: NextRequest, { params }: { params: { movieId: string } }) {
     const movieId=params.movieId;
    try {
        await serverAuth(req);

        
        
        if (typeof movieId !== "string") {
            throw new Error('Invalid Id');
        }
        if (!movieId) {
            throw new Error("Missing Id");
        }
        const movies = await prismadb.movie.findUnique({
            where: {
                id: movieId
            }
        });

        return NextResponse.json(movies);

    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}