import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderLogin from "./HeaderLogin";
import HeaderUnLogin from "./HeaderUnLogin";
import { useDispatch, useSelector } from "react-redux";

import { setHeader } from "../../store/reducers/header";

const Header = () => {
  const headerSelector = useSelector((state: any) => state.header.login);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("REFRESH_TOKEN") != null) {
      dispatch(setHeader(true));
    }
  });
  return (
    <Container>
      {headerSelector === true ? <HeaderLogin /> : <HeaderUnLogin />}
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
`;
