import React, { useEffect, useState } from "react";
import { Image } from "react-image-and-background-image-fade";
// import LargeItem from './large_item';
import "./large_item.scss";

function ProductItemProps(props : any) {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const img = props.img
  const name = props.name
  const price = props.price
  const nft_address = props.nft_address
    return (
      <>
          <div className="hover:-translate-y-2 ease-in-out duration-200 item overflow-hidden m-5 w-3/12 bg-base-100 shadow-xl rounded-lg">
            <div className="h-96">
              <Image
                className="object-cover"
                src={`${process.env.REACT_APP_URL}/${img}`}
                width="100%"
                height="100%"
                // <Image className="object-cover" src={`http://127.0.0.1:8080/${img}`} width="100%" height="100%"
                renderLoader={({ hasLoaded, hasFailed }: any) => (
                  <div className="font-mono loader animate-pulse content-center flex items-center">
                    {hasFailed && (
                      <div className="animate-pulse text-center flex items-center">
                        Opps, there's a problem loading the image. Please try
                        again. :)
                      </div>
                    )}
                    {hasLoaded && (
                      <span className="animate-pulse text-center">
                        I'll be here for (transitionTime) milliseconds after
                        load
                      </span>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="grid p-2">
              <p className="m-3 text-xs font-extralight truncate bg-[#8080803e] rounded-2xl p-1 w-fit">
                {nft_address}
              </p>
              <p className="m-3 truncate font-semibold">{name}</p>
            </div>
            <div className="m-3 p-2 rounded-xl bg-[#8080803e] flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <p>Price</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>{price}</p>
                <p>On Sale</p>
              </div>
            </div>
          </div>
      </>
    );
  
}

export default ProductItemProps;
