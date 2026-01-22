import React from "react";
import { Container, Typography } from '@mui/material';



  {/* sm 화면이 아무리 커도 이 Container의 최대 너비는 약 600px까지만 허용한다 */}
  {/* 텍스트 아래쪽에 기본 여백(margin-bottom)을 자동으로 추가*/}

const Login=()=>{
  return (
  
    <Container maxWidth="sm"> 
<Typography variant="h4" gutterBottom>
  Welcome
</Typography>
<Typography variant="body1" color="text.secondary">
  Please endter your username to continue
</Typography>
    </Container>

  );
};

export default Login;
