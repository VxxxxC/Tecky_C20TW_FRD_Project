import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Menulist from "./components/menulist";
import style from "./head.module.scss";
import { useToken, useJWTPayload } from "../../hook/useToken";
import { BlurMenu } from "../../hook/useBlur";


function Head() {
  const menuBlurSwitch = BlurMenu();
  const menuBlur = menuBlurSwitch.isActive;
  // const [isActive, setIsActive] = useState(false);
  // const [isActive, setIsActive] = useStorageState<any>("blur", false);
  const navigate = useNavigate();

  /***********change login button **************/
  const [login, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  console.log(useToken());
  const localStore = useJWTPayload();
  const userEmail = localStore?.email;

  /************** logout ****************/
  function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("is_login");

    navigate("/");
    window.location.reload();
  }

  const ref: any = useRef();
  // console.log(ref.current);

  useOnClickOutside(ref, () => menuBlurSwitch.setIsActive(false));

  return (
    <div className={style.headBar}>
      <div
        className={`${style.leftContainer} ${menuBlur == 0 ? "" : "blur-sm"}`}
      >
        {/* <Link to="/" className={style.leftContent}  onClick={()=>setShowFooter(true)}> */}
        <Link to="/" className="flex items-center mx-8 ">
        {/* Paul deleted: style.leftContent */}
          <button className="btn btn-primary rounded-xl">LOGO</button>
        </Link>
      </div>

      <div
        className={`${style.rightContainer} ${menuBlur == 0 ? "" : "blur-sm"}`}
      >
        {/* <Link to="/login" className={style.rightContent} onClick={()=>setShowFooter(!showFooter)}> */}
        {!login ? (
          <>
            <Link to="/login" className="flex items-center mx-8">
              {/* Paul deleted: style.loginBtn */}
            <button className="btn bg-primary-content text-primary rounded-xl border-2 hover:text-primary-content">Login</button>
            </Link>
          </>
        ) : (
          <>
            {/* <button onClick={Logout} className={style.logoutBtn}>
              Logout */}
            <button onClick={Logout} className="btn bg-primary-content text-primary rounded-xl border-2 hover:text-primary-content">Logout</button>
            {/* </button> */}
          </>
        )}

        {userEmail ? <div className="username">{userEmail}</div> : null}

        <button
          className={style.menuBtn}
          onClick={() => menuBlurSwitch.setIsActive(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <ul
        className={
          menuBlurSwitch.isActive ? style.showSideMenu : style.closeSideMenu
        }
        ref={ref}
      >
        <Menulist />
      </ul>
    </div>
  );
}

export default Head;

function useOnClickOutside(ref: any, handler: any) {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
