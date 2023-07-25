import React from "react";
import styled from "styled-components";
import {
  AiOutlineEllipsis,
  AiOutlineDownload,
  AiOutlineCopy,
  AiOutlineRight,
  AiOutlineDown,
} from "react-icons/ai";
import dr from "./dr.jpg";
const PostItem = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={dr} />
        </ImageWrapper>
        <PostWrapper>
          <PostHeader>
            <IconBtnsWrapper>
              <AiOutlineEllipsis />
              <AiOutlineDownload />
              <AiOutlineCopy />
            </IconBtnsWrapper>
            <SaveButton>Save</SaveButton>
          </PostHeader>
          <div className="wrap__com">
            <ProfilWrapper>
              <div className="user__wrap">
                <AvatarWrapper>
                  <img src={dr} />
                </AvatarWrapper>
                <div>
                  <p className="user__name">User</p>
                  <p className="followers">31 followers</p>
                </div>
              </div>

              <FollowButton>Follow</FollowButton>
            </ProfilWrapper>
            <div>
              <CommentName>
                <p>Comments</p>
                <AiOutlineDown />
                <AiOutlineRight />
              </CommentName>
              <div className="comments">
                <UserCommentWrap>
                  <UserAvatarWrapper>
                    <img src={dr} className="UserAvatar" />
                  </UserAvatarWrapper>
                  <p className="user__name">name</p>
                  <p className="UserComment">comment</p>
                </UserCommentWrap>
              </div>
            </div>
          </div>

          <MyCommentWrap>
            <AvatarWrapper>
              <img src={dr} alt="" className="MyAvatar" />
            </AvatarWrapper>
            <FormWrap>
              <form>
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="MyComment"
                />
              </form>
            </FormWrap>
          </MyCommentWrap>
        </PostWrapper>
      </Wrapper>
    </Container>
  );
};

export default PostItem;

const Container = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(50%);
`;
const Wrapper = styled.div`
  display: flex;
  border-radius: 50px;
  box-shadow: 11px 7px 16px 4px #efefef;
  max-width: 1400px;
  transform: translateY(-25%);
`;
const ImageWrapper = styled.div`
  width: 50%;

  img {
    border-radius: 50px 0 0 50px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 600px;
  }
`;
const PostWrapper = styled.div`
  padding-top: 10px;
  padding-right: 32px;
  padding-left: 32px;
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .wrap__com {
    overflow-y: scroll;
    overflow-x: hidden;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 0 !important;
      height: 0;
      display: none !important;
      background: transparent;
    }

    height: 360px;
  }
`;
const ProfilWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  p {
    font-size: 14px;
  }
  .user__wrap {
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
  }
  .user__name {
    font-weight: 600;
  }
`;
const AvatarWrapper = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

const UserAvatarWrapper = styled(AvatarWrapper)`
  height: 30px;
  width: 30px;
`;
const PostHeader = styled.div`
  display: flex;

  margin-bottom: 32px;
  justify-content: space-between;
`;
const IconBtnsWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const UserCommentWrap = styled.div`
  display: flex;
  column-gap: 10px;
  font-size: 16px;
  margin: 5px;

  .user__name {
    font-weight: 600;
  }
`;

const MyCommentWrap = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  padding: 10px 0;
`;

const CommentName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  margin-top: 12px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const FormWrap = styled.div`
  align-items: center;
  display: flex;
  height: 52px;
  width: 100%;
  border-radius: 50px;
  border-top: none;
  background-color: #efefef;
  padding: 0 1rem;
  max-width: 400px;
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
`;

const CommonButtons = styled.button`
  display: flex;
  height: 48px;
  min-width: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  font-size: 20px;
  border: none;

  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const FollowButton = styled(CommonButtons)`
  background-color: rgb(179, 179, 179);

  @media (max-width: 768px) {
    background-color: white;

    :hover {
      background-color: #e1e1e1;
    }
  }
`;

const SaveButton = styled(CommonButtons)`
  background-color: rgb(255, 0, 0);
  color: #ffffff;
  @media (max-width: 768px) {
    background-color: white;
    :hover {
      background-color: #e1e1e1;
    }
  }
`;
