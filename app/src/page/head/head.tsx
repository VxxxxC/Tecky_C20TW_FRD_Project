import React from "react";
import style from "./head.module.css";

function Head() {
  return (
    <div className={style.headBar}>
      <div className={`btn btn-primary ${style.leftContainer}`}></div>
      <div className={style.rightContainer}></div>
    </div>
  );
}

export default Head;
