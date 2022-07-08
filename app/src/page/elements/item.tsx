import React from "react";
import "./item.scss"

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
    <div className="category card w-300 bg-base-50 shadow-xl image-full">
    <figure><img src="https://placeimg.com/400/225/arch"/></figure>
    </div>
    )
    
}

export default Item;