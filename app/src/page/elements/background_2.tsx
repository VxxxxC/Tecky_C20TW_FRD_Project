import React from 'react';
import "./background.scss"
// import './background.css'

function BackgroundAnimation2(props: any){
  const text = props.text
    return (
      <div className="pt-3">
        <div className="h-screen rounded-lg bg-gray-50 flex items-center justify-center px-16">
        <div className="relative w-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-uniblue rounded-full  filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-uniyellow rounded-full  filter blur-2xl opacity-70 animation-delay-2000 animate-blob"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-unibrown rounded-full  filter blur-2xl opacity-70 animation-delay-4000 animate-blob"></div>
          {/* <div className="relative text-5xl drop-shadow-md w-50 h-50 text-primary-content text-center rounded-full"> */}
            {text}
          {/* </div> */}
        </div>
        </div>
      </div>
    )
}

export default BackgroundAnimation2