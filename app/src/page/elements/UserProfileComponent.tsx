import React from "react";

function UserProfileComponent() {
  type profile = {
    img: string;
    name : string;
    username: string;
    bio: string;
  }

  let item = (
      <div className="flex mb-5 flex-col overflow-hidden rounded-xl shadow-xl">
      <div className="relative block border-2 bg-primary">
        <div className="object-cover h-[15rem]">
          <img src="http://127.0.0.1:8080/img/1.jpeg" alt="" width="100%" />
        </div>
        <div className="absolute w-[96px] h-[96px]
          bg-success rounded-full border-8 border-[white]
          -translate-y-[50%] translate-x-[15%] 
        ">
        </div>
      </div>
      <div className="pt-10 px-6 pb-8 block">
        <div className="text-3xl">Name</div>
        <div className="text-2xl">@xxx</div>
        <div className="text-lg">description</div>
      </div>
    </div>
  )

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

export default UserProfileComponent