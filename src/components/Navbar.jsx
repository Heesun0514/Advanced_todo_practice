import React from "react";
import {
     AppBar,
     Toolbar,
     Typography,
     IconButton,
   
     Avatar, // 추가
     Tooltip  // 추가

    } from "@mui/material";

    import MenuIcon from '@mui/icons-material/Menu'; // 추가
 
    import { useAuth } from "../Context/Authcontext"; // part 5 added


const Navbar=({onMenuClick}) => {  
    
    {/* part 2
    // props 추가
    part 5 : // ❌ 직접 localStorage 접근 (취약)

    const username=localStorage.getItem('user') || 'User';
    const avatarUrl =`https://i.pravatar.cc/150?u=${username}`; //part 2 추가

    */}
  


    //파트 5: AuthContext 통해 접근
    /*
    
보안: 직접 localStorage 접근 제거
일관성: 전체 앱에서 동일한 방식으로 사용자 정보 접근
실시간 동기화: Firebase 상태 변경 시 자동 업데이트
    
    */
const {user,logout}=useAuth();
   


{/*
    
     return(
 <AppBar position="static">
   <Toolbar>
      햄버거 메뉴 아이콘 
     <IconButton edge="start" color="inherit" onClick={onMenuClick}> // 클릭 이벤트 연결
     <MenuIcon />
     </IconButton>
     <Typography variant="h6" sx={{flexGrow:1}}> Dashboard </Typography>
     <Tooltip title={username}> Tooltip 추가 
 part 1  <Avatar>{username.charAt(0).toUpperCase()}</Avatar>  
  part 2 추가 : 고유한 아바타 이미지 생성*
   <Avatar src={avatarUrl}/>  
      </Tooltip>
      </Toolbar>
 </AppBar>

*/}
    
    return(
 <AppBar position="static">
   <Toolbar>
     {/* 햄버거 메뉴 아이콘 */}
     <IconButton edge="start" color="inherit" onClick={onMenuClick}> // 클릭 이벤트 연결
     <MenuIcon />
     </IconButton>
     <Typography variant="h6" sx={{flexGrow:1}}> Dashboard </Typography>
     
     { user && (
        <>
   <Tooltip title={user.email}>

   <Avatar src={user.photoURL || undefined}>{user.email?.[0]}</Avatar>
      </Tooltip>
      <Button color="inherit" onClick={logout}>Logout</Button>
        </>
     )}
     
    
      </Toolbar>
 </AppBar>
);
};

export default Navbar;