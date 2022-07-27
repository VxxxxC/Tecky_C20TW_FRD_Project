import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStorageState from "react-use-storage-state";
import { useJWTPayload } from "../../../hook/useToken";
import style from "./menulist.module.scss";

function Menulist() {
  const navigate = useNavigate();

  /*********** check user jwt token **************/
  const user_jwtToken = useStorageState("token", "");
  // console.log({ user_jwtToken });

  const localStore: any = useJWTPayload();
  const tokenInfo = localStore;
  // console.log({ tokenInfo });

  const userId = tokenInfo?.userId;
  // console.log(userId);

  const userEmail = tokenInfo?.email;
  // console.log(userEmail);

  /*********** change login button **************/
  const [login, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  /************** logout ****************/
  function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("is_login");

    navigate("/");
    window.location.reload();
  }

  return (
    <>
      <div className="flex flex-col justify-between">
        <div>
          <Link to="/explore" className={style.menulist}>
            <p className={style.ListItem}>Explore</p>
          </Link>
          <div className={style.menulist}>
            <p className={style.ListItem}>How it works</p>
          </div>
          <div className={style.menulist}>
            <p className={style.ListItem}>Make your piece be unique</p>
          </div>
        </div>

        <div>
          {login ? (
            <>
              <button
                onClick={Logout}
                className="mt-[25px] mx-10 btn bg-primary-content text-primary rounded-xl border-2 hover:text-primary-content"
              >
                Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Menulist;
