
import bcrypt from 'bcrypt';
import  { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import prismadb from '../../../../lib/prismadb';

export async function POST(  req:Request) {
    try {
        const { email, name, password }: any = await req.json();
        console.log(email);
        if (email == null) {
            throw new Error('Email Undefined');
        }
        // const existingUser = await prismadb.User.findUnique({
        //     where: { email },
        // })
            
    
        // if (existingUser) {
        //     return (NextResponse.json({
        //         error: 'Email taken'
        //     }))
        // }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified:new Date()
            }
        })
        return NextResponse.json(user);
    } catch(error) {
        return NextResponse.json({
            error:`something went wrong:${error}`
        })
    }

        
    }
