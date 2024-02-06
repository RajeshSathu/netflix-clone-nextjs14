import { NextRequest, NextResponse } from "next/server";   

import serverAuth from "../../../../lib/serverAuth";

export async function GET(req:NextRequest) {
    
        try {
          const { currentUser } = await serverAuth(req);

            const favoritedMovies = await prismadb.movie.findMany({
                where: {
                    id: {
                      in:currentUser.favoriteIds,
                  }
              }
          });
          return NextResponse.json(favoritedMovies);
        } catch (error) {
          console.log({ error });
          return NextResponse.json({ error });
        }
}