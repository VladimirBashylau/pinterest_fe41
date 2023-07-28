import { Button, CircularProgress } from "@mui/material";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { DefaultTextField } from "./DefaultTextFIeld";
import { authService } from "../services/auth";
import * as Yup from "yup";
import { LOCAL_STORAGE_KEYS } from "../services/keys";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../store/reducers/user";
import { styled } from "styled-components";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

type FormikValues = typeof initialValues;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useSelector((store: any) => store.user);

  const dispatch = useDispatch();

  const onSubmit = async (values: FormikValues) => {
    try {
      setIsLoading(true);

      const { data: accessRefreshTokens } =
        await authService.getAccessRefreshTokens(values);

      localStorage.setItem(
        LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
        accessRefreshTokens.access
      );
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.REFRESH_TOKEN,
        accessRefreshTokens.refresh
      );

      const { data: user } = await authService.getCurrentUser();

      dispatch(SetUser(user));
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    if (id) {
      //return navigate(Routes.Home);
        console.log('succses')
    }
  }, [id]);

  return (
    <LoginWrapper>
    <div className="loginWrap">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={LoginSchema}
      >
        <Form
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            maxWidth: 400,
            backgroundColor:"white",
          }}
        >
          <DefaultTextField label="Email" variant="outlined" name="email" />
          <DefaultTextField 
            label="Password"
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
            Login
          </Button>
        </Form>
      </Formik>
    </div>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
.loginWrap{
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
`