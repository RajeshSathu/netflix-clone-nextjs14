'use client'

import { useRouter } from "next/navigation";
import useCurrentUser from "../../../hooks/useCurrentUser"
import { useCallback } from "react";


const images = [
    '/images/default-blue.png',
    '/images/default-red.png',
    '/images/default-slate.png',
    '/images/default-green.png',
    
]

interface UserCardProps{
    name: string;
}

const UserCard: React.FC<UserCardProps> = ({name})=>{
    const imgSrc = images[Math.floor(Math.random() * 4)];
    return (
        <div className="group flex-row w-44 mx-auto">
            <div className="w-44 h-44 rounded-md flex
             items-center 
            justify-center 
            border-2 
            border-transparent
            group-hover:border-white
            group-hover:cursor-pointer
            overflow-hidden">
                <img draggable={false} className="w-max h-max object-contain" src={imgSrc} alt="" />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {name}
            </div>

        </div>
    )
}


export default function Profiles() {
    const router = useRouter();
    const { data: currentUser } = useCurrentUser();
    const selectProfile = useCallback(() => {
        router.push('/');
    },[router])
    return (
        <div className="text-white flex items-center h-full justify-center">
            <div className="flex flex-col"> 
                <h1 className="text-3xl md:text-6xl text-white text-center  ">
                    who is watching?
                </h1>
                <div onClick={() => selectProfile()}>
                    <UserCard name={currentUser?.name } />
                </div>

            </div>
         
      </div>
)
}