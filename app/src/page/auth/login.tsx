import React, { SyntheticEvent, useState } from "react";
import LoginPage from "./loginPage";
import RegisterPage from "./signupPage";
import style from "./login.module.scss";

function Login() {
  const [login, setLogin] = useState(true);
  // console.log(login);

  return (
    <div className={style.container}>
      <div className={style.formTitle}>
        <button
          onClick={() => setLogin(true)}
          className={style.titleLogin}
          style={
            login == !true
              ? { color: "black", background: "rgba(0, 0, 0, 0.6)" }
              : { color: "white", background: "rgba(0, 0, 0, 0.8)" }
          }
        >
          Login
        </button>
        <button
          onClick={() => setLogin(false)}
          className={style.titleReg}
          style={
            login == true
              ? { color: "black", background: "rgba(0, 0, 0, 0.6)" }
              : { color: "white", background: "rgba(0, 0, 0, 0.8)" }
          }
        >
          Register
        </button>
      </div>
      {login == true ? <LoginPage /> : <RegisterPage />}
      {/* {isOpen && <>Model Box</>} */}
    </div>
  );
}

export default Login;
