import React from "react";
import useWindowDimensions from "../../hook/useWindowDimensions";
import CategoryItem from "../elements/category_item";
import Item from "../elements/item";

function Category() {
    const {height, width} = useWindowDimensions()
    return(
        <div className="
        carousel carousel-start p-4 space-x-4 rounded-box
        mt-6 h-96 text-primary-content text-center rounded-3xl drop-shadow-md border-2">
            
            <CategoryItem/>
            <div className="carousel-item drop-shadow-md border-2">
                <div className="text-5xl text-center ">
                this is a category
                </div>  
            </div>
            <div className="carousel-item drop-shadow-md border-2">
                <div className="text-5xl text-center ">
                this is a category
                </div>  
            </div>
            <div className="carousel-item drop-shadow-md border-2">
                <div className="text-5xl text-center ">
                this is a category
                </div>  
            </div>
        </div>
    )
}

export default Category;