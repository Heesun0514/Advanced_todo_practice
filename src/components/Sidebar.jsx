import React from "react";
import { 
    Drawer,

    List, // 리스트 컨테이너
    ListItem,  // 리스트 항목
    ListItemText,  // 리스트 항목 텍스트
 } from "@mui/material";// Drawer만 import

const Sidebar=({open,onClose})=>{
    
    return(
        <Drawer
        anchor="left" // 왼쪽에서 열림
        open={open}
        onClose={onClose}
        >

  {/* 사이드바 내부 콘텐츠 박스 */}


 {/* Material UI List 사용 */}

     {/* 간단한 메뉴 항목 */}       
<List sx={{width:250}}>

 <ListItem
 button  // 클릭 가능한 버튼 스타일
 onClick={onClose}  // 클릭 시 onClose 실행
 
 ><ListItemText primary= "Close"/> 

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

</Drawer>
    );
};
export default Sidebar;