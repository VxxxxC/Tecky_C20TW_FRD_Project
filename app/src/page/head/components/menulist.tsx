import React from "react";
import { useNavigate } from "react-router-dom";
import useStorageState from "react-use-storage-state";
import { useJWTPayload } from "../../../hook/useToken";
import style from "./menulist.module.scss";

function Menulist() {
  const navigate = useNavigate();

  /*********** check user login token and get user id for url params **************/
  const user_jwtToken = useStorageState("token", "");
  // console.log({ user_jwtToken });

  const localStore: any = useJWTPayload();
  const tokenInfo = localStore;
  // console.log({ tokenInfo });

  const userId = tokenInfo?.userId;
  // console.log(userId);

  const userEmail = tokenInfo?.email;
  // console.log(userEmail);

  return (
    <>
      {tokenInfo ? (
        <button
          onClick={() => navigate(`/user/${userId}`)}
          className={style.menulist}
        >
          <p className={style.ListItem}>Profile</p>
        </button>
      ) : null}
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
