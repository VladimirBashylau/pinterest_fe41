

import React, { useState } from "react";
import styled from "styled-components";
import HeaderLogin from "./HeaderLogin";
import HeaderUnLogin from "./HeaderUnLogin";
import { useSelector } from "react-redux";

const Header = () => {
  const loginSelector = useSelector((state:any)=> state.login);
  const [login, setLogin] = useState(false);
  return(
<div>
    {login === true ?  <HeaderLogin /> :  <HeaderUnLogin />}
</div>
  )
};

export default Header;