import React from "react";
import {
     AppBar,
     Toolbar,
     Typography,
     IconButton,
     Box 

    } from "@mui/material";

    import MenuIcon from '@mui/icons-material/Menu'; // 추가


const Navbar=()=>({onMenuClick}) => {  // props 추가
    const username=localStorage.getItem('user') || 'User';


    return(
 <AppBar position="static">
   <Toolbar>
     {/* 햄버거 메뉴 아이콘 */}
     <IconButton
     size="large"
     edge="start"
     color="inherit"
     aria-label="menu"
     onClick={onMenuClick} // 클릭 이벤트 연결
     sx={{mr:2}}
     >
        
        <MenuIcon />
     </IconButton>
    
    
    <Typography variant="h6" component="div" sx={{flexGrow:1}}>
        Advanced Todo App
    </Typography>
    
    <Box sx={{display:'flex', alignItems:'center'}}>
    <Typography variant="body1">
        {username}
    </Typography>
    </Box>
</Toolbar>

        </AppBar>

    )
}

export default Navbar;