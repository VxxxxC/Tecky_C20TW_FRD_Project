import React from "react";
import BackgroundAnimation from "../elements/background";
import Category from "./category";
import Highlights from "./hightlights";
import Welcome from "./welcome";



function Main(){
    return(
        <div>
        {/* <Welcome/> */}
        <BackgroundAnimation/>
        <Category/>
        <Highlights/>
        </div>
    )
}
export default Main