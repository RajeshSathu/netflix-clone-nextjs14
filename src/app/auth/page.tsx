
"use client"
import axios from 'axios';

import { useState } from "react";
import { useCallback } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

import Input from "../components/input/page";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';



const Auth = () => {
    
    const router = useRouter();
    const [email, setEmail] = useState(' ');
    const [name, setName] = useState(' ');
    const [password , setPassword]  = useState(' ');
    const [varient, setVarient] = useState('login');

    const toggleVarient = useCallback(() => {
        setVarient((currentVarient)=>currentVarient==='login'?'register':'login')
    }, [])
    
    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect:false,
                callbackUrl: '/'
                
            });
            router.push('/Profiles');
            
        }
        catch (error) {
            console.log(error);
        }
    }, [email, password,router]);
    
    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            }); 
            login();
        }
        catch (error) {
            console.log(error);
        }
    }, [email, name, password,login]);
    

    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
            <div className="bg-black bg-opacity-50 w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png " alt="logo" className="h-12"></img>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 p-16 self-center mt-2 max-w-md lg:w-2/5 rounded-md w-full">
                        <h2 className="text-white text-4xl font-semibold mb-8">{varient==='login'? "Sign in":"Register" }</h2>
                        <div className="flex flex-col gap-4">
                           { varient==='register' && (<Input
                                
                                label="Username"
                                onChange={(ev: any) => setName(ev.target.value) }
                                value={name}
                                type='text'                            
                            />)}
                            <Input
                               
                                label="email"
                                onChange={(ev: any) => setEmail(ev.target.value)
                                }
                                
                                type='email'
                                value={email}
                                
                            
                            />
                             <Input
                                
                                label="password"
                                onChange={(ev:any) => setPassword(ev.target.value) }
                                type="password"
                                value={password}
                            
                            />
                            <button onClick={varient==='login'?login:register} className="bg-red-600 py-3 text-white rounded-md w-full mt-4 text-sm hover:bg-red-700 transition ">
                                {varient==='login'?"Login":"Sign up"}
                            </button>
                            <div className="flex flex-row items-center gap-4 mt-2 justify-center">
                                <div className="w-10 h-10 bg-white rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transistion" onClick={()=>signIn('google',{callbackUrl:'/Profiles'})}>
                                    <FcGoogle size={ 30} />

                                </div>
                                <button className="w-10 h-10 bg-white rounded-full
                                flex
                                items-center
                                justify-center
                                cursor-pointer
                                hover:opacity-80
                                transistion" onClick={()=>signIn('github',{callbackUrl:'/Profiles'})}>
                                    <FaGithub/>

                                </button>
                            </div>
                            <p className="text-neutral-500 ">
                                {varient==='login'?"First time using Netflix?":'Already have an account?'}
                                <span onClick={toggleVarient} className="text-white ml-1 hover:underline cursor-pointer w-full text-sm">
                                    {varient==='login'?'Create an account':"Login" }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;
 