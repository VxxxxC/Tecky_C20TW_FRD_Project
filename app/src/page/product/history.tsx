import React from "react";

function ProductHistory(props: any) {
  let address = props.address;

  return (
    <>
          <div className="font-mono overflow-scroll">{address}</div>

    </>
  );
}

export default ProductHistory;
