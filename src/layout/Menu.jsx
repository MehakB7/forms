import { Button, Grid, Paper, Typography } from "@mui/material";

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navigation } from "../helper/constants";

export const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location is", location);
  if (!navigation[location.pathname]) {
    return null;
  }
  const { name, routes } = navigation[location.pathname];

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Typography variant="h4">{name}</Typography>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "3rem",
          margin: "1rem",
        }}
      >
        {routes.map((item, index) => (
          <Button
            key={index}
            onClick={() => {
              navigate(item.path);
            }}
            variant={"contained"}
            sx={{ margin: "1rem" }}
          >
            {" "}
            {item.name}{" "}
          </Button>
        ))}
      </Paper>
    </Grid>
  );
};
