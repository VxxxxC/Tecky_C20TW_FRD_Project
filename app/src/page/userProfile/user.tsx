import React, { useEffect, useState } from "react";
import { Link, Routes } from "react-router-dom";
import useWindowDimensions from "../../hook/useWindowDimensions";
import CreateProduct from "./createProduct";
import ProductSection from "./productSection";
import useStorageState from "react-use-storage-state";
import { useJWTPayload } from "../../hook/useToken";
import { useParams } from "react-router-dom";
import axios from "axios";
import UniLoader from "../elements/loader";

function User() {
  const [isOwner, setIsOwner] = useState<boolean | null>(null);

  useEffect(() => {
    console.log(
      isOwner == true
        ? console.log("You're owner of this profile")
        : console.log("You're visitor")
    );
  }, [isOwner]);

  const { id } = useParams();
  console.log({ id });

  /************************* Comparing JWT token user ID with params user ID of verify profile owner *************************/

  useEffect(() => {
    axios
      // .post(`https://unipiece-api.full-stack.app/user/${userId}`)
      .post(`${process.env.REACT_APP_DEV_API}/user/${id}`, {
        tokenInfo,
      })
      .then(function (response) {
        console.log(response.data.status);

        if (response.status === 200) {
          if (response.data.status === true) {
            //handle success here TODO: to define owner function and visitor function in profile page
            const viewerIsOwner = response.data.status;
            setIsOwner(viewerIsOwner);
          } else {
            const viewerIsVisitor = response.data.status;
            setIsOwner(viewerIsVisitor);
          }
        }
      })
      .catch(function (error) {
        console.log("fetch error", error);
        //handle error here
      });
  }, []);

  /******************************************************************************************************************************/

  /************************* render user profile by params user ID *************************/

  interface UserDetail {
    bg_image: string;
    bio: string;
    created_at: string;
    email: string;
    id: number;
    image: string;
    name: string;
    password: string;
    publickey: string;
    shipping_address: string;
    style: number;
    token_amount: string;
    username: string;
    wallet_address: string;
  }

  const [userDetail, setUserDetail] = useState<UserDetail>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_DEV_API}/user/${id}`)
      .then(function (response) {
        // console.log(response.data);
        setUserDetail(response.data);
      });
  }, []);

  useEffect(() => {
    // console.log(userDetail);
  }, [userDetail]);

  // const {
  //   id,
  //   email,
  //   password,
  //   name,
  //   token_amount,
  //   wallet_address,
  //   publickey,
  //   image,
  //   bg_image,
  //   style,
  //   bio,
  // } = userDetail;

  /******************************************************************************************************************************/

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
  console.log({ tokenInfo });

  // const userId = tokenInfo?.id[0].id || tokenInfo?.userId;
  // console.log(userId);

  const userEmail = tokenInfo?.email;
  console.log(userEmail);

  // const response = axios.get(`/user/${userId}`);
  // response.then((res: any) => {
  //   console.log(res);
  // });

  /********************************************************************************/

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
          src={process.env.REACT_APP_IMG_URL + "/" + userDetail?.bg_image}
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
                <div className="rounded-full  w-[150px] h-[150px] flex justify-center items-center bg-[#80808044]">
                  {/* User picture */}
                  <img
                    className="object-cover w-[150px] h-[150px] rounded-full border-8 border-[white]"
                    src={
                      process.env.REACT_APP_IMG_URL + "/" + userDetail?.image
                    }
                  />
                </div>
                <div className="text-[black] text-4xl">
                  <p>{userDetail?.name}</p>
                </div>
                <div className="flex flex-row gap-x-10">
                  <button className={messageBtn}>MESSAGE</button>
                  <button className={messageBtn}>FOLLOW</button>
                </div>
                <div className="text-xl font-sans">{userDetail?.bio}</div>
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
                    {userDetail?.wallet_address}
                  </a>
                </div>
              </div>
              {isOwner ? (
                <button
                  onClick={changeBios}
                  className="m-5 h-[100px] w-[350px] border-[#F96248] border-2 text-[white] text-3xl bg-[#f96248b4] rounded-lg flex justify-center items-center transition ease-linear duration-150 hover:scale-110 hover:bg-[#F96248]"
                >
                  <p>Create Product</p>
                </button>
              ) : null}
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
