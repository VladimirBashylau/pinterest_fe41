import React from "react";

import "./App.css";
import Header from "./layout/Header/Header";
import Register from "./components/register";
import { useSelector } from "react-redux";
import Login from "./components/login";

import Home from "./pages/Home";

function App() {
  // let loginSelector:string = useSelector((state:any)=>state.login.login);
  // let registerSelector:string = useSelector((state:any)=>state.register.register)
  return (
    <>
      {/* <Header />
      {loginSelector === 'open' ? <Login/> : ''}
      {registerSelector === 'open' ? <Register/>  : ''} */}
    </>
  );
}

export default App;
