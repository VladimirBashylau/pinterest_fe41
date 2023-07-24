import React from "react";
import styled from "styled-components";
import {
  AiOutlineEllipsis,
  AiOutlineDownload,
  AiOutlineCopy,
  AiOutlineRight,
  AiOutlineDown,
} from "react-icons/ai";
const PostItem = () => {
  return (
    <Wrapper>
      <div className="image__wrapper">
        <img src="" />
      </div>
      <PostWrapper>
        <PostHeader>
          <IconBtnsWrapper>
            <AiOutlineEllipsis />
            <AiOutlineDownload />
            <AiOutlineCopy />
          </IconBtnsWrapper>
          <SaveButton>Save</SaveButton>
        </PostHeader>

        <ProfilWrapper>
          <img src="" />
          <div>
            <p className="username">User</p>
            <p className="followers">31 followers</p>
          </div>
          <FollowButton>Follow</FollowButton>
        </ProfilWrapper>
        <CommentsWrapper>
          <CommentName>
            <p>Comments</p>
            <AiOutlineDown />
            <AiOutlineRight />
          </CommentName>
          <div className="comments">
            <UserCommentWrap>
              <img src="" alt="" className="UserAvatar" />
              <p className="user__name">name</p>
              <p className="UserComment">comment</p>
            </UserCommentWrap>
          </div>

          <MyCommentWrap>
            <img src="" alt="" className="MyAvatar" />
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
        </CommentsWrapper>
      </PostWrapper>
    </Wrapper>
  );
};

export default PostItem;

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 50px;
  border: 1px solid black;
`;
const PostHeader = styled.div`
  display: flex;
  align-items: center;
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

const CommentsWrapper = styled.div``;
const UserCommentWrap = styled.div`
  display: flex;
  column-gap: 10px;
  font-size: 16px;

  .user__name {
    font-weight: 600;
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
`;
const PostWrapper = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;
const MyCommentWrap = styled.div`
  border-top: 1px solid black;
`;

const CommentName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 600;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const FormWrap = styled.div`
  align-items: center;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  margin-left: 10px;
  border-top: none;
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
