import React from "react";
import logo from "./logo.svg";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Head from "./page/head/head";
import Item from "./page/elements/item";
import Footer from "./page/footer/footer";

function App() {
  const theme = ["cupcake", "lofi"]
  return (
    <html data-theme={theme[1]}>
      <BrowserRouter>
      {/* <div className=""> */}
      <Head/>
        <Routes>
          <Route path="/" element={ <Item />}/> 
        </Routes>
        <Item />
        <Item />
        <Item />
        <Item />
        <Footer/>
      {/* </div> */}
     </BrowserRouter>
    </html>
  );
}

export default App;
