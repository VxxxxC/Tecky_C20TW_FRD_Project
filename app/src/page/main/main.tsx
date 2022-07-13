import React from "react";
import { Image as LazyLoadImage } from "react-image-and-background-image-fade";
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
        <LazyLoadImage
            src="https://placeimg.com/1000/800/arch"
            width="500px"
            height="500px"
            // alt="flying cat"
            // title="Neon cat"
        />
        </div>
    )
}
export default Main