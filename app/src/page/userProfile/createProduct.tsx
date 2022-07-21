import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useStorageState from "react-use-storage-state";

function CreateProduct() {
  const [click, setClick] = useStorageState("createBios", "");

  function changeBios() {
    setClick("false");
  }

  const bios: any = useStorageState("createBios", "");
  console.log(bios[0]);

  /********** Form Submit *********/
  const { handleSubmit }: any = useForm();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    console.log({ product_type, price, name, content, credit_by });

    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8080/user/create_product",
      {
        product_type: product_type,
        product_price: price,
        product_name: name,
        content: content,
        credit_by: credit_by,
      }
    );
    console.log(response);
  };
  /******************************************************/

  /********** each Form input value by useState *********/
  // 1. image upload
  function imageHandler(e: any): any {
    console.log(e.target.files[0]);
  }

  // 2. Price
  const [price, setPrice] = useState("");

  //3. Product Name
  const [name, setName] = useState("");

  //4. Description
  const [content, setContent] = useState("");

  //5. Product type
  const [product_type, setProduct_type] = useState("");

  //6. Alternative text
  const [credit_by, setCredit_by] = useState("");

  useEffect(() => {
    console.log({ product_type, price, name, content, credit_by });
  }, [product_type, price, name, content, credit_by]);
  /******************************************************/

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
        <div className="w-[90vw] bg-[#00000035] rounded-3xl p-10">
          {/* create product from start from here! */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[17rem] text-[white] text-3xl bg-[grey] rounded-3xl flex justify-center items-center">
              Create New Product
            </div>

            <div className="grid overflow- md grid-cols-3 auto-rows-auto gap-2 grid-flow-row ">
              <div className="m-3 text-2xl font-bold">Upload image</div>

              <label
                htmlFor={"upload-image"}
                className="col-start-1 col-end-4 h-[10rem] cursor-pointer hover:bg-[#f962483a] border-[#F96248] border-2 border-dashed rounded-3xl flex justify-center items-center"
              >
                <input
                  id="upload-image"
                  type="file"
                  onChange={imageHandler}
                  style={{ display: "none" }}
                />
                <div className="w-[15rem] h-[4rem] border-2 bg-[#0000009a] text-[white] rounded-full flex flex-col justify-center items-center">
                  <p>Click here to upload image</p>
                  <p>Choose Your Product Pic! :)</p>
                </div>
              </label>

              <div className="col-start-1 col-end-1 w-[30rem] m-3 text-2xl font-bold flex items-center">
                Product Type
                <span className="text-[red] text-xl font-normal">
                  (*required)
                </span>
              </div>
              <select
                value={product_type}
                onChange={(e) => setProduct_type(e.target.value)}
                defaultValue={product_type}
                className="select select-bordered col-start-1 col-end-4 h-[5rem] p-5 text-2xl hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
                required
              >
                <option disabled selected>
                  Virtual or Physical?
                </option>
                <option>virtual</option>
                <option>physical</option>
              </select>

              <div className="w-[30rem] m-3 text-2xl font-bold flex items-center">
                Price
                <span className="text-[red] text-xl font-normal">
                  (*required)
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter Price for one piece"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value.replace(/([^0-9.]+)/, ""))
                }
                className="col-start-1 col-end-4 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
                required
              />

              <div className="w-[30rem] m-3 text-2xl font-bold flex items-center">
                Product Name
                <span className="text-[red] text-xl font-normal">
                  (*required)
                </span>
              </div>
              <input
                type="text"
                placeholder="Name your piece :)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-start-1 col-end-4 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
                required
              />

              <div className="m-3 text-2xl font-bold flex items-center">
                Content/Description
                <span className="text-[grey] text-xl font-normal">
                  (Optional)
                </span>
              </div>
              <input
                type="text"
                placeholder="Tell us the story of piece :)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="col-start-1 col-end-4 h-[3rem] p-5 hover:border-[#3EC8F9] hover:border-2 rounded-3xl flex justify-center items-center"
              />

              <div className="col-start-1 col-end-1 m-3 w-[30rem] text-2xl font-bold flex items-center">
                Credit By / Alternative text
                <span className="text-[grey] text-xl font-normal">
                  (Optional)
                </span>
              </div>
              <input
                type="text"
                placeholder="Credit someone or Leave some message to attach on your piece <3"
                value={credit_by}
                onChange={(e) => setCredit_by(e.target.value)}
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
