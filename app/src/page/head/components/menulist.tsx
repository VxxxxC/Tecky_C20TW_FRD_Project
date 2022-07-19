import React from "react";
import style from "./menulist.module.scss";

function Menulist() {
  return (
    <>
      <div className={style.menulist}>
        <p className={style.ListItem}>Profile</p>
      </div>
      <div className={style.menulist}>
        <p className={style.ListItem}>Explore</p>
      </div>
      <div className={style.menulist}>
        <p className={style.ListItem}>How it works</p>
      </div>
      <div className={style.menulist}>
        <p className={style.ListItem}>Make your piece be unique</p>
      </div>
    </>
  );
}

export default Menulist;
