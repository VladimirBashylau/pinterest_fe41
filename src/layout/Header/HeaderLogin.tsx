import React, { useRef } from "react";
import { FaPinterest, FaSearch } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "../../constans/Routes";
import { useDispatch, useSelector } from "react-redux";
import { setHeader } from "../../store/reducers/header";
import { api } from "../../services/api";
import { setSearch } from "../../store/reducers/postsSearch";
import { SetSearchState } from "../../store/reducers/searchState";

const HeaderLogin = () => {
  const dispatch = useDispatch();

  const getPost = (search?: string) => {
    return api.get("/blog/posts/", {
      params: {
        search,
      },
    });
  };

  const SearchSelector = useSelector((state: any) => state.postSearch);

  const inputRef = useRef(null);

  return (
    <Wrapper>
      <LogoWrapper onClick={() => dispatch(SetSearchState("closed"))}>
        <FaPinterest className="MuiSvgIcon" />
      </LogoWrapper>
      <Link className="create__link" to={Routes.Home}>
        <HomeButton>
          <span onClick={() => dispatch(SetSearchState("closed"))}>Home </span>
        </HomeButton>
      </Link>

      <Link className="create__link" to={Routes.Create}>
        <CreateButton onClick={() => dispatch(SetSearchState("closed"))}>
          <span>Create </span>
        </CreateButton>
      </Link>

      <SearchWrapper>
        <SearchBarWrapper>
          <FaSearch />
          <form
            onSubmit={(event) => {
              let result;
              return (
                event.preventDefault(),
                dispatch(SetSearchState("open")),
                (result = getPost(inputRef.current.value).then((respones) =>
                  dispatch(setSearch(respones.data.results))
                ))
              );
            }}
          >
            <input type="text" placeholder="Search" ref={inputRef} />
            <button type="submit"></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>

      <IconWrapper>
        <ShownFaceIcon>{/* Аву сюда */}</ShownFaceIcon>

        <ShownFaceIcon>
          <IconButton>
            <IoMdExit
              className="logout"
              onClick={() => {
                dispatch(SetSearchState("closed"));
                localStorage.clear();
                dispatch(setHeader(false));
              }}
            />
          </IconButton>
        </ShownFaceIcon>
      </IconWrapper>

      <HiddenFaceIcon>
        <IconButton>
          <IoMdExit className="logout" />
        </IconButton>
      </HiddenFaceIcon>
    </Wrapper>
  );
};

export default HeaderLogin;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 30px 4px 10px 16px;
  background-color: white;
  color: black;
  .create__link {
    text-decoration: none;
  }
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon {
    color: #e60023;
    font-size: 2rem;
    cursor: pointer;
  }
  margin: 0 1rem;
`;

const CommonButtons = styled.button`
  display: flex;
  height: 48px;
  min-width: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  border: none;
  font-size: 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HomeButton = styled(CommonButtons)`
  background-color: rgb(17, 17, 17);
  text-decoration: none;
  border: none;
  :link {
    text-decoration: none;
  }
  span {
    text-decoration: none;
    color: white;
    font-weight: 600;
    border: none;
  }
  @media (max-width: 768px) {
    background-color: white;
    :hover {
      background-color: #e1e1e1;
      text-decoration: none;
    }
  }
`;

const CreateButton = styled(CommonButtons)`
  background-color: white;
  transition: 0.3s;
  background-color: #ffffff;
  margin-left: 10px;
  span {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchWrapper = styled.div`
  flex: 0.75;
  @media (max-width: 568px) {
    flex: 1;
  }
  @media (max-width: 360px) {
    max-width: 70vw;
  }
`;

const SearchBarWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  margin-left: 10px;
  border: none;
  background-color: #efefef;
  padding: 0 1rem;
  cursor: pointer;
  form {
    display: flex;
    flex: 1;
    padding: 0 0.3rem;
  }
  form > input {
    background-color: transparent;
    font-size: 1rem;
    border: none;
    outline: none;
    flex: 1;
  }
  form input :focus {
    border: none;
  }
  form > button {
    display: none;
    outline: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
  flex: 0.25;
  @media (max-width: 568px) {
    display: none;
  }
`;

const ShownFaceIcon = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    background-color: none;
  }
`;

const HiddenFaceIcon = styled.div`
  display: none;
  @media (max-width: 567px) {
    display: block;
  }
`;

const IconButton = styled.div`
  cursor: pointer;
  margin: 0 0.8rem;
  position: relative;
  .icon {
    font-size: 1.7rem;
    cursor: pointer;
  }
  .logout {
    color: #e60023;
    font-size: 1.7rem;
    cursor: pointer;
  }

  .notifications {
    position: absolute;
    top: -0.9rem;
    left: 6px;
    color: #ff0000;
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
