import React from "react";
import { AppBar,Toolbar,Typography } from "@mui/material";

const Navbar=()=>{
    const username=localStorage.getItem('user') || 'User';


{/*|| 'User'
만약 localStorage에 값이 없으면 'User'로 기본값 사용
즉, 사용자가 로그인하지 않았거나 정보가 없으면 기본적으로 "User"가 표시됩니다. */}

    return(

   <AppBar postion="static">
    <Toolbar>
<Typography variant="h6" component="div" sx={{flexGrow:1}}>
    Advanced Todo App
</Typography>
<Typography variant="body1">
    {username}
</Typography>
    </Toolbar>
   </AppBar>
    );
};

export default Navbar;