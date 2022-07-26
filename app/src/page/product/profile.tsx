import React, { useEffect, useState, Suspense } from "react";
import { Image } from "react-image-and-background-image-fade";
import useWindowDimensions from "../../hook/useWindowDimensions";
import "./profile.scss";
import { Button, Tabs, Theme } from "react-daisyui";
// import ProductDetail from "./details";
import UniLoader from "../elements/loader";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductProfile() {
  const { id }: string | any = useParams();
  const productId: any = id;
  console.log({ productId });

  interface ProductDetail {
    category_id: number; //TODO:
    content: string;
    created_at: string;
    credit_by: string | null;
    id: number;
    image: string;
    name: string;
    nft_address: string;
    owner_id: number; //TODO:
    price: number;
    quantity: number;
    series_id: number | null; //TODO:
    status: number;
    type: string;
    updated_at: string;
  }
  const [getDetail, setGetDetail]: any = useState<ProductDetail>();
  console.log(getDetail?.name);

  useEffect(() => {
    console.log(getDetail?.productDetail);
    console.log(getDetail?.owner);
    console.log(getDetail?.series);
  }, [getDetail]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DEV_API}/profile/${productId}`, productId)
      .then(function (response) {
        console.log(response);
        setGetDetail(response.data);
      });
  }, []);

  const { height, width } = useWindowDimensions();

  const [count, setCount] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  const responsive = width < 600 ? true : false;
  const mobile = `flex-col`;
  const desktop = `flex-row`;
  const mobileCol1 = `self-center`;
  const mobileCol2 = `grad-bg p-4 self-center`;
  const desktopRow1 = ``;
  const desktopRow2 = `grad-bg py-6 px-8 min-w-[38%] bor`;
  const ProductDetail = React.lazy((): any => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("./details")), 500);
      clearTimeout();
    });
  });
  // import('./'));
  const ProductOwners = React.lazy((): any => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("./owners")), 500);
      clearTimeout();
    });
  });
  const ProductHistory = React.lazy((): any => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(import("./history")), 500);
      clearTimeout();
    });
  });
  console.log(count);
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
            src={getDetail?.productDetail.image}
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
            {getDetail?.productDetail.name}
          </div>
          <div className="col-start-5 col-end-6">
            {/* <button className="btn btn-primary rounded-lg">Purchase</button> */}
            <button
              type="button"
              className="btn btn-primary rounded-lg hover:bg-[white] hover:text-[black]"
            >
              <svg
                aria-hidden="true"
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              </svg>
              Buy now
            </button>
          </div>
          <div className="col-start-6 col-end-7">
            <button className="btn btn-ghost rounded-lg">border-2</button>
          </div>
          <div className="col-start-1 col-end-7">available</div>
          <div className="py-3 col-start-1 col-end-4">Creator</div>
          <div className="py-3 col-start-4 col-end-7">Collection</div>
          <div className="col-start-1 col-end-4">
            <div className="avatar">
              <div className="mx-3 w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={getDetail?.owner[0].image} />
              </div>
              <div className="">{getDetail?.owner[0].name}</div>
            </div>
          </div>
          <div className="col-start-4 col-end-7">
            <div className="avatar">
              <div className="mx-3 w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={getDetail?.owner[0].image} />
              </div>
              <div className="">
                {getDetail?.series.length == 0
                  ? "Null"
                  : getDetail?.series[0].name}
              </div>
            </div>
          </div>
        </div>
        <Tabs value={count} variant="bordered" className="-mt-3 cursor-default">
          <Tabs.Tab
            className={`${count == 1 ? "tab-active" : ""} tab-bordered p-1`}
            value={() => {
              setCount(1);
            }}
          >
            Details
          </Tabs.Tab>
          <Tabs.Tab
            className={`${count == 2 ? "tab-active" : ""} tab-bordered p-1`}
            value={() => {
              setCount(2);
            }}
          >
            Owners
          </Tabs.Tab>
          <Tabs.Tab
            className={`${count == 3 ? "tab-active" : ""} tab-bordered p-1`}
            value={() => {
              setCount(3);
            }}
          >
            History
          </Tabs.Tab>
        </Tabs>
        <div className="mt-2 h-96 border-2 rounded-lg">
          {count == 1 ? (
            <div>
              {/* Product Details */}
              <Suspense fallback={<UniLoader />}>
                <ProductDetail content={getDetail?.productDetail.content} />
              </Suspense>
              {/* <FlexiblePopupSelect/> */}
            </div>
          ) : (
            ""
          )}
          {count == 2 ? (
            <div>
              {/* Product Oweners */}
              <Suspense fallback={<UniLoader />}>
                <ProductOwners owner={getDetail?.owner} />
              </Suspense>
            </div>
          ) : (
            ""
          )}
          {count == 3 ? (
            <div>
              {/* Product History */}
              <Suspense fallback={<UniLoader />}>
                <ProductHistory
                  address={getDetail?.productDetail.nft_address}
                />
              </Suspense>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductProfile;
