import { Formik } from "formik";
import React from "react";
import { Input } from "../../components/Input";
import { Button, Grid, Paper } from "@mui/material";
import { validtionForEmailPassword } from "../../helper/validations";

const SignUpComp = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper sx={{ padding: "1rem" }} elevation={2}>
        <Form />
      </Paper>
    </Grid>
  );
};

const Form = () => {
  const onSubmit = (values) => {
    console.log("values are submitted on", values);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
      validationSchema={validtionForEmailPassword}
    >
      {(props) => {
        return (
          <Grid container spacing={2} direction={"column"}>
            <Grid item>
              <Input name="email" type="text" label="email"></Input>
            </Grid>
            <Grid item>
              <Input name="password" type="password" label="password"></Input>
            </Grid>
            <Grid>
              <Button
                onClick={() => props.handleSubmit}
                variant="contained"
                sx={{ marginTop: "1rem" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
};

export default SignUpComp;
