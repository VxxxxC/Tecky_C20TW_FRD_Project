import React, { useEffect, useState } from "react";
import { Image } from "react-image-and-background-image-fade";
// import LargeItem from './large_item';
import "./large_item.scss";

function ItemTest() {
  const [error, setError] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any[]>([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // fetch("https://unipiece-api.full-stack.app/testproducts")
    fetch(`${process.env.REACT_APP_DEV_API}/testproducts`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("what happened: ", error);
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="h-96 font-mono">Loading...</div>;
  } else {
    return (
      <>
        {items.map((item) => (
          <div className="hover:-translate-y-2 ease-in-out duration-200 font-sans item overflow-hidden m-5 w-3/12 bg-base-100 shadow-xl rounded-lg">
            <div className="h-96">
              <Image
                className="object-cover"
                // src={`https://unipiece-api.full-stack.app/${item.img}`}
                src={`${process.env.REACT_APP_DEV_API}/${item.img}`}
                width="100%"
                height="100%"
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
            <div className="font-medium m-2">{item.name}</div>
            <div className="font-light m-2">{item.price}</div>
          </div>
        ))}
      </>
    );
  }
}

export default ItemTest;
