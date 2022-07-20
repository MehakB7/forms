import React, { useState } from "react";
import { AddressForm } from "./Address";
import { PaymentForm } from "./Payment";
import {
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@mui/material";
import { Formik } from "formik";

export const ShippingFrom = (props) => {
  const initialState = {
    firstName: "",
    lastName: "",
    addressA: "",
    addressB: "",
    cardName: "",
    cardNo: "",
    cvv: "",
    expireDate: "",
  };

  const steps = ["Contact Address", "Payment Info", "Review"];

  const [activeStep, setStep] = useState(0);

  const handleSubmit = (values) => {
    if (activeStep < steps.length) {
      setStep((pre) => pre + 1);
    } else {
      console.log("values afer submissoin", values);
    }
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return null;
      default:
        return null;
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={3} sx={{ padding: "3rem", width: "500px" }}>
        <Typography variant={"h5"} sx={{ mb: 3 }}>
          {steps[activeStep]}
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Formik initialValues={initialState} onSubmit={handleSubmit}>
          {(props) => {
            return (
              <>
                {renderForm()}
                <Button
                  variant="contained"
                  onClick={props.handleSubmit}
                  sx={{ mt: 4 }}
                >
                  Next
                </Button>
              </>
            );
          }}
        </Formik>
      </Paper>
    </Grid>
  );
};
