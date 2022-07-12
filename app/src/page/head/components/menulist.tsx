import React from "react";
import style from "./menulist.module.css";

function Menulist() {
  return (
    <>
      <li className={style.menulist}>
        <p className={style.ListItem}>Profile</p>
      </li>
      <li className={style.menulist}>
        <p className={style.ListItem}>Explore</p>
      </li>
      <li className={style.menulist}>
        <p className={style.ListItem}>How it works</p>
      </li>
      <li className={style.menulist}>
        <p className={style.ListItem}>Make your piece be unique</p>
      </li>
    </>
  );
}

export default Menulist;
