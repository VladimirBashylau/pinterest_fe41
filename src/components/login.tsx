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
import { setHeader } from "../store/reducers/header";
import { SetLogin } from "../store/reducers/login";

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
      dispatch(setHeader(true));
      dispatch(SetLogin('closed'));
    } catch (error) {
      console.dir(error);
    } finally {
      setIsLoading(false);
    }
  };

  const modal = document.getElementById('modal');
  const logniButton = document.getElementById('loginButton');



  useEffect(() => {
    if (id) {
      //return navigate(Routes.Home);
        console.log('succses')
    }
  }, [id]);


  return (
    <LoginWrapper>
    <div className="loginWrap" id="modal">
    <svg className="closeIcon" xmlns="http://www.w3.org/2000/svg"  onClick={()=>{dispatch(SetLogin('closed'))}} viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
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
.closeIcon{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
}
`