import React from "react";
import BackgroundAnimation from "../elements/background";
import CyberpunkBg from "../elements/cyberpunk_bg";
// import ItemTest from "../elements/item_test";
import Category from "./category";
import Highlights from "./hightlights";
import HowItWorks from "./howitworks";
import Welcome from "./welcome";

function Main() {
  console.log(process.env.REACT_APP_DEV_API);

  return (
    <div className="lg:px-20 md:px-10">
      {/* <Welcome/> */}
      <BackgroundAnimation />
      <Category />
      <Highlights />
      {/* <HowItWorks/> */}
      {/* <CyberpunkBg/> */}
    </div>
  );
}
export default Main;
