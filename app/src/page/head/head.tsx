import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Menulist from "./components/menulist";
import style from "./head.module.css";

function Head() {
  const [isActive, setIsActive] = useState(false);

  const ref: any = useRef();
  console.log(ref.current);

  useOnClickOutside(ref, () => setIsActive(false));

  return (
    <div className={style.headBar}>
      <div className={style.leftContainer}>
        <Link to="/" className={style.leftContent}>
          Logo
        </Link>
      </div>

      <div className={style.rightContainer}>
        <Link to="/login" className={style.rightContent}>
          Login
        </Link>

        {/* //FIXME: thinking solution of make single full page of login , not into react single page rendering */}
        {/* <a href="/login" className={style.rightContent}>Login</a> */}

        <button className={style.menuBtn} onClick={() => setIsActive(true)}>
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
        className={isActive ? style.showSideMenu : style.closeSideMenu}
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
