import React, { useContext, useReducer } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Head from "./page/head/head";
import Item from "./page/elements/item";
import Footer from "./page/footer/footer";
import Main from "./page/main/main";
import Login from "./page/auth/login";
import ProductProfile from "./page/product/profile";
import User from "./page/userProfile/user";
import { BlurMenu } from "./hook/useBlur";
import Explore from "./page/explore/main";
import useStorageState from "react-use-storage-state";
import { useJWTPayload } from "./hook/useToken";
import SuccessPayment from "./page/payment/success";

function App() {
  const menuBlurSwitch = BlurMenu();
  const menuBlur = menuBlurSwitch.isActive;
  const theme = ["cupcake", "lofi", "luxury"];

  /*********** check user login token **************/
  const user_jwtToken = useStorageState("token", "");
  console.log({ user_jwtToken });

  const localStore: any = useJWTPayload();
  const tokenInfo = localStore;
  console.log({ tokenInfo });

  const userId = tokenInfo?.userId;
  console.log(userId);

  const userEmail = tokenInfo?.email;
  console.log(userEmail);

  // const response = axios.post(`/user/${userId}`, {
  //   headers: { Authorization: `Bearer${tokenInfo}` },
  // });
  // response.then((res: any) => {
  //   console.log(res);
  // });

  /********************************************************************************/

  return (
    <html data-theme={theme[1]} className="flex flex-col justify-between">
      <BrowserRouter>
        <Head />

        <div className={`"mx-auto " ${menuBlur ? "blur-sm" : ""}`}>
          <Routes>
            {/* <Route path="/login" element={<Login showFooter={showFooter} setShowFooter={setShowFooter}/>} /> */}
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile/:id" element={<ProductProfile />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/success/:hash" element={<SuccessPayment />} />
            
          </Routes>
        </div>
        <Footer blur={menuBlur} />
      </BrowserRouter>
    </html>
  );
}

export default App;
