import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.scss";
import axios from "axios";
// import { Axios } from "../../../axiosConfig";
// import UseToken from "../../auth/UseToken";
import { useStorageState } from "react-use-storage-state";

// type RegisterProps = {
//   showFooter: boolean;
//   setShowFooter: (status: boolean) => void;
// };
// function Register({showFooter, setShowFooter} :RegisterProps)

function LoginPage() {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  /******** JWT token hook *********/
  // const [token, setToken] = UseToken();

  /******** Redirect function *********/
  const navigate = useNavigate();

  /*********** useStorageState ****************/
  const [token, setToken] = useStorageState("token", "");

  // Handling the email change
  const handleEmail = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill in the blank");
    }

    // if (email && password) {
    //   console.log(email, password);
    //   console.log(email.length, password.length);
    //   setError(false);
    //   setSubmitted(true);
    // } else {
    //   setError(true);
    //   setSubmitted(false);
    // }
    // console.log(email, password);
    // console.log(email.length, password.length);

    // console.log(Axios.defaults.headers.post);
    // console.log(Axios.defaults.headers.common);

    // const response = await axios.post(
    //   "https://unipiece-api.full-stack.app/login",
    //   {
    const response = await axios.post(
      `${process.env.REACT_APP_DEV_API}/login`,
      {
        email: email,
        password: password,
      }
    );

    console.log(response);
    const token = response["data"].JWTtoken;
    console.log(token ? "Jwt Token generated" : "Jwt Token fail to generate");

    setToken(token);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={style.form}>
      <form className={style.formInput}>
        {/* Labels and inputs for form data */}

        <label className={style.label}>Email</label>
        <input
          onChange={handleEmail}
          className={style.input}
          value={email}
          type="email"
          placeholder="Enter Your Email"
          required
        />

        <label className={style.label}>Password</label>
        <input
          onChange={handlePassword}
          className={style.input}
          value={password}
          type="password"
          placeholder="Enter Password"
        />

        <button
          onClick={handleSubmit}
          className={style.btn}
          type="submit"
          // disabled={!email || !password}
        >
          Login
        </button>
        {error == true && (
          <div style={{ color: "red" }}>
            Email or Password is incorrect, please try again
          </div>
        )}
      </form>
      {/* {isOpen && <>Model Box</>} */}
    </div>
  );
}

export default LoginPage;
