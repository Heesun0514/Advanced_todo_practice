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
 
  // 🔴 part 1 하드코딩된 정적 데이터,  사이드바 상태 (기존)
  // ❌ 정적 데이터 (하드코딩) 문제점: 데이터가 고정되어 변경 불가
 const [open,setOpen]=useState(false);  

 
 
 
 // 🔵 Part 2 : 상태로 관리 / 변경 가능, 빈 배열로 시작, Task 데이터, Read만 가능

 const [rows,setRows]=useState([]); 

  
 // Part 1 DataGrid 데이터 준비
 // Part 2: API 데이터 구조에 맞춤


 // Part 3:  ✅ 여기에 CRUD 관련 상태 추가

 // 모달 열림/닫힘

 const [openDialog,setOpenDialog]=useState(false);


 // 새 Task 입력값

 const [newTask,setNewTask]=useState('');


 // 🟢 향후: Update, Delete 추가 예정



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

  // 🔵 part 2 : API 호출 추가. 데이터 가져오기만 함
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






 // part 3: ✅ 여기에 handleAddTask 함수 추가,(Create 추가)


const handleAddTask = () => {

  //  fetch API 호출: 데이터를 서버에 저장하기 위해서

  fetch('https://jsonplaceholder.typicode.com/todos', {

    // HTTP 메서드 설정

    method: 'POST', // 새 리소스를 생성할 때 사용


    //  요청 본문(Body) 설정
    body: JSON.stringify({
      title: newTask,
      completed: false,
      userId: 1
    }),


    // HTTP 헤더 설정 :  HTTP 요청에 추가 정보 제공
    // 내가 보내는 데이터는 JSON 형식이야"라고 서버에 알림, 서버가 데이터를 올바르게 파싱할 수 있음
    // charset=UTF-8: 문자 인코딩 방식 (한글 등 다양한 문자 지원)

    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })

  // 첫 번째 then: 응답 처리

// JavaScript 객체로 변환된 데이터
    .then(response => response.json())



    // 두 번째 then: 데이터 처리
    .then(data => {


       // ✅ API 응답 + 임시 ID 생성

         /*
         1. setRows() 함수:
         React의 상태 업데이트 함수 
         rows 상태를 새로운 값으로 업데이트

         2.prev => (함수형 업데이트):
         prev: 현재 rows 상태 값
         함수형 업데이트: 이전 상태를 기반으로 새 상태 계산
         장점: 최신 상태 보장, 여러 업데이트가 겹칠 때 문제 방지


        3.[...prev] (스프레드 연산자):
        ... (spread operator): 배열의 모든 요소를 펼침
        [...prev]: prev 배열의 복사본 생성

        4. { ...data, id: prev.length + 1 }: 
        ...data: API 응답의 모든 속성 복사
        id: prev.length + 1: 새 ID 생성 (기존 배열 길이 + 1)
        문제점: API 응답에 이미 id가 있음 (서버에서 생성한 id: 201)
        실제 동작: {...data, id: prev.length + 1}에서 id가 덮어써짐

         
         */ 
          
      setRows(prev => [...prev, { ...data, id: prev.length + 1 }]);

   // UI 상태 초기화
      setOpenDialog(false);

      setNewTask('');
    });
};



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


  {/* part 3: ✅ Add Task 버튼 추가 (DataGrid 위에) */}
<Button
variant="contained"
startIcon={<AddIcon/>}
onClick={()=>setOpenDialog(true)}
sx={{mb:2}}
>
  Add Task
</Button>

{/* part 3:  ✅ Add Task 모달 추가 */} 
<Dialog open={openDialog} onClose={()=>setOpenDialog(false)}>
  <DialogTitle>Add New Task</DialogTitle>
    <DialogContent>
<TextField
autoFocus
margin="dense"
label="Task Title"
fullWidth
variant="outlined"
onChange={e=>setNewTask(e.target.value)}

/>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>setOpenDialog(false)}>
        Cancel
      </Button>
      <Button onClick={handleAddTask}>
        Add
      </Button>
    </DialogActions>
</Dialog>





 {/*  DataGrid 추가 */}
 
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