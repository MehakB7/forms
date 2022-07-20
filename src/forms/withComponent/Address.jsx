import { Input } from "../../components/Input";
import { SelectBox } from "../../components/Select";
import { Grid } from "@mui/material";

import { cities, state } from "../../helper/constants";

export const AddressForm = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={6}>
          <Input
            type="text"
            name="firstName"
            label="First Name"
            fullWidth
          ></Input>
        </Grid>
        <Grid item xs={6}>
          <Input
            type="text"
            name="lastName"
            label="Last Name"
            fullWidth
          ></Input>
        </Grid>
        <Grid item xs={12}>
          <Input
            type="text"
            name="address"
            label="Address Line 1"
            fullWidth
          ></Input>
        </Grid>
        <Grid item xs={12}>
          <Input
            type="text"
            name="address"
            label="Address Line 2"
            fullWidth
          ></Input>
        </Grid>
        <Grid item>
          <SelectBox
            options={cities}
            name="city"
            title="City*"
            fullWidth
          ></SelectBox>
        </Grid>
        <Grid item xs={6}>
          <SelectBox
            options={state}
            name="state"
            title="State*"
            fullWidth
          ></SelectBox>
        </Grid>
        <Grid item>
          <Input type="text" name="zipcode" label="zipcode" fullWidth></Input>
        </Grid>
      </Grid>
    </>
  );
};
