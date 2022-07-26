import React from "react";
import { Image } from "react-image-and-background-image-fade";

function UserProfileComponent() {
  type profile = {
    img: string;
    name: string;
    username: string;
    bio: string;
  };

  let item = (
    <div className="flex mb-5 flex-col overflow-hidden rounded-xl shadow-xl">
      <div className="relative block bg-primary">
        <div className="h-[15rem]">
          <div className="object-cover z-2">
            {/* <Image
              src="https://unipiece-api.full-stack.app/img/1.jpeg"
              alt=""
              width="100%"
              height="100%"
            /> */}
            <Image
              src={`${process.env.REACT_APP_PRODUCTION_API}/img/1.jpeg`}
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div
          className="z-50 absolute w-[96px] h-[96px] overflow-hidden
          bg-success rounded-full border-8 border-[white]
          -translate-y-[50%] translate-x-[15%] 
        "
        >
          <div className="object-cover z-2">
            {/* <Image
              src="https://unipiece-api.full-stack.app/img/2.jpeg"
              alt=""
              width="100%"
              height="100%"
            /> */}
            <Image
              src={`${process.env.REACT_APP_PRODUCTION_API}/img/2.jpeg`}
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="z-30 pt-10 px-6 pb-8 block bg-[white]">
        <div className="text-3xl">Name</div>
        <div className="text-2xl">@xxx</div>
        <div className="text-lg">description</div>
      </div>
    </div>
  );

  return (
    <>
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
      {item}
    </>
  );
}

export default UserProfileComponent;
