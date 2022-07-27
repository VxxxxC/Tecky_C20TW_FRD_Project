import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Menulist from "./components/menulist";
import style from "./head.module.scss";
import { useToken, useJWTPayload } from "../../hook/useToken";
import { BlurMenu } from "../../hook/useBlur";
import axios from "axios";

function Head() {



  const menuBlurSwitch = BlurMenu();
  const menuBlur = menuBlurSwitch.isActive;
  // const [isActive, setIsActive] = useState(false);
  // const [isActive, setIsActive] = useStorageState<any>("blur", false);
  const navigate = useNavigate();

  /*********** change login button **************/
  const [login, setLogin] = useState(
    localStorage.getItem("token") ? true : false
  );
  
  const token = localStorage.getItem("token");
  useEffect(() => {
    token?console.log("***yes**"):console.log("***no**")
  },[token])
  /*********** check user login token **************/
  // console.log(useToken());
  const localStore: any = useJWTPayload();
  // console.log(localStore);
  const userId: number = localStore?.userId;
  // console.log(userId);

  // /************** logout ****************/
  // function Logout() {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("is_login");

  //   navigate("/");
  //   window.location.reload();
  // }

  const ref: any = useRef();
  // console.log(ref.current);

  useOnClickOutside(ref, () => menuBlurSwitch.setIsActive(false));

  interface UserDetail {
    bg_image: string;
    bio: string;
    created_at: string;
    email: string;
    id: number;
    image: string;
    name: string;
    password: string;
    publickey: string;
    shipping_address: string;
    style: number;
    token_amount: string;
    username: string;
    wallet_address: string;
  }
  const [userDetail, setUserDetail] = useState<UserDetail>();

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_DEV_API}/user`, { userId: userId })
      .then(function (response) {
        console.log(response.data);
        setUserDetail(response.data);
      });
  }, []);

  useEffect(() => {
    // console.log(userDetail);
  }, [userDetail]);

  return (
    <div className={style.headBar}>
      <div className={`flex ${menuBlur == 0 ? "" : "blur-sm"}`}>
        {/* <Link to="/" className={style.leftContent}  onClick={()=>setShowFooter(true)}> */}
        <Link to="/" className="flex items-center mx-8 ">
          {/* Paul deleted: style.leftContent */}
          {/* <button className=" btn btn-primary rounded-xl">Unipiece</button> */}
          {/* <img className="img-responsive w-12 h-12" src={logo} alt="" /> */}
          <img className="img-responsive w-12 shadow-md" src="https://unipiece.full-stack.app/img/logo.png" alt="" />
        </Link>
      </div>

      <div className={`flex ${menuBlur == 0 ? "" : "blur-sm"}`}>
        {!token ? (
          <>
            <Link to="/login" className="flex items-center mx-8">
              {/* Paul deleted: style.loginBtn */}
              <button className="btn bg-primary-content text-primary rounded-xl border-2 hover:text-primary-content">
                Login
              </button>
            </Link>
          </>
        ) : null}

        {token ? (
          <div className="flex flex-col">
            <button
              onClick={() => navigate(`/user/${userId}`)}
              className="m-3 rounded-full border-2 border-[white] flex flex-col justify-center items-center bg-[#80808044]"
            >
              {/* User picture */}
              <img
                className=" w-[70px] h-[70px] object-cover rounded-full"
                src={process.env.REACT_APP_IMG_URL + "/" + userDetail?.image}
              />
            </button>
            {/* <div className="username">{userDetail?.name}</div>{" "} */}
          </div>
        ) : null}

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
