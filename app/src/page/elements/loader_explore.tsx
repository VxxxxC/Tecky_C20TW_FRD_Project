import React from "react";
import RotateLoader from "react-spinners/RotateLoader";

function ExploreLoader(props: any) {

    return (
      <div className="relative flex justify-center items-center mt-20">
          <div>
        <RotateLoader color={props.color?props.color:"grey"} />
          </div>
      </div>
    )
}

export default ExploreLoader;

