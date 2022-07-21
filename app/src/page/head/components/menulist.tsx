import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./menulist.module.scss";

function Menulist() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/user")} className={style.menulist}>
        <p className={style.ListItem}>Profile</p>
      </button>
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
