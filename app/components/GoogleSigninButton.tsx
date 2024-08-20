"use client";

import { Button } from "@/components/ui/button";
import GoogleIcon from "../../public/google.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";


export default function GoogleSigninButton() {
    return (
        <Button onClick={()=>signIn("google")} variant="outline" size="icon" >
        <Image src={GoogleIcon } alt="Google icon" className="w-6 h-6" />
         
    </Button>

    )
    
} 




