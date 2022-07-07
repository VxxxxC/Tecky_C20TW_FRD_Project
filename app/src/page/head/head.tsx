import React from "react";
import style from "./head.module.css";

function Head() {
  return (
    <div className={style.headBar}>
      <div className="leftContainer">
        <div className={style.leftContent}></div>
      </div>
      <div className="rightContainer">
        <div className={style.rightContent}></div>
      </div>
    </div>
  );
}

export default Head;
