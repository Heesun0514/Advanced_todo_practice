import React ,{useState} from "react";  // useState 추가
import { 

Typography,

Box,
Card,  // 추가
CardContent  // 추가
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar'; // 추가
import BreadcrumbsNav from "../components/BreadcrumbsNav";// 추가
import { DataGrid } from '@mui/x-data-grid';// 추가



const Dashboard=()=>{
 
 const [open,setOpen]=useState(false);
  
 // DataGrid 데이터 준비
 const rows = [ // 데이터 배열
    { id: 1, task: 'Finish report', status: 'Done' },
    { id: 2, task: 'Update website', status: 'Pending' },
  ];

  const columns = [ // 컬럼 정의
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'task', headerName: 'Task', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];



  return (

    <>
   <Navbar onMenuClick={()=>setOpen(true)}/>
   <Sidebar open={open} onClose={()=>setOpen(false)}/> {/* 사이드바 추가 */}


    
      <Box sx={{p:2}}>
         {/* Breadcrumbs 추가 */}
         <BreadcrumbsNav/>


          {/* Welcome Card 추가 */}
          <Card sx={{mb:3}}>
            <CardContent>
      <Typography variant="h5">
        Welcome Back!
      </Typography>

      <Typography variant="body1">
       Here's an overivew of your tasks
      </Typography>
      </CardContent>
      </Card>

 {/* DataGrid 추가 */}
 
  <DataGrid
  autoHeight
  rows={rows}
  columns={columns}
  pageSize={5}  
  />
 

      </Box>
   
</>
  );
};
export default Dashboard;