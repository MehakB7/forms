import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

export const DataPickerField = (props) => {
  const [fields, meta, helper] = useField(props.name);
  console.log("fields are", fields, helper);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disablePast
        sx={{ marginBottom: "1rem" }}
        {...fields}
        {...props}
        onChange={(value) => {
          if (Date.parse(value) < Date.now()) {
            return;
          }
          meta.setValue(value);
        }}
        renderInput={(params) => (
          <TextField {...params} sx={{ marginBottom: "1rem" }} />
        )}
      />
    </LocalizationProvider>
  );
};
