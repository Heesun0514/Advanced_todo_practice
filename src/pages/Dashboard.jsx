import React from "react";
import { 
Container,
Typography,
Button,
Box
} from "@mui/material";

import { useNavigate } from "react-router-dom";


const Dashboard=()=>{
  const navigate = useNavigate();
  const username=localStorage.getItem('user');

  const handleLoggout=()=>{
    localStorage.removeItem('user');
    navigate('/')
    
  };



  return (
    <Container>
      <Box sx={{mt:4}}>
      <Typography variant="h4">
        Dashboard
      </Typography>
      <Typography variant="body1" sx={{mb:3}}>
        Welcome,{username}!
      </Typography>

<Button
variant="outlined"
onClick={handleLoggout}
>
  Logout
</Button>
      </Box>
    </Container>

  );
};
export default Dashboard;