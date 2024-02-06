'use client' // Error components must be Client Components
 
import { useEffect } from 'react';
import { useState } from 'react';
 

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
      console.error(error);
      setTemp(error);
  }, [error])
  
    const [temp, setTemp] =  useState<null| Error & { digest?: string }>(null);
  return (
      <div>
          

          <h2>Something went wrong! </h2>
            <h1> {`${temp}`}</h1>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}