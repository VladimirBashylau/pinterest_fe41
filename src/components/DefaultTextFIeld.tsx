import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "formik";

export const DefaultTextField = (props: TextFieldProps) => {
    const [field, meta] = useField({ name: props.name || "" });
  
    return (
      <TextField
        error={!!meta.touched && !!meta.error}
        helperText={meta.error}
        {...props}
        {...field}
      />
    );
  };