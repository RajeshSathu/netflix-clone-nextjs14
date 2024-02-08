
import { NextAuthOptions } from "next-auth";

import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prismadb from './prismadb'
import { compare } from 'bcrypt';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID||'',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET||''
        }),
         GitHubProvider({
            clientId: process.env.GITHUB_ID||'',
            clientSecret: process.env.GITHUB_SECRET||''
            }),
        CredentialsProvider({
            id: 'credentials',
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if (typeof credentials?.email !== "string") throw new Error('Enter correct email ')
                const {email,password } =credentials;
                
                if (!email || !password) {
                    console.log('Email and pasword required')
                    throw new Error('Enter email and password')
                }
                const user = await prismadb.user.findUnique({
                    where: {
                        
                         email,
                    }
                });
                if (!user || !user.hashedPassword) {
                    console.log("Email does not exist");
                   
                    return null

                }
                const isCorrectPassword = await compare(
                    credentials.password,
                    user.hashedPassword);
                if (!isCorrectPassword) {
                    console.log("Incorrect Password")
                    return null
                }
               
                return user;
               
            }
        })
    ],
      
    pages: {
        signIn: '/auth',
        error: '/auth/error'
    },
    debug: process.env.NODE_ENV !== 'production',
   
    adapter: PrismaAdapter(prismadb),
    
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET
   
    
} ;export const dynamic = "force-dynamic";