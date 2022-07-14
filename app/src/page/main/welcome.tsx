import React, { Suspense } from "react";
import "./main.scss"

function Welcome() {
  return (
    <>
    <div className="z-2 grid place-content-center h-96 bg-transparent shadow-inner">
      <div className="text-5xl drop-shadow-text w-50 h-50 text-primary-content text-center rounded-full">
            Unique Piece. Welcome.
      </div>
    </div>
    </>
    // <div className="hero min-h-screen main_welcome" >
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
    //       <p className="mb-5">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Welcome;
