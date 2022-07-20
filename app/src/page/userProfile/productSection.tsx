import React from "react";
import ProductItem from "../elements/productItem";

function ProductSection() {
  const onSaleSelect = "font-bold bg-[white] text-[black]";
  const onSaleActive =
    "m-2 p-2 w-[15px] h-[20px] rounded-2xl bg-[grey] text-[white]";
  return (
    <>
      <div className="mx-10">
        <div className="m-5 flex flex-row gap-10 flex-wrap">
          <div className={onSaleSelect}>
            On Sale
            <span className={onSaleActive}>1</span>
          </div>
          <div className={onSaleSelect}>
            Owned
            <span className={onSaleActive}>13</span>
          </div>
          <div className={onSaleSelect}>
            Created
            <span className={onSaleActive}>8</span>
          </div>
          <div className={onSaleSelect}>Activity</div>
        </div>
        <div className="bg-[#00000022] h-[2px] mb-[50px]"></div>
        <div className="flex justify-center items-center">
          <div className="rounded-3xl border-2 border-[#00000020]">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProductItem/>
            </div>
            {/* Product items start at below */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;


            /* <div className="m-3 w-[300px] h-[600px] border-2 border-[#00000020] rounded-3xl flex flex-col items-center">
              <div className="m-3 w-[260px] h-[350px]">
                <img
                  className="rounded-2xl"
                  src="https://lh3.googleusercontent.com/seVjxrTLJqYCGlxAwfMd_6MeFnl8-Ltzv4DqkhTT53aLyowgF_X2TFHWxNMHuVJeTA0DM47s_I9rC-XvM2ZoCYGzYQuoIh6iwZZKDdQ=w600"
                />
              </div>
              <div className="grid">
                <p className="m-3 w-[15vw] truncate">
                  0x3f59e7d74471183346b1a3bb8f60f47d04d67efd
                </p>
                <p className="m-3 w-[15vw] truncate">thank you, دوست</p>
              </div>
              <div className="m-3 p-2 w-[260px] h-[80px] rounded-xl bg-[#8080803e] flex flex-col justify-between">
                <div className="flex flex-row justify-between">
                  <p>Price</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>100</p>
                  <p>On Sale</p>
                </div>
              </div>
            </div> */
