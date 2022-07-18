import React from "react";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Select,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useFormik } from "formik";
import { validationForAppointment } from "../../helper/validations";

export const Appointment = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      date: Date.now(),
      location: "",
    },
    validationSchema: validationForAppointment,
    onSubmit: (values) => {
      console.log("on submit is called", values);
    },
  });

  console.log("formil log", formik.isValid, formik.dirty, formik.errors);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h4">{"Interview Form"}</Typography>
      <Paper sx={{ padding: "3rem" }}>
        <Grid container direction={"column"} spacing={3}>
          <Grid item sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <TextField
              id="firstName"
              placeholder="First Name"
              sx={{ marginRight: "1rem" }}
              {...formik.getFieldProps("firstName")}
              error={Boolean(
                formik.errors.firstName && formik.touched.firstName
              )}
            ></TextField>
            <TextField
              id="lastName"
              placeholder="Last Name"
              {...formik.getFieldProps("lastName")}
              error={Boolean(formik.errors.lastName && formik.touched.lastName)}
            ></TextField>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              id="emails"
              placeholder="Email"
              sx={{ marginBottom: "1rem" }}
              {...formik.getFieldProps("email")}
              error={Boolean(formik.errors.email && formik.touched.email)}
            ></TextField>
            <TextField
              id="phone"
              placeholder="PhoneNo"
              sx={{ marginBottom: "1rem" }}
              {...formik.getFieldProps("phone")}
              error={Boolean(formik.errors.phone && formik.touched.phone)}
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disablePast
              sx={{ marginBottom: "1rem" }}
              id="date"
              name="date"
              label="Pick date"
              value={formik.values.date}
              onChange={(value) => {
                if (Date.parse(value) < Date.now()) {
                  return;
                }
                formik.setFieldValue("date", value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  sx={{ marginBottom: "1rem" }}
                  {...formik.getFieldProps("date")}
                />
              )}
            />
          </LocalizationProvider>
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">
              preferred Location
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="location"
              label="location"
              {...formik.getFieldProps("location")}
              error={Boolean(formik.errors.location && formik.touched.location)}
            >
              <MenuItem value={"Pune"}>Pune</MenuItem>
              <MenuItem value={"Chandigarh"}>Chandigarh</MenuItem>
              <MenuItem value={"Delhi"}>Delhi</MenuItem>
              <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
              <MenuItem value={"Hyderabad"}>hyderabad</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{ margin: "1rem" }}
            disabled={!(formik.isValid && formik.dirty)}
            onClick={formik.handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
