import { Typography, Box } from "@mui/material";
import React from "react";

export const SubmitOrder = (props) => {
  return (
    <Box sx={{ mt: 1 }}>
      <Typography>Order placed</Typography>
      <Typography>
        Thank you for shopping with us. Your order MB1230086 has been placed.
        you can track the changes here
      </Typography>
    </Box>
  );
};
