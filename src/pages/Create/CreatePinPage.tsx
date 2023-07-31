import React, { useState } from "react";
import styled from "styled-components";
import dr from "../../constans/dr.jpg";
import { useDispatch } from "react-redux";
import { addPhoto } from "../../store/reducers/posts";
import { Link } from "react-router-dom";
import { Routes } from "../../constans/Routes";

const CreatePinPage = () => {
  const [imgUrl, setImgUrl] = useState<string | ArrayBuffer | null>(null);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!title && !imgUrl) {
      return;
    }

    dispatch(
      addPhoto({
        title,
        imageSrc: imgUrl as string,
        text,
      })
    );
  };

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const fileReader = new FileReader();

    fileReader.readAsDataURL(e.target.files?.[0] as Blob);

    fileReader.onload = () => {
      setImgUrl(fileReader.result);
      console.log(fileReader.result);
    };
  };

  return (
    <Container>
      <Wrapper>
        {imgUrl ? (
          <ImageWrapper>
            <img src={imgUrl as string} />
          </ImageWrapper>
        ) : (
          <UploadImgWrap onSubmit={onSubmit}>
            <div className="form-input">
              <div className="preview">
                <img id="file-ip-1-preview"></img>
              </div>
              <label htmlFor="file-ip-1">Upload Image</label>
              <input
                id="file-ip-1"
                ref={imgUrl}
                type="file"
                onChange={onChangeFile}
                accept="image/*"
              ></input>
            </div>
          </UploadImgWrap>
        )}
        <PostWrapper>
          <PostTitleWrap>
            <UploadTitleWrap>
              <input
                className="post__title"
                placeholder="Add your title"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              ></input>{" "}
              <div className="wrap__com">
                <ProfilWrapper>
                  <div className="user__wrap">
                    <AvatarWrapper>
                      <img src={dr} />
                    </AvatarWrapper>
                    <div>
                      <p className="user__name">User</p>
                    </div>
                  </div>
                </ProfilWrapper>
              </div>
              <input
                className="post__text"
                placeholder="Tell everyone what your Pin is about"
                onChange={(event) => setText(event.target.value)}
                value={text}
              ></input>
            </UploadTitleWrap>
          </PostTitleWrap>
          <Link className="create__link" to={Routes.Home}>
            <UploadImgBtn type="submit">Upload photo</UploadImgBtn>
          </Link>
        </PostWrapper>
      </Wrapper>
    </Container>
  );
};

export default CreatePinPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(50%);
  min-height: 500px;
`;
const UploadImgWrap = styled.form`
  height: 100%;
  width: 50%;
  display: flex;

  justify-content: center;
  .form-input {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px;
    background: #fff;
    box-shadow: -3px -3px 7px rgba(94, 104, 121, 0.377),
      3px 3px 7px rgba(94, 104, 121, 0.377);
  }
  .form-input input {
    display: none;
  }
  .form-input label {
    display: block;
    width: 45%;
    height: 45px;
    margin-left: 25%;
    line-height: 50px;
    text-align: center;
    background: #ff0002;

    color: #fff;
    font-size: 15px;
    font-family: "Open Sans", sans-serif;
    text-transform: Uppercase;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }

  .form-input img {
    width: 100%;
    display: none;

    margin-bottom: 30px;
  }
`;
const UploadTitleWrap = styled.form`
  .post__title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 50px;
  }
  input {
    outline: none;
    width: 100%;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #9f9f9f;
  }
`;
const Wrapper = styled.div`
  display: flex;
  border-radius: 50px;
  box-shadow: 11px 7px 16px 4px #efefef;
  max-width: 1400px;
  transform: translateY(-25%);
  min-width: 900px;
`;
const PostTitleWrap = styled.div`
  margin-bottom: 10px;
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
  padding: 30px 32px 30px 32px;
  /* padding-top: 30px;
  padding-right: 32px;
  padding-left: 32px; */
  width: 50%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

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
export const AvatarWrapper = styled.div`
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

export const UserAvatarWrapper = styled(AvatarWrapper)`
  height: 32px;
  width: 32px;
`;
// const PostHeader = styled.div`
//   display: flex;

//   margin-bottom: 20px;
//   justify-content: space-between;
// `;
// const IconBtnsWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   column-gap: 10px;
//   svg {
//     width: 20px;
//     height: 20px;
//   }
// `;

// const UserCommentWrap = styled.div`
//   display: flex;
//   column-gap: 10px;
//   font-size: 16px;
//   margin: 5px;

//   .user__name {
//     font-weight: 600;
//   }
// `;

// const MyCommentWrap = styled.div`
//   display: flex;
//   column-gap: 10px;
//   align-items: center;
//   padding: 10px 0;
// `;

// const CommentName = styled.div`
//   display: flex;
//   flex-direction: row;
//   font-size: 20px;
//   font-weight: 600;
//   margin-bottom: 12px;
//   margin-top: 12px;
//   svg {
//     width: 20px;
//     height: 20px;
//   }
// `;
// const FormWrap = styled.div`
//   align-items: center;
//   display: flex;
//   height: 52px;
//   width: 100%;
//   border-radius: 50px;
//   border-top: none;
//   background-color: #efefef;
//   padding: 0 1rem;
//   max-width: 400px;
//   cursor: pointer;
//   form {
//     display: flex;
//     flex: 1;
//     padding: 0 0.3rem;
//   }
//   form > input {
//     background-color: transparent;
//     font-size: 1rem;
//     border: none;
//     outline: none;
//     flex: 1;
//   }
//   form input :focus {
//     border: none;
//   }
// `;

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

const UploadImgBtn = styled(CommonButtons)`
  background-color: rgb(255, 1, 1);
  color: white;

  @media (max-width: 768px) {
    background-color: white;

    :hover {
      background-color: #e1e1e1;
    }
  }
`;
