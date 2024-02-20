
import type { NextRequest } from "next/server";
import { getSession } from 'next-auth/react';

import prismadb from "./prismadb";

const serverAuth = async (req: NextRequest) => {
    const requestForNextAuth = {
   headers: {
     cookie: req.headers.get('cookie') ?? undefined,
   }, 
 };
    
    const session = await getSession({ req: requestForNextAuth });
    
    
    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }
    
    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session?.user?.email
        }
    });
    

    if (!currentUser) {
        throw new Error('Not Signed In');
        
    }
    return { currentUser};
}
export default serverAuth;