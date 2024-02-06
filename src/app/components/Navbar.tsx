import React from 'react'

import NavbarItem from './NavbarItem'
import { IoChevronDown } from "react-icons/io5";
import MobileMenu from './MobileMenu';
import { useState, useCallback } from 'react';
import { BsBell, BsSearch } from 'react-icons/bs';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import AccountMenu from './AccountMenu';

function Navbar() {
    const [showMobileMenu, setShowMoblieMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
        
    },[])
    
    const toggleMobileMenu = useCallback(() => {
        setShowMoblieMenu((current) => !current
        )
    },[])
  return (
      <div className="w-full fixed z-40">
          
          <div className='
          px-4
          md:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          bg-zinc-900
          bg-opacity-90'>
              <img className='h-4 lg:h-7' src="/images/logo.png" alt="logo"/>
              <div className='
              flex-row
              ml-8
              gap-7
              hidden
              lg:flex'>
                  <NavbarItem label="Home" />
                  <NavbarItem label="Series" />
                  <NavbarItem label="Films" />
                  <NavbarItem label="New & Popular" />
                  <NavbarItem label="My List" />
                  <NavbarItem label="Browser by languages"/>
              </div>
              <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                  <p className="text-white text-sm">Browse</p>
                  <IoChevronDown className={`text-white transition ${showMobileMenu? "rotate-180" : "rotate-0"}`} />
                  <MobileMenu visible={showMobileMenu}/>
              </div>
              <div className='flex flex-row ml-auto gap-7 items-center'>
                  <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'> 
                  <BsSearch className="w-6"/>
                  </div>
                  <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'> 
                  <BsBell className='w-6'/>
                  </div>
                  <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer relative'>
                      <div className='flex flex-row items-center gap-2 cursor-pointer relative'>
                          <div  className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                              <img src="/images/default-blue.png"/>
                              
                          </div>
                          <IoChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ?'rotate-180':'rotate-0'}`} />
                          <AccountMenu visible={showAccountMenu } />
                      </div>
                  </div>
          </div>
          
      
          </div>
          </div>
  )
}

export default Navbar;
