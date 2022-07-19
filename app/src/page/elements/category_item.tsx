import React from "react";
import { Image as LazyLoadImage } from "react-image-and-background-image-fade";
// import "./CategoryItem.scss"

// type propTypes = {
//     image: string,
//     title: string,
//     price: number
// }

function CategoryItem() {

    let CategoryItems = [
        { img: "img/1.jpg", name: "test CategoryItem 1", price : 80},
        { img: "img/2.jpg", name: "test CategoryItem 2", price : 500},
        { img: "img/3.jpg", name: "test CategoryItem 3", price : 4000},
        { img: "img/4.jpg", name: "test CategoryItem 4", price : 18000},
    ]

    return(


            <div className="">
            {/* <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div> */}
            </div>  

    // <div className="categoryItem card w-300 bg-base-50 shadow-xl image-full">
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

export default CategoryItem;