import React, { useState } from "react";
import useStorageState from "react-use-storage-state";

function CreateProduct() {
  const [click, setClick] = useStorageState("createBios", "");

  function changeBios() {
    setClick("false");
  }

  const bios: any = useStorageState("createBios", "");
  console.log(bios[0]);

  const [value, setValue] = useState("");

  const handleChange = (event: { target: { value: string } }) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };

  console.log(value);
  console.log(typeof value);
  console.log(Number(value));

  return (
    <>
      <button
        onClick={changeBios}
        className="m-10 btn-primary w-[100px] h-[60px] rounded-lg"
      >
        <svg
          className="w-24 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          ></path>
        </svg>
        Go Back
      </button>

      <div className="mx-10">
        <div className="bg-[#00000022] h-[2px] mb-[50px]"></div>
        <div className="w-[90vw] border-[black] border-2 bg-[#0000001d] p-10">
          {/* create product from start from here! */}
          <form>
            <div className="w-[17rem] text-[white] text-3xl bg-[black]">
              Create New Product
            </div>

            <div className="grid overflow- md grid-cols-3 auto-rows-auto gap-2 grid-flow-row ">
              <div className="m-3 text-2xl font-bold">Upload file</div>
              <div className="col-start-1 col-end-4 h-[10rem] border-[#F96248] border-2 border-dashed rounded-3xl flex justify-center items-center">
                <div className="w-[15rem] h-[3rem] border-2 bg-[#0000009a] text-[white] rounded-full flex justify-center items-center">
                  Choose Your Product Pic! :)
                </div>
              </div>
              <div className="m-3 text-2xl font-bold">Price</div>
              <input
                type="text"
                placeholder="Enter Price for one piece"
                value={value}
                onChange={handleChange}
                className="col-start-1 col-end-4 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
              />
              <div className="m-3 text-2xl font-bold">Product Name</div>

              <input
                type="text"
                placeholder="Enter Name for your piece :)"
                className="col-start-1 col-end-4 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
              />
              <div className="m-3 text-2xl font-bold flex items-center">
                Description
                <span className="text-[grey] text-xl font-normal">
                  (Optional)
                </span>
              </div>
              <input
                type="text"
                placeholder="Tell us the story of piece :)"
                className="col-start-1 col-end-4 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
              />
              <div className="m-3 text-2xl font-bold flex items-center">
                Properties
                <span className="text-[grey] text-xl font-normal">
                  (Optional)
                </span>
              </div>
              <input
                type="text"
                placeholder="e.g. Size"
                className="col-start-1 col-end-2 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
              />
              <input
                type="text"
                placeholder="e.g. Large"
                className="col-start-2 col-end-3 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
              />

              <div className="col-start-1 col-end-1 m-3 text-2xl font-bold flex items-center">
                Materials
                <span className="text-[grey] text-xl font-normal">
                  (Optional)
                </span>
              </div>
              <input
                type="text"
                placeholder="e.g. Leather"
                className="col-start-1 col-end-4 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
              />
              <div className="col-start-1 col-end-1 m-3 w-[30rem] text-2xl font-bold flex items-center">
                Alternative text for piece
                <span className="text-[grey] text-xl font-normal">
                  (Optional)
                </span>
              </div>
              <input
                type="text"
                placeholder="e.g. Leave some message to attach on your piece <3"
                className="col-start-1 col-end-4 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
              />

              <button
                type="submit"
                className="col-start-1 mt-3 h-[3rem] p-5 hover:bg-[white] border-[white] bg-[#3EC8F9] hover:border-[#3EC8F9] text-[white] hover:text-[#3EC8F9] font-bold border-4 rounded-3xl flex justify-center items-center"
              >
                <p>Create Product!</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
