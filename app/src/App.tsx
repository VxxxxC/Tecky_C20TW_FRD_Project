import React, { useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Head from "./page/head/head";
import Item from "./page/elements/item";
import Footer from "./page/footer/footer";
import Main from "./page/main/main";
import Login from "./page/head/components/login";
import PrivateRoute from "./page/auth/private_route";
import ProductProfile from "./page/product/profile";

function App() {
  const theme = ["cupcake", "lofi","luxury"];
  // const [showFooter, setShowFooter] = useState(true);
  return (
    <html data-theme={theme[1]}>
      <BrowserRouter>
        {/* <Head  showFooter={showFooter} setShowFooter={setShowFooter}/> */}
        <Head />
        <div className="m-5">
          <Routes>
            {/* <Route path="/login" element={<Login showFooter={showFooter} setShowFooter={setShowFooter}/>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<ProductProfile/>} />
          </Routes>
        </div>
        {/* {showFooter && <Footer />}{" "} */}
        <Footer />
      </BrowserRouter>
    </html>
  );
}

export default App;
