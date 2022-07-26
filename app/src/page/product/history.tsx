import React from "react";

function ProductHistory(props: any) {
  let address = props.address;

  return (
    <>
      <button className="card">{address}</button>
    </>
  );
}

export default ProductHistory;
