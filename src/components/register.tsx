import { Button, CircularProgress } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { authService } from "../services/auth";
import { useState } from "react";
import { DefaultTextField } from "./DefaultTextFIeld";

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

  const onSubmit = async (values: FormikValues) => {
    try {
      setIsLoading(true);

      const { data: user } = await authService.register(values);

      setUser(user);
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
    <div>
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
  );
};

export default Register;
