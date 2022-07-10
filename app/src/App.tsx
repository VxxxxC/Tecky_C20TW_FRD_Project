import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Head from "./page/head/head";
import Item from "./page/elements/item";
import Footer from "./page/footer/footer";
import Main from "./page/main/main";

function App() {
  const theme = ["cupcake", "lofi"];
  return (
    <html data-theme={theme[1]}>
      <BrowserRouter>
          <Head />
          <div className="m-5">
            <Routes>
              <Route path="/" element={<Main />} />
            </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </html>
  );
}

export default App;
