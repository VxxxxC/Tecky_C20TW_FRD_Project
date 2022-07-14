import React, { useState } from "react";
import style from "./login.module.css";
import PasswordChecklist from "react-password-checklist";
import { useForm } from "react-hook-form";

type RegisterProps = {
  showFooter: boolean;
  setShowFooter: (status: boolean) => void;
};

function RegisterPage() {
  const { handleSubmit, register }: any = useForm();

  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
  const handlePasswordAgain = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPasswordAgain(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const onSubmit = (e: { preventDefault: () => void }) => {
    console.log({ e });
    console.log(email, password, passwordAgain);
    console.log(email.length, password.length, passwordAgain.length);
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
