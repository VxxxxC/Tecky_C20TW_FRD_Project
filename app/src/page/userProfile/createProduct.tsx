import React from "react";
import useStorageState from "react-use-storage-state";

function CreateProduct() {
  const [click, setClick] = useStorageState("createBios", "");

  function changeBios() {
    setClick("false");
  }

  const bios: any = useStorageState("createBios", "");
  console.log(bios);

  return <button onClick={changeBios}>Go Back</button>;
}

export default CreateProduct;
