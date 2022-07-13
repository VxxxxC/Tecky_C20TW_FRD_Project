import React, { Suspense } from "react";
import { Image } from "react-image-and-background-image-fade";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./large_item.scss"

// class Items extends React.Component {
//     constructor(props) {
//       super(props);
//       console.log('app created');
//     }
//     const people = [];
    
//     for (let i = 0; i < 10; i++) {
//         people.push({
//             name: chance.first(),
//             country: chance.country({ full: true })
//         });
//     }
//     this.state = { people };
  
//     render() {
//       console.log('call render');
//       return (
//         <div>
//         </div>
//       )
//     }
//   }
//     constructor(props) {
//         super(props);
    
//         const people = [];
    
//         for (let i = 0; i < 10; i++) {
//             people.push({
//                 name: chance.first(),
//                 country: chance.country({ full: true })
//             });
//         }
    
//         this.state = { people };
//     }
// }

function LargeItem() {
    // const products = props.products;
    let items = [
        { img: "img/1.jpg", name: "test item 1", price : 80},
        { img: "img/2.jpg", name: "test item 2", price : 500},
        { img: "img/3.jpg", name: "test item 3", price : 4000},
        { img: "img/4.jpg", name: "test item 4", price : 18000},
    ]
    
  return (
    // <div className="card w-3/12 h-96 bg-base-100 shadow-xl rounded-2xl">
    //   <figure>
    //     <Image src="https://placeimg.com/400/225/arch" alt="Shoes" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       Shoes!
    //       <div className="badge badge-secondary">NEW</div>
    //     </h2>
    //     <div className="card-actions justify-end">
    //       <div className="badge badge-outline">Fashion</div>
    //       <div className="badge badge-outline">Products</div>
    //     </div>
    //   </div>
    // </div>
    <div className="item overflow-hidden m-5 w-3/12 bg-base-100 shadow-xl rounded-lg">
        <div className="h-96">
        <Image className="object-cover" src="https://placeimg.com/400/225/arch" width="100%" height="100%"
        renderLoader={({ hasLoaded, hasFailed }:any) => (
            <div className="loader">
              I'm loading here!
              {hasFailed && <span className="animate-pulse text-center">Opps, there's a problem loading the image. Please try again. :)</span>}
              {hasLoaded && (
                <span className="text-center">
                  I'll be here for (transitionTime) milliseconds after load
                </span>
              )}
            </div>
          )}
        />
        </div>
        <div className = "font-medium m-2">
            If a dog chews shoes whose shoes does he choose?
        </div>
        <div className = "font-light m-2">
            price 
        </div>
  </div>
  )
}

export default LargeItem