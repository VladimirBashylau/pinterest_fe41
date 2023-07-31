import React, { useEffect, useState } from "react";

import HeaderLogin from "./HeaderLogin";
import HeaderUnLogin from "./HeaderUnLogin";
import { useDispatch, useSelector } from "react-redux";
import { LOCAL_STORAGE_KEYS } from "../../services/keys";
import { setHeader } from "../../store/reducers/header";

const Header = () => {
  const headerSelector = useSelector((state:any)=> state.header.login);
  const loginSelector = useSelector((state:any)=> state.login);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('REFRESH_TOKEN') != null){dispatch(setHeader(true))};
  });
  return(
<div>
    {headerSelector === true ?  <HeaderLogin /> :  <HeaderUnLogin />}
</div>
  )
};

export default Header;
