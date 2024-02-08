
export const dynamic = "force-dynamic"
import React from 'react';


   



const Input = ({params}:any|undefined) => {
    return (
        <div className="relative">
            <input
                
                onChange={params.onChange}
                type={params.type}
                value={params.value}
                
                className="
                block
                rounded-md
                px-6
                pt-6
                w-full
                text-md
                text-white
                bg-neutral-700
                focus:outline-none
                focus:ring-0
                peer
        "
                placeholder=" " />
            <label htmlFor={params.type} className="
            absolute
            text-md
            text-zinc-400
            duration-150
            transform
            -translate-y-2.5
            scale-75
            top-4
            z-10
            origin-[0]
            left-6
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:-translate-y-4
            peer-focus:scale-75
            peer-focus:-translate-y-4

            ">
            {params.label}
            </label>  

        </div>
       
    )
}
export default Input;