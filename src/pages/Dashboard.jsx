import React ,{useState} from "react";  // useState 추가
import { 
Container,
Typography,
Button,
Box,
Card,  // 추가
CardContent  // 추가
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'; // 추가
import Sidebar from '../components/Sidebar'; // 추가
import BreadcrumbsNav from "../components/BreadcrumbsNav";// 추가



const Dashboard=()=>{
  const navigate = useNavigate();
  const username=localStorage.getItem('user');
  const [sidebarOpen,setSidebarOpen]=useState(false);// 사이드바 상태 추가
  

  const handleLoggout=()=>{
    localStorage.removeItem('user');
    navigate('/')
    
  };

const handleMenuClick=()=>{
  console.log ('Menu clicked-sidebar will open');
  setSidebarOpen(true); // 사이드바 열기
}


const handleSidebarClose=()=>{
  setSidebarOpen(false);
}
  return (

    <>
   <Navbar onMenuClick={handleMenuClick}/> {/* props 전달 */}
   <Sidebar open={sidebarOpen} onClose={handleSidebarClose}/> {/* 사이드바 추가 */}


    <Container>
      <Box sx={{mt:4}}>
         {/* Breadcrumbs 추가 */}
         <BreadcrumbsNav/>


          {/* Welcome Card 추가 */}
          <Card>
            <CardContent>
      <Typography variant="h5" gutterBottom>
        Welcome Back!
      </Typography>

      <Typography variant="body1" sx={{mb:3}}>
        Welcome,{username}! Here's an overivew of your tasks
      </Typography>
      </CardContent>
      </Card>

<Button
variant="outlined"
onClick={handleLoggout}
sx={{mt:2}}
>
  Logout
</Button>

      </Box>
    </Container>
</>
  );
};
export default Dashboard;