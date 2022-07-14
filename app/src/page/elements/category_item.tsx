import React from "react";
import { Image as LazyLoadImage } from "react-image-and-background-image-fade";
import "./item.scss"
import LargeItem from "./large_item";

// type propTypes = {
//     image: string,
//     title: string,
//     price: number
// }

function Item() {

    let items = [
        { img: "img/1.jpg", name: "test item 1", price : 80},
        { img: "img/2.jpg", name: "test item 2", price : 500},
        { img: "img/3.jpg", name: "test item 3", price : 4000},
        { img: "img/4.jpg", name: "test item 4", price : 18000},
    ]

    return(
    <>
        <div className="grid grid-cols-3 gap-4">
            <div>1</div>
            <div>1</div>
            <div>1</div>
        </div>

    
    </>
    // <div className="category card w-300 bg-base-50 shadow-xl image-full">
    // <figure>
    //     <LazyLoadImage
    //         src="https://placeimg.com/400/225/arch"
    //         // alt="flying cat"
    //         // title="Neon cat"
    //     />
    //     {/* // <img src="https://placeimg.com/400/225/arch"/> */}
    //     </figure>
    // </div>
    )
    
}

export default Item;