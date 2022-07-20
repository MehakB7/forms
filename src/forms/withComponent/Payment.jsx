import { Input } from "../../components/Input";
import { Grid } from "@mui/material";

import { DataPickerField } from "../../components/DataPickerField";

export const PaymentForm = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <Input
            type="text"
            name="cardName"
            label="Name on card"
            fullWidth
          ></Input>
        </Grid>
        <Grid item xs={12}>
          <Input
            type="text"
            name="cardNo"
            label="Card Number"
            fullWidth
          ></Input>
        </Grid>
        <Grid item xs={6}>
          <DataPickerField
            name="expiryDate"
            label="expiration date"
            openTo="year"
            views={["year", "month"]}
          ></DataPickerField>
        </Grid>
        <Grid item xs={6}>
          <Input type="text" name="cvv" label="CVV" fullWidth></Input>
        </Grid>
      </Grid>
    </>
  );
};
