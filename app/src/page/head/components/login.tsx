import React, { useState } from "react";
import style from "./login.module.css";
import PasswordChecklist from "react-password-checklist";

function Register() {
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
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(email, password, passwordAgain);
    console.log(email.length, password.length, passwordAgain.length);
    // if (email === "" || password === "") {
    //   setError(true);
    // } else {
    //   setSubmitted(true);
    //   setError(false);
    // }
  };

  // // Showing success message
  // const successMessage = () => {
  //   return (
  //     <div
  //       className={style.success}
  //       style={{
  //         display: submitted ? "" : "none",
  //       }}
  //     >
  //       <h1>{email} successfully registered!!</h1>
  //     </div>
  //   );
  // };

  // // Showing error message if error is true
  // const errorMessage = () => {
  //   return (
  //     <div
  //       className={style.error}
  //       style={{
  //         display: error ? "" : "none",
  //       }}
  //     >
  //       <h1>Please enter all the fields</h1>
  //     </div>
  //   );
  // };

  return (
    <div className={style.container}>
      <div className={style.form}>
        {/* Calling to the methods
        <div className={style.message}>
          {errorMessage()}
          {successMessage()}
        </div> */}

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
          <label className={style.label}>Enter Password again</label>
          <input
            onChange={handlePasswordAgain}
            className={style.input}
            value={passwordAgain}
            type="password"
            placeholder="Enter Password again"
          />

          <button onClick={handleSubmit} className={style.btn} type="submit">
            Submit
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

    </div>
  );
}

export default Register;
