import React from "react";
import "./user.scss";

function user() {
  const messageBtn =
    "btn-outline font-bold rounded-2xl flex justify-center items-center border-2 w-[120px] h-[40px] hover:btn-primary";
  return (
    <>
      <div className="flex justify-center items-center">
        {/* User profile page picture */}
        <img
          className="h-[35vh] w-[95vw] object-cover rounded-2xl"
          src="https://rarible.mypinata.cloud/ipfs/QmSwWeeDg3dNxnYoGfAjJnAJAEdYG7FMvtQzzkAEvH32m4"
        />
      </div>

      <div className="flex justify-center h-[20rem]">
        {/************** Top container *****************/}
        <div className="flex justify-between -translate-y-[20%] w-[95vw]">
          {/************** Top left container *****************/}
          <div className="m-5 h-[350px] w-[400px]  -translate-y-[30%] translate-x-[10%] left-0 rounded-2xl flex flex-col">
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
            </div>
          </div>
          {/************** Top right container *****************/}
          <div className="m-5 h-[400px] w-[400px]  -translate-y-[10%] right-0 rounded-2xl flex flex-col">
            <div className="m-5 space-y-12">
              <div className="flex flex-row-reverse mb-5">
                <div className="flex justify-center items-center rounded-2xl bg-[#80808071] w-[200px] h-[50px]">
                  Social Media button
                </div>
              </div>
              <div className="flex flex-row-reverse text-sm">
                <div className="rounded-3xl border-[#01010139] border-2 w-[300px] h-[250px] p-5 flex flex-col justify-between">
                  <div className="flex flex-row-reverse justify-between">
                    <p>100</p>
                    <p>FOLLOWER</p>
                  </div>
                  <div className="flex flex-row-reverse justify-between">
                    <p>300</p>
                    <p>FOLLOWING</p>
                  </div>
                  <div className="flex flex-row-reverse justify-between">
                    <a
                      href="https://etherscan.io/"
                      target="popup"
                      className="w-[15vw] truncate"
                    >
                      0x12bd534961a86dcf660dd3f3745ad6d4045eb77d
                    </a>
                    <div>Address</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="m-10">
        <div className="m-5 flex flex-row gap-10 font-bold">
          <div>On Sale</div>
          <div>Owned</div>
          <div>Created</div>
          <div>Activity</div>
        </div>
        <div className="bg-[#55555555] h-[2px] w-[100vw] mb-[50px]"></div>
        <div className="flex justify-center items-center">
          <div className="w-[95vw] h-[20vh] border-2 bg-[grey]"></div>
        </div>
      </div>
    </>
  );
}

export default user;
