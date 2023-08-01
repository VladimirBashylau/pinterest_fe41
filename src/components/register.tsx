import { Button, CircularProgress } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { authService } from "../services/auth";
import { useState } from "react";
import { DefaultTextField } from "./DefaultTextFIeld";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { SetRegister } from "../store/reducers/register";
import { SetUser } from "../store/reducers/user";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().min(4, "Too shoort name").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short password. At least 8 characters")
    .required("Required"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
};

type FormikValues = typeof initialValues;

const Register = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (values: FormikValues) => {
    try {
      setIsLoading(true);

      const { data: user } = await authService.register(values);

      setUser(user);
      dispatch(SetRegister(closed));
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return <h1>Dear {user.username}, pls verify your email</h1>;
  }

  return (
    <RegWrapper>
    <div className="regWrap">
    <svg className="closeIcon" xmlns="http://www.w3.org/2000/svg"  onClick={()=>{dispatch(SetRegister('closed'))}} viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        <Form
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            maxWidth: 400,
            backgroundColor: "white",
            borderRadius: 14,
          }}
        >
          <DefaultTextField
            label="Username"
            variant="outlined"
            placeholder="Username"
            name="username"
          />
          <DefaultTextField label="Email" variant="outlined" name="email" />
          <DefaultTextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
          />
          <Button
            variant="contained"
            type="submit"
            endIcon={
              isLoading ? <CircularProgress color="secondary" /> : undefined
            }
          >
            Register
          </Button>
        </Form>
      </Formik>
      </div>
      </RegWrapper>
  );
};

const RegWrapper = styled.div`
.regWrap{
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 100px;
  padding: 100px 50px;
  border-radius: 10px;
  box-shadow: 0 0 0 500vmax rgb(0 0 0 / 0.5);
  z-index: 100;
  background-color: white;
}
.closeIcon{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
}
`

export default Register;
