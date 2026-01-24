import React ,{useEffect, useState} from "react";  // useState 추가
import { 

Typography,

Box,
Card,  // 추가
CardContent,  // 추가

} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar'; // 추가
import BreadcrumbsNav from "../components/BreadcrumbsNav";// 추가
import { DataGrid } from '@mui/x-data-grid';// 추가
import {Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField} from '@mui/material'; // part 3 추가
import AddIcon from '@mui/icons-material/Add'; // part 3 추가





const Dashboard=()=>{
 
 const [open,setOpen]=useState(false);  // 🔴 part 1 하드코딩된 정적 데이터
 
 
 // ❌ Part 1: 정적 데이터 (하드코딩) 문제점: 데이터가 고정되어 변경 불가
 // 🔵 Part 2 : 상태로 관리 / 변경 가능

 const [rows,setRows]=useState([]); // 빈 배열로 시작

  
 // Part 1 DataGrid 데이터 준비
 // Part 2: API 데이터 구조에 맞춤

  const columns = [ // 컬럼 정의
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Task', width: 250 },  // ✅ API의 'title' 필드 사용
    { field: 'completed', headerName: 'Status', width: 130, // API의 'completed' 필드 (boolean)
valueFormatter :(params)=> params.value ? 'Done':'Pending'  // 🔵 변환 로직
    },
  ];

/*
데이터 변환 과정:

javascript
// API 데이터: { completed: false }
// 변환 과정:
params.value = false
↓
params.value ? 'Done' : 'Pending'
↓
false ? 'Done' : 'Pending'
↓
'Pending'

// API 데이터: { completed: true }
params.value = true
↓
true ? 'Done' : 'Pending'
↓
'Done'
왜 변환하나요?

API 데이터 형식: boolean (true/false)
UI 표시 형식: string ("Done"/"Pending")
가독성: 사용자가 이해하기 쉬운 형태로 표시


*/




 // 🔴 part 1 API 호출 없음
  // 🔴 part 1 useEffect 없음

  // 🔵 API 호출 추가!
  useEffect(()=>{

      // 1. API 호출
    fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10')

     // 2. 응답을 JSON으로 변환
    .then(res=>res.json())

    // 3. 상태 업데이트
    .then(data=>setRows(data))

     // 4. 에러 처리
     .catch(error=>console.error("Error loading tasks:",error));

  }, []);  // 빈 의존성 배열 = 마운트 시 1회 실행




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