import React from "react";
import { 
    Drawer,
    Box,
    Typography,
    List, // 리스트 컨테이너
    ListItem,  // 리스트 항목
    ListItemText,  // 리스트 항목 텍스트
 } from "@mui/material";// Drawer만 import

const Sidebar=({open,onClose})=>{
    
    return(
        <Drawer
        anchor="left" // 왼쪽에서 열림
        open={open}
        onclose={onClose}
        >
  {/* 사이드바 내부 콘텐츠 박스 */}
<Box sx={{wideth:250,padding:2}}>

      {/* 타이틀 */}
 <Typography variant="h6" gutterBottom>
    Menu
    </Typography>    

 {/* Material UI List 사용 */}

     {/* 간단한 메뉴 항목 */}       
<List>

 <ListItem
 button  // 클릭 가능한 버튼 스타일
 onClick={onClose}  // 클릭 시 onClose 실행
 
 ><ListItemText primary= "Close Menu"/> 

 </ListItem>


   {/* 두 번째 메뉴 항목: 로그아웃 */}

   <ListItem 
   button 
   onClick={()=>{
      // 1. localStorage 초기화
    localStorage.clear();

     // 2. 홈페이지로 이동 (강제 새로고침)
     
    window.location.href="/";
   }}>
    
    <ListItemText primary="Logout" /></ListItem>
</List>
</Box>
</Drawer>
    );
};
export default Sidebar;