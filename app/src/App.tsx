import React, { useContext, useReducer } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Head, { BlurMenu } from "./page/head/head";
import Item from "./page/elements/item";
import Footer from "./page/footer/footer";
import Main from "./page/main/main";
import Login from "./page/head/components/login";
import ProductProfile from "./page/product/profile";

function App() {
<<<<<<< HEAD
  const menuBlurSwitch = BlurMenu();
  const menuBlur = menuBlurSwitch.isActive;
  const theme = ["cupcake", "lofi"];

=======
  const theme = ["cupcake", "lofi","luxury"];
  // const [showFooter, setShowFooter] = useState(true);
>>>>>>> 8c585879c89d6ca9664ecd454b0809fcab319e13
  return (
    <html
      data-theme={theme[1]}
      className="flex flex-col h-screen justify-between"
    >
      <BrowserRouter>
        <Head />

        <div className={`"m-5" ${menuBlur ? "blur-sm" : ""}`}>
          <Routes>
            {/* <Route path="/login" element={<Login showFooter={showFooter} setShowFooter={setShowFooter}/>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<ProductProfile />} />
          </Routes>
        </div>
        <Footer blur={menuBlur} />
      </BrowserRouter>
    </html>
  );
}

export default App;
