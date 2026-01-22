import React,{useState} from "react";
import { 
  Container,
  Typography,
 TextField,
 Box
 } from '@mui/material';



  {/* sm 화면이 아무리 커도 이 Container의 최대 너비는 약 600px까지만 허용한다 */}
  {/* 텍스트 아래쪽에 기본 여백(margin-bottom)을 자동으로 추가*/}
  {/* sx는 Material UI 전용 스타일 속성(system prop) */}
  {/* marginTop → 위쪽 여백 */}
  {/*  MUI spacing 규칙 /기본값: 1 = 8px /
     marginTop: 8 / 8 × 8px = 64px/ Box의 위쪽에 64픽셀의 여백 */}

const Login=()=>{

  const [username,setUsername]=useState('');
  return (
  
    <Container maxWidth="sm"> 
    <Box sx={{marginTop:8}}>
<Typography variant="h4" gutterBottom>
  Welcome
</Typography>
<Typography variant="body1" color="text.secondary">
  Please endter your username to continue
</Typography>



<TextField
fullWidth
label="Username"
variant="outlined"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>
</Box>
    </Container>

  );
};

export default Login;


{/* fullWidth:  입력창(TextField)의 너비를 부모 요소의 100%로 설정한다 --> 부모 요소: <Container maxWidth="sm">
결과: 입력창이 Container의 가로 폭 전체를 차지*/}