import { TextField } from "@mui/material";
import { useField } from "formik";
export const Input = ({ label, ...otherProps }) => {
  const [fields, meta, helpers] = useField(otherProps);
  console.log("helpers", fields, meta, helpers);
  return (
    <TextField
      label={label}
      {...otherProps}
      {...fields}
      error={Boolean(meta.error && meta.touched)}
    ></TextField>
  );
};
