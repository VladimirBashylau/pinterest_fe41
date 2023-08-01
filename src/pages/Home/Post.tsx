import React from "react";
import styled from "styled-components";

import { UserAvatarWrapper } from "../PostItem/PostItem";
interface IProps {
  title: string;
  src: string;
}
const Post = ({ title, src }: IProps) => {
  return (
    <Container>
      <div>
        <ImageWrapper>
          <img src={src} alt="" />
        </ImageWrapper>

        <p className="image__name">{title}</p>
        <UserWrapper>
          <UserAvatarWrapper>
            <img src={src} alt="" className="user__avatar" />
          </UserAvatarWrapper>
          <p className="user__name">{title}</p>
        </UserWrapper>
      </div>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: inline-flex;
  padding: 10px;
  p {
    color: black;
  }
  .image__name {
    font-weight: 600;
  }
`;
export const UserWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  cursor: pointer;
  width: 236px;
  box-sizing: border-box;
  img {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 16px;
    cursor: zoom-in;
    object-fit: cover;
    cursor: pointer;
  }
`;
