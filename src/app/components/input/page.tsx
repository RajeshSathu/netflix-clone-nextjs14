import React from 'react';


interface InputProps{
    id: string;
    onChange: any;
    value: string;
    label: string;
    type: string;
}

const Input: React.FC<InputProps> = ({
    id,
    onChange,
    value,
    label,
    type
}) => {
    return (
        <div className="relative">
            <input
                
                onChange={onChange}
                type={type}
                value={value}
                id={id}
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
            <label htmlFor={id} className="
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
            {label}
            </label>  

        </div>
       
    )
}
export default Input;