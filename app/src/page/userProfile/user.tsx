import React, { useEffect, useState } from "react";
import { Link, Routes } from "react-router-dom";
import useWindowDimensions from "../../hook/useWindowDimensions";
import CreateProduct from "./createProduct";
import ProductSection from "./productSection";
import useStorageState from "react-use-storage-state";
import { useJWTPayload } from "../../hook/useToken";
import axios from "axios";

function User() {
  useEffect(() => {
    axios
      .post(`https://unipiece-api.full-stack.app/user/${userId}`)
      // .post(`http://localhost:8080/user/${userId}`)
      .then(function (response) {
        if (response.status == 200) {
          console.log(
            "fetch success! Your tokenID matching with this profile is :",
            response.data
          );
          //handle success here TODO: to define owner function and visitor function in profile page
          const viewerIsOwner = response.data;
        }
      })
      .catch(function (error) {
        console.log("fetch error", error);
        //handle error here
      });
  }, []);

  const { height, width } = useWindowDimensions();

  const [click, setClick] = useStorageState("createBios", "false");
  const bios: any = useStorageState("createBios", "");
  // console.log(bios);

  function changeBios() {
    setClick("true");
  }

  /*********** check user login token and get user id for url params **************/
  const user_jwtToken = useStorageState("token", "");
  // console.log({ user_jwtToken });

  const localStore: any = useJWTPayload();
  const tokenInfo = localStore;
  // console.log({ tokenInfo });

  const userId = tokenInfo?.userId;
  // console.log(userId);

  const userEmail = tokenInfo?.email;
  // console.log(userEmail);

  // const response = axios.get(`/user/${userId}`);
  // response.then((res: any) => {
  //   console.log(res);
  // });

  /********************************************************************************/

  const userAddress = "0x12bd534961a86dcf660dd3f3745ad6d4045eb77d";

  const messageBtn =
    "btn-outline font-bold rounded-2xl flex justify-center items-center border-2 w-[120px] h-[40px] hover:btn-primary";

  const responsive = width < 800 ? true : false;
  const webContainer = "flex justify-between p-10";
  const mobileContainer = "block max-w-[800px]";

  return (
    <>
      <div className="relative flex justify-center items-center">
        {/* User profile page picture */}
        <img
          className="h-[35vh] w-[95vw] object-cover rounded-2xl"
          src="https://rarible.mypinata.cloud/ipfs/QmSwWeeDg3dNxnYoGfAjJnAJAEdYG7FMvtQzzkAEvH32m4"
        />
        <div className="absolute right-[5%] desktop:bottom-2 mobile:top-2 rounded-2xl bg-[#80808071] w-[300px] h-[50px] flex justify-center items-center">
          Social Media button area
        </div>
      </div>

      <div className="block justify-center">
        <>
          {/************** Top container *****************/}
          <div className={!responsive ? webContainer : mobileContainer}>
            {/************** Top left container *****************/}
            <div className="m-5 h-[350px] w-[400px] -translate-y-[30%] flex flex-col">
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
            <div className="flex flex-col text-base">
              <div className="m-5 rounded-3xl border-[#01010139] border-2 w-[350px] h-[250px] p-5 flex flex-col justify-between">
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
              <button
                onClick={changeBios}
                className="m-5 h-[100px] w-[350px] border-[#F96248] border-2 text-[white] text-3xl bg-[#f96248b4] rounded-lg flex justify-center items-center transition ease-linear duration-150 hover:scale-110 hover:bg-[#F96248]"
              >
                <p>Create Product</p>
              </button>
            </div>
          </div>
          {/* Product Section */}
          {bios[0] == "true" ? <CreateProduct /> : <ProductSection />}
        </>
      </div>
    </>
  );
}

export default User;
