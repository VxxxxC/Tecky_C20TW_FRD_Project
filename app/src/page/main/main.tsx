import React from "react";
import BackgroundAnimation from "../elements/background";
import ItemTest from "../elements/item_test";
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
        <ItemTest/>
        </div>
    )
}
export default Main