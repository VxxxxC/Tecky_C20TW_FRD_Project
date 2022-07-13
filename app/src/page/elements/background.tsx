import React from 'react';
import "./background.scss"

function BackgroundAnimation(){
    return (
      <>
        <div className="overflow-hidden shadow-inner min-h-[50vh] rounded-lg bg-gray-50 flex items-center justify-center px-16">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob example"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 example"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 example"></div>
          <div className="relative text-5xl drop-shadow-md w-50 h-50 text-primary-content text-center rounded-full">
            Unique Piece. Welcome.
            </div>
        </div>
        </div>
      </>
    )
}

export default BackgroundAnimation