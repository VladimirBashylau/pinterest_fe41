import React, { useRef, useState } from "react";
import styled from "styled-components";
import dr from "../../constans/dr.jpg";
import { postsService } from "../../services/posts";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Form, Formik } from "formik";
import { DefaultTextField } from "../../components/DefaultTextFIeld";

const PostSchema = Yup.object().shape({
  title: Yup.string().min(2).required("Required"),
  text: Yup.string().min(2).required("Required"),
});
const CreatePinPage = () => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [file, setFile] = useState<Blob | null>(null);
  const [previewFile, setPreviewFile] = useState<string | ArrayBuffer | null>(
    null
  );

  const onSubmit = async (values: any) => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      formData.append("file", file as Blob);

      const { data } = await postsService.addPost({
        title: values.title,
        description: "1",
        lesson_num: 1,
        text: values.text,
        image: formData.get("file"),
      });

      toast.success(`${data.name} post has been created`);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    e.preventDefault();

    const data = await Promise.all(
      Array.from(e.target.files as FileList).map(
        (file) =>
          new Promise((res) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file as Blob);

            fileReader.onload = () => {
              res(fileReader.result);
            };
          })
      )
    );

    setFile(e.target.files?.[0] as Blob);

    setPreviewFile(data[0] as string);
  };

  return (
    <Container onSubmit={onSubmit}>
      <Wrapper>
        {previewFile ? (
          <ImageWrapper>
            <img src={previewFile as string} />
          </ImageWrapper>
        ) : (
          <UploadImgWrap>
            <div className="form-input">
              <div className="preview">
                <img id="file-ip-1-preview"></img>
              </div>
              <label htmlFor="file-ip-1">Upload Image</label>
              <input
                id="file-ip-1"
                type="file"
                onChange={onChangeFile}
                ref={inputRef}
              ></input>
            </div>
          </UploadImgWrap>
        )}
        <PostWrapper>
          <Formik
            initialValues={{
              title: "",
              lessonNumber: 0,
              description: "",
              text: "",
            }}
            validationSchema={PostSchema}
            onSubmit={onSubmit}
          >
            <Form className="add_post_form">
              <PostTitleWrap>
                <UploadTitleWrap>
                  <DefaultTextField
                    label="Add your title"
                    variant="standard"
                    name="title"
                    className="post__title"
                  />

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
                  <div>
                    <DefaultTextField
                      className="none"
                      label="Lesson number"
                      type="number"
                      name="lessonNumber"
                    />
                  </div>

                  <DefaultTextField
                    className="none"
                    label="Description"
                    name="description"
                    multiline
                  />

                  <DefaultTextField
                    variant="standard"
                    label="Tell everyone what your Pin is about"
                    name="text"
                    className="post__text"
                  />
                </UploadTitleWrap>
              </PostTitleWrap>
              <UploadImgBtn type="submit">Upload photo</UploadImgBtn>
            </Form>
          </Formik>
          <input
            ref={inputRef}
            type="file"
            style={{
              display: "none",
            }}
            onChange={onChangeFile}
          />
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
  .none {
    display: none;
  }
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
  width: 50%;
  justify-content: space-evenly;
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
  width: 200px;
  :hover {
    background-color: #e1e1e1;
  }
  @media (max-width: 768px) {
    background-color: white;
  }
`;
