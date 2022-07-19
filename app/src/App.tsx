import React, { useContext, useReducer } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

function App() {
  const menuBlurSwitch = BlurMenu();
  const menuBlur = menuBlurSwitch.isActive;
  const theme = ["cupcake", "lofi","luxury"];

  return (
    <html
      data-theme={theme[1]}
      className="flex flex-col h-screen justify-between"
    >
      <BrowserRouter>
        <Head />

        <div className={`"mx-auto " ${menuBlur ? "blur-sm" : ""}`}>
          <Routes>
            {/* <Route path="/login" element={<Login showFooter={showFooter} setShowFooter={setShowFooter}/>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<ProductProfile />} />
            <Route path="/user" element={<User />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </div>
        <Footer blur={menuBlur} />
      </BrowserRouter>
    </html>
  );
}

export default App;
