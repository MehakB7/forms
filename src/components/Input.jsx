import { TextField } from "@mui/material";
import { useField } from "formik/dist/Field";
export const Input = ({ label, ...otherProps }) => {
  const [fields, meta, helpers] = useField(otherProps);
  return (
    <TextField
      label={label}
      {...otherProps}
      {...fields}
      error={meta.error}
    ></TextField>
  );
};
