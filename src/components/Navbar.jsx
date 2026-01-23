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


const Navbar=({onMenuClick}) => {  // props 추가
    const username=localStorage.getItem('user') || 'User';
    const avatarUrl =`https://i.pravatar.cc/150?u=${username}`; //part 2 추가


    return(
 <AppBar position="static">
   <Toolbar>
     {/* 햄버거 메뉴 아이콘 */}
     <IconButton
    
     edge="start"
     color="inherit"
     onClick={onMenuClick} // 클릭 이벤트 연결
   
     >
        
        <MenuIcon />
     </IconButton>
    
    
    <Typography variant="h6" sx={{flexGrow:1}}>
        Dashboard
    </Typography>
    
   
        <Tooltip title={username}> {/* Tooltip 추가 */}
            <Avatar src={avatarUrl}/> {/* part 1 추가 : 첫 글자만 표시:{username.charAt(0).toUpperCase()} */} {/* part 2 추가 : 고유한 아바타 이미지 생성*/}

           
   
   
    </Tooltip>
  
</Toolbar>

        </AppBar>

    )
}

export default Navbar;