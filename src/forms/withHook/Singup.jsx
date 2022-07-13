import React, { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useFormik } from "formik";
import { validtionForEmailPassword } from "../../helper/validations";

export const Signup = () => {
  const [visible, setVisiblity] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validtionForEmailPassword,
    onSubmit: (values) => {
      console.log("values", values);
      fetch("http://192.168.29.232:8080/api/user/signup", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });
    },
  });

  console.log("inside formik", formik);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={3} sx={{ padding: "3rem" }}>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item style={{ width: "100%" }}>
            <TextField
              fullWidth
              label="Email"
              id="email"
              name="email"
              password="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Password"
              password="password"
              id="password"
              name="password"
              type={visible ? "text" : "password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setVisiblity(false)} edge="end">
                      {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </Grid>
          <Grid item rowSpacing={2}>
            <Button variant="contained" onClick={formik.handleSubmit}>
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
