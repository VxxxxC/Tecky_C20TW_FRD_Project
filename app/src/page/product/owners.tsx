import React from "react";

function ProductOwners(props: any) {
  let owner = props.owner[0].name;

  return (
    <>
      <div className="card">{owner}</div>
    </>
  );
}

export default ProductOwners;
