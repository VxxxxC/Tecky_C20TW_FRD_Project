import React from "react";
import { Image } from "react-image-and-background-image-fade";

type profile = {
  bg: string;
  icon: string;
  name : string;
  username: string;
  bio: string;
}

function UserProfileComponentTest(props : profile) {
  
  return (
    <div className="flex mb-5 flex-col overflow-hidden rounded-xl shadow-xl">
    <div className="relative block bg-primary">
      <div className="h-[15rem]">
      <div className="object-cover z-2">

        <Image src={props.bg} alt="" width="100%" height="100%" />
      </div>
      </div>
      <div className="z-50 absolute w-[96px] h-[96px] overflow-hidden
        bg-success rounded-full border-8 border-[white]
        -translate-y-[50%] translate-x-[15%] 
      ">
      <div className="object-cover z-2">
      <Image src={props.icon} alt="" width="100%" height="100%" />
      </div>
      </div>
    </div>
    <div className="z-30 pt-10 px-6 pb-8 block bg-[white]">
      <div className="text-3xl">{props.name}</div>
      <div className="text-2xl">@{props.username}</div>
      <div className="text-lg">{props.bio}</div>
    </div>
  </div>
  );
}

export default UserProfileComponentTest