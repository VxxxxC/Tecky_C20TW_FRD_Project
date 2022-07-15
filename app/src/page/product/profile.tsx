import React, { useEffect, useState } from "react";
import { Image } from "react-image-and-background-image-fade";
import useWindowDimensions from "../../hook/useWindowDimensions";
import "./profile.scss";

function ProductProfile() {
  const { height, width } = useWindowDimensions();

  const responsive = width < 600 ? true : false;
  const mobile = `flex-col`;
  const desktop = `flex-row`;
  const mobileCol1 = `self-center`;
  const mobileCol2 = `grad-bg p-4 self-center`;
  const desktopRow1 = ``;
  const desktopRow2 = `grad-bg py-6 px-8 min-w-[38%] bor`;

  return (
    <div
      className={`min-h-[70vh] flex gap-x-20 gap-y-8 justify-center ${
        responsive ? mobile : desktop
      }`}
    >
      <div className={responsive ? mobileCol1 : desktopRow1}>
        <div
          className={`bg-indigo-300 ${
            responsive ? "h-[80vw] w-[80vw]" : "h-[30vw] w-[30vw]"
          }`}
        >
          <Image
            className="object-cover rounded-2xl"
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
        <div className="mt-5 tabs">
          <a className="tab tab-bordered tab-active">Details</a>
          <a className="tab tab-bordered">Owners</a>
          <a className="tab tab-bordered">History</a>
        </div>
      </div>
    </div>
  );
}

export default ProductProfile;
