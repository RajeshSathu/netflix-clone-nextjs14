import { NextRequest, NextResponse } from "next/server";
import serverAuth from "../../../../lib/serverAuth";
import { without } from "lodash";

interface movieIdProps{
    movieId:string
}



export async function POST(req: NextRequest) {
    const { currentUser } = await serverAuth(req);
   
    
    let { movieId } = await req.json();;
    console.log( movieId );
    
 
    const existingMovie = await prismadb.movie.findUnique({
        where: {
            id: movieId,
        }
    });

    if (!existingMovie) {
        throw new Error('Invalid ID');
    }
    
    const user = await prismadb.user.update({
        where: {
            email: currentUser.email ,
            
        },
        data: {
            favoriteIds: {
                push: movieId
            }
        }
    });

    return NextResponse.json(user);
    
    

}
export async function DELETE(req: NextRequest) {
  const { currentUser } = await serverAuth(req);

  const { movieId } = await req.json();

  const existingMovie = await prismadb.movie.findUnique({
    where: {
      id: movieId,
    },
  });
  if (!existingMovie) {
    throw new Error("Invalid ID");
  }

  const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

  const updatedUser = await prismadb.user.update({
    where: {
      email: currentUser.email || "",
    },
    data: {
      favoriteIds: updatedFavoriteIds,
    },
  });
  return NextResponse.json(updatedUser);
}