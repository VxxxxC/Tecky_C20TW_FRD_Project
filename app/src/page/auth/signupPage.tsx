import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.scss";
import PasswordChecklist from "react-password-checklist";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { Axios } from "../../../axiosConfig";
// import UseToken from "../../auth/UseToken";
import { useStorageState } from "react-use-storage-state";

// type RegisterProps = {
//   showFooter: boolean;
//   setShowFooter: (status: boolean) => void;
// };

function RegisterPage() {
  const { handleSubmit, register }: any = useForm();

  /*********** useStorageState ****************/
  const [token, setToken] = useStorageState("token", "");

  /******** JWT token hook *********/
  // const [token, setToken] = useToken();

  /******** Redirect function *********/
  const navigate = useNavigate();

  /******** setUser recoil *********/
  // const setUser = useSetRecoilState();

  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  // Handling the email change
  const handleEmail = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  const handlePasswordAgain = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPasswordAgain(e.target.value);
  };

  /************** Handling the form submission ****************/
  const onSubmit = async (e: { preventDefault: () => void }) => {
    // console.log(email, password, passwordAgain);
    // console.log(email.length, password.length, passwordAgain.length);

    if (password !== passwordAgain) {
      return alert("password not match!");
    }

    const response = await axios.post(
      `${process.env.REACT_APP_DEV_API}/signup`,
      {
        email: email,
        password: password,
      }
    );

    // console.log(response);
    const registerResult = response.data;
    const token = registerResult.JWTtoken;
    // console.log(token);

    setToken(token);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className={style.form}>
      <form className={style.formInput} onSubmit={handleSubmit(onSubmit)}>
        {/* Labels and inputs for form data */}

        <label className={style.label}>Email</label>
        <input
          onChange={handleEmail}
          className={style.input}
          value={email}
          type="email"
          ref={register()}
          placeholder="Enter Your Email"
        />

        <label className={style.label}>Password</label>
        <input
          onChange={handlePassword}
          className={style.input}
          value={password}
          type="password"
          placeholder="Enter Password"
        />
        <label className={style.label}>Enter Password again</label>
        <input
          onChange={handlePasswordAgain}
          className={style.input}
          value={passwordAgain}
          type="password"
          placeholder="Enter Password again"
        />

        <button
          className={style.btn}
          type="submit"
          disabled={!email || !password || !passwordAgain}
        >
          Sign up
        </button>
      </form>

      <PasswordChecklist
        className={style.passwordCheck}
        rules={["minLength", "specialChar", "number", "capital", "match"]}
        minLength={8}
        value={password}
        valueAgain={passwordAgain}
      />
    </div>
  );
}

export default RegisterPage;
