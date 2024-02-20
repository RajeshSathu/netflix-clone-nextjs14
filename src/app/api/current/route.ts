import { NextApiRequest, NextApiResponse } from 'next';

import serverAuth from "../../../../lib/serverAuth";
import { NextRequest, NextResponse } from 'next/server';
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  
   
    const { currentUser } = await serverAuth(req);
    
    if(currentUser)
        return NextResponse.json(currentUser);
    return NextResponse.json(null);
        
       
}

