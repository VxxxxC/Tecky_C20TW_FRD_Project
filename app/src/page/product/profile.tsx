import React, { useEffect, useState, Suspense } from "react";
import { Image } from "react-image-and-background-image-fade";
import useWindowDimensions from "../../hook/useWindowDimensions";
import "./profile.scss";
import { Button, Tabs, Theme } from 'react-daisyui'
// import ProductDetail from "./details";
import UniLoader from "../elements/loader";

function ProductProfile() {
  const { height, width } = useWindowDimensions();

  const [count, setCount] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  const responsive = width < 600 ? true : false;
  const mobile = `flex-col`;
  const desktop = `flex-row`;
  const mobileCol1 = `self-center`;
  const mobileCol2 = `grad-bg p-4 self-center`;
  const desktopRow1 = ``;
  const desktopRow2 = `grad-bg py-6 px-8 min-w-[38%] bor`;
  const ProductDetail = React.lazy(() :any => 
  {  return new Promise(resolve => {
    setTimeout(() => resolve(import("./details")), 500);
    clearTimeout();
  })});
  // import('./'));
  const ProductOwners = React.lazy(() :any => 
  {  return new Promise(resolve => {
    setTimeout(() => resolve(import("./owners")), 500);
    clearTimeout();
  })});
  const ProductHistory = React.lazy(() :any =>
  {  return new Promise(resolve => {
    setTimeout(() => resolve(import("./history")), 500);
    clearTimeout();
  })});
  console.log(count)
  return (
    <div
      className={`min-h-[70vh] flex gap-x-20 gap-y-8 justify-center ${
        responsive ? mobile : desktop
      }`}
    >
      <div className={responsive ? mobileCol1 : desktopRow1}>
        <div
        // outline outline-offset-4 outline-2 outline-dashed outline-primary
        // outline outline-offset-2 outline-2 outline-secondary
          className={`drop-shadow-lg rounded-2xl ${
            responsive ? "h-[80vw] w-[80vw]" : "mt-8 h-[30vw] w-[30vw]"
          }`}
        >
          <Image
            className="object-cover rounded-2xl "
            src="https://placeimg.com/400/225/arch"
            alt="flying cat"
            title="Neon cat"
            width="100%"
            height="100%"
            renderLoader={({ hasLoaded, hasFailed }: any) => (
              <div className="rounded-2xl font-mono loader animate-pulse content-center flex items-center">
                {hasFailed && (
                  <div className="rounded-2xl animate-pulse text-center flex items-center">
                    Opps, there's a problem loading the image. Please try again.
                    :)
                  </div>
                )}
                {hasLoaded && (
                  <span className="animate-pulse text-center">
                    I'll be here for (transitionTime) milliseconds after load
                  </span>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <div
        className={`shadow-inner rounded-lg ${
          responsive ? mobileCol2 : desktopRow2
        }`}
      >
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-5 text-3xl font-bold">
            Product Name
          </div>
          <div className="col-start-5 col-end-6">
            <button className="btn btn-primary rounded-lg">like</button>
          </div>
          <div className="col-start-6 col-end-7">
            <button className="btn btn-ghost rounded-lg">...</button>
          </div>
          <div className="col-start-1 col-end-7">available</div>
          <div className="py-3 col-start-1 col-end-4">Creator</div>
          <div className="py-3 col-start-4 col-end-7">Collection</div>
          <div className="col-start-1 col-end-4">
            <div className="avatar">
              <div className="mx-3 w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
              </div>
              <div className="">Creator Name</div>
            </div>
          </div>
          <div className="col-start-4 col-end-7">
            <div className="avatar">
              <div className="mx-3 w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://placeimg.com/192/192/people" />
              </div>
              <div className="">Collection Name</div>
            </div>
          </div>
        </div>
        <Tabs value={count} variant="bordered" className="-mt-3 cursor-default">
        <Tabs.Tab className={`${count==1?"tab-active":""} tab-bordered p-1`} value={()=>{setCount(1)}}>Details</Tabs.Tab>
        <Tabs.Tab className={`${count==2?"tab-active":""} tab-bordered p-1`} value={()=>{setCount(2)}}>Owners</Tabs.Tab>
        <Tabs.Tab className={`${count==3?"tab-active":""} tab-bordered p-1`} value={()=>{setCount(3)}}>History</Tabs.Tab>
      </Tabs>
        <div className="mt-2 h-96 border-2 rounded-lg">
          {count==1?<div>
          {/* Product Details */}
          <Suspense fallback={<UniLoader/>}>
            <ProductDetail/>
          </Suspense>
          {/* <FlexiblePopupSelect/> */}
          </div>:""}
          {count==2?<div>
          {/* Product Oweners */}
          <Suspense fallback={<UniLoader/>}>
            <ProductOwners/>
          </Suspense>
          </div>:""}
          {count==3?<div>
          {/* Product History */}
          <Suspense fallback={<UniLoader/>}>
            <ProductHistory/>
          </Suspense>
          </div>:""}
        </div>
        
      </div>
    </div>
  );
}

export default ProductProfile;
