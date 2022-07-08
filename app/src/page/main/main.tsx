import React from "react";
import Category from "./category";
import Highlights from "./hightlights";
import Welcome from "./welcome";

function Main(){
    return(
        <div>
        <Welcome/>
        <Category/>
        <Highlights/>
        </div>
    )
}
export default Main