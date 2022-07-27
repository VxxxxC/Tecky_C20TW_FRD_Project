import React from "react";

function ProductDetail(props: any) {
  let content = props.content;
  //   console.log(content);

  return (
    <>
      <div className="grid col-4 gap-3 place-content-start mx-2 font-serif">
        <p>{content}</p>
        {/* <div className="span-4">Product Type</div>
        <div className="span-4">Current Owner</div>
        <div className="span-4">Current Owner</div> */}
      </div>
    </>
  );
}

export default ProductDetail;
