import React from "react";
import { Container,Typography } from "@mui/material";
import Dashboard from './Dashboard';

const Dashboard=()=>{
  return (
    <Container>
      <Typography variant="h4" sx={{mt:4}}>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the Dashboard
      </Typography>
    </Container>

  );
};
export default Dashboard;