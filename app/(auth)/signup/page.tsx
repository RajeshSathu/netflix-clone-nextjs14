
import React from 'react'
import {Input} from '../../../components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import GithubSignInButton from "@/app/components/GithubSignInButton"
import GoogleSigninButton from '@/app/components/GoogleSigninButton';


const signup = () => {
  return (
    <div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
      <form method="post" action="/api/auth/signin">
        <h1 className='text-3xl font-semibold text-white' >Sign Up</h1>
        <div>
        <Input
          type="email"
          name="email"
          placeholder='Email'
          className='bg-[#333] placeholder:text-gray-400 w-full inline-block mt-2' />
        <Button
          type="submit"
          variant="destructive"
          className='w-full bg-[e50914] mt-2'
        >Sign up

          </Button>
          </div>
      </form>
      <div className='text-gray-500 text-sm mt-2'>
        Alredy Have a account?{" "}
        <Link href="/login" className="text-white hover:underline">Log in now</Link>
      </div>
      <div className='mt-6 flex items-center justify-center gap-x-3 w-full'>
        <GithubSignInButton />
        <GoogleSigninButton/>
      </div>

    </div>
  )
}

export default signup
