import React from "react";
import ItemTest from "../elements/item_test";
import { Image } from "react-image-and-background-image-fade";
import useWindowDimensions from "../../hook/useWindowDimensions";
import "./hightlights.scss";

function Highlights() {
  const { height, width } = useWindowDimensions();

  const desktopCarouselStyle = `carousel hightlights-carousel rounded-box bg-transparent shadow-inner p-3`;
  const mobileCarouselStyle = `carousel-vertical hightlights-carousel rounded-box bg-transparent shadow-inner p-3`;
  const desktopCard = `hightlights-card card card-side bg-transparent shadow-xl rounded-3xl`;
  const mobileCard = `hightlights-card`;

  return width < 600 ? (
    // Mobile Version //
    <>
      <div className="mt-6 hightlights-mobile flex flex-col justify-center p-5 rounded-3xl shadow-inner">
        <div
          className="
        hightlights-mobile-title p-5 text-primary-content
        font-semibold font-sans subpixel-antialiased text-4xl
        drop-shadow-text
        ">
          Hightlights.
        </div>
        <div className="mobileCarouselStyle">
          <ItemTest />
        </div>
      </div>
    </>
  ) : (
    // Desktop Version //
    <div className="mt-6 hightlights-card card card-side bg-transparent shadow-xl rounded-3xl drop-shadow-md">
      <div className="hightlights-title card-title p-2 text-primary-content drop-shadow-text">
        Hightlights
      </div>
      <div className={desktopCarouselStyle}>
        <ItemTest />
      </div>
    </div>
  );
}

export default Highlights;

// {/* <Image
//     src="https://placeimg.com/400/225/arch"
//     alt="flying cat"
//     title="Neon cat"
//     width="100%"
//     height="100%"
// /> */}
