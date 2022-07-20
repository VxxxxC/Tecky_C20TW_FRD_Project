import React from "react";
import useWindowDimensions from "../../hook/useWindowDimensions";
import ProductSection from "./productSection";
import "./user.scss";

function User() {
  const { height, width } = useWindowDimensions();

  const userAddress = "0x12bd534961a86dcf660dd3f3745ad6d4045eb77d";

  const messageBtn =
    "btn-outline font-bold rounded-2xl flex justify-center items-center border-2 w-[120px] h-[40px] hover:btn-primary";

  const responsive = width < 800 ? true : false;
  const webContainer = "flex justify-between w-[95vw]";
  const mobileContainer = "block";

  return (
    <>
      <div className="relative flex justify-center items-center">
        {/* User profile page picture */}
        <img
          className="h-[35vh] w-[95vw] object-cover rounded-2xl"
          src="https://rarible.mypinata.cloud/ipfs/QmSwWeeDg3dNxnYoGfAjJnAJAEdYG7FMvtQzzkAEvH32m4"
        />
        <div className="absolute right-0 desktop:bottom-2 mobile:top-2 rounded-2xl mobile:-translate-x-[10%] desktop:-translate-x-[20%] bg-[#80808071] w-[200px] h-[50px]">
          Social Media button
        </div>
      </div>

      <div className="block justify-center">
        {/************** Top container *****************/}
        <div className={!responsive ? webContainer : mobileContainer}>
          {/************** Top left container *****************/}
          <div className="m-5 h-[350px] w-[400px]  mobile:-translate-y-[30%] desktop:-translate-y-[30%] rounded-2xl flex flex-col">
            <div className="m-5 space-y-5">
              <div className="rounded-full border-8 border-[white] w-[150px] h-[150px] flex justify-center items-center bg-[#80808044]">
                {/* User picture */}
                <img
                  className="object-fill rounded-full"
                  src="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x12bd534961a86dcf660dd3f3745ad6d4045eb77d/avatar/QmNnnLGuiUKgg6hhCtwkirKQFPG5ni4pgYW11CRhVuUsCV"
                />
              </div>
              <div className="text-[black] text-4xl">
                <p>Ali Hadian</p>
              </div>
              <div className="flex flex-row gap-x-10">
                <button className={messageBtn}>MESSAGE</button>
                <button className={messageBtn}>FOLLOW</button>
              </div>
              <div className="text-xl font-sans">TRAVEL YOUR IMAGINATION</div>
            </div>
          </div>
          {/************** Top right container *****************/}
          <div className=" h-[400px] w-[400px rounded-2xl flex flex-col text-sm">
            <div className="m-5 rounded-3xl border-[#01010139] border-2 w-[300px] h-[250px] p-5 flex flex-col justify-between">
              <div className="flex flex-row justify-between">
                <p>FOLLOWER</p>
                <p>100</p>
              </div>
              <div className="flex flex-row justify-between">
                <p>FOLLOWING</p>
                <p>300</p>
              </div>
              <div className="flex flex-row justify-between">
                <div>Address</div>
                <a
                  href="https://etherscan.io/"
                  target="popup"
                  className="w-[15vw] truncate"
                >
                  {userAddress}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Product Section */}
        <ProductSection />
      </div>
    </>
  );
}

export default User;
