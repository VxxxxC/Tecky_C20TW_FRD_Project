import React, { useEffect, useState } from "react";
import ItemTest from "../elements/item_test";
import { Image } from "react-image-and-background-image-fade";
import useWindowDimensions from "../../hook/useWindowDimensions";
import "./hightlights.scss";
import ProductItem from "../elements/productItem";
import axios from "axios";
import ProductItemProps from "../elements/productItem_props";
import UniLoader from "../elements/loader";
import { ListItem } from "../explore/main";
import { useNavigate } from "react-router-dom";

const host = process.env.REACT_APP_DEV_API
// const host = `http://localhost:8080`

function Highlights() {
  const [highlightsItems, setHighlightsItems] = useState<ListItem[]>();

  const [isloaded, serIsloaded] = useState(false)
  const navigate = useNavigate();

  useEffect( () => {
    fetch(`${host}/gethighlights`)
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(`${host}/gethighlights`)
        console.log(result)
        setHighlightsItems(result)
        serIsloaded(true)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("what happened: ", error);
      })
  }, []) //Empty array for deps.
  
  useEffect(() => {
    console.log(highlightsItems);
  }, [highlightsItems]);

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
          {
            //TODO FIXME
                          highlightsItems ? (
                            highlightsItems.map((item) => (
                              <div
                              onClick={() =>
                                navigate(`/profile/${item.image.replace(/\D/g, "")}`)
                              }
                              >
                                <ProductItemProps
                                  name={item.name}
                                  img={item.image}
                                  price={item.price}
                                  nft_address={item.nft_address}
                                />
                              </div>
                            ))
                          ) : (
                            // <div className="col-start-1 col-end-8 h-screen">
                              <UniLoader />
                            /* // </div> */
                          )
          }
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
      {
            //TODO FIXME
                          highlightsItems ? (
                            highlightsItems.map((item) => (
                              <div
                              onClick={() =>
                                navigate(`/profile/${item.image.replace(/\D/g, "")}`)
                              }
                              >
                                <ProductItemProps
                                  name={item.name}
                                  img={item.image}
                                  price={item.price}
                                  nft_address={item.nft_address}
                                />
                              </div>
                            ))
                          ) : (
                            <div className="mx-[500px] mt-[100px] w-3/12 h-96">
                              {/* <UniLoader /> */}
                            </div>
                          )
          }
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
