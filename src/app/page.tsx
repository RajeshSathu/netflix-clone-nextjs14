"use client"
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';
import useCurrentUser from "../../hooks/useCurrentUser";
import { NextRequest, NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import { SetStateAction, useEffect, useState } from 'react';
import { Urbanist } from 'next/font/google';
import Navbar from "./components/Navbar";
import Billboard from './components/Billboard';
import useMovieList from '../../hooks/useMovieList';
import MovieList from './components/MovieList';
import useFavorites from '../../hooks/useFavorites';
import InfoModal from './components/InfoModal';
import useInfoModalStore from '../../hooks/useInfoModalStore';

export const dynamic = "force-dynamic";

export default function Home() {
  
 
  const { data: favorites = [] } = useFavorites();
  const { data: movies = [] } = useMovieList();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList data={movies} title="Trending Now" />
        <MovieList data={favorites} title="My List"/>
      </div>
      
      
    </>
    
  )
}
