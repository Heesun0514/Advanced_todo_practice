import React,{useState} from "react";
import { 
  Container,
  Typography,
 TextField,
 Box,
 Button // 추가
 } from '@mui/material';


 import { useNavigate } from "react-router-dom"; // 추가

 {/* 1. useNavigate import의 의미

import { useNavigate } from 'react-router-dom';
✔ 무엇을 하는 코드인가?
react-router-dom 라이브러리에서 페이지 이동(라우팅)을 담당하는 함수를 가져옵니다.
즉, 버튼 클릭이나 특정 조건이 만족되었을 때 다른 페이지로 이동할 수 있게 해줍니다.
✔ 왜 필요한가?
React는 기본적으로 페이지가 하나(Single Page Application) 이기 때문에
HTML의 <a href=""> 대신 JavaScript로 화면 전환을 제어합니다.
 */}



  {/* sm 화면이 아무리 커도 이 Container의 최대 너비는 약 600px까지만 허용한다 */}
  {/* 텍스트 아래쪽에 기본 여백(margin-bottom)을 자동으로 추가*/}
  {/* sx는 Material UI 전용 스타일 속성(system prop) */}
  {/* marginTop → 위쪽 여백 */}
  {/*  MUI spacing 규칙 /기본값: 1 = 8px /
     marginTop: 8 / 8 × 8px = 64px/ Box의 위쪽에 64픽셀의 여백 */}

const Login=()=>{

  const [username,setUsername]=useState('');
  const navigate = useNavigate();// 추가


{/* 2. const navigate = useNavigate(); 의 의미

const navigate = useNavigate();
✔ 무엇을 의미하는가?
useNavigate()는 React Hook입니다.
이 Hook을 실행하면 navigate라는 함수(function) 를 반환합니다.
즉,
navigate는 다른 페이지로 이동시키는 함수입니다.

✔ 실제 사용 예

navigate('/dashboard');
👉 사용자가 /dashboard 경로로 이동하게 됩니다 */}



{/*
  3-1. username.trim()의 의미

if (username.trim()) {
trim()은 문자열 앞뒤의 공백을 제거합니다.
예:

"   " → "" (빈 문자열)
👉 의미:
사용자가 아무 것도 입력하지 않았거나 공백만 입력한 경우를 막기 위함입니다.

*/}
  const handleLogin =()=>{
    if (username.trim()){ 

         // localStorage에 사용자 정보 저장
      localStorage.setItem('user', username);
      navigate ('/dashboard'); // 라우팅 / 조건이 만족되면 /dashboard 페이지로 이동한다


    }
  };


  const handleKeyPress=(e)=>{
    if (e.key==='Enter'){
      handleLogin();
    }
  };
  
  
  
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
sx={{mt:2}}
value={username}
onChange={(e)=>setUsername(e.target.value)}
onKeyPress ={handleKeyPress}
/>


<Button
 fullWidth
 variant="contained" // 배경색이 채워진 버튼

 sx={{mt:2}}
 onClick={handleLogin}
 disable={!username.trim()}

>
 Login

</Button>
</Box>
    </Container>

  );
};

export default Login;


{/* fullWidth:  입력창(TextField)의 너비를 부모 요소의 100%로 설정한다 --> 부모 요소: <Container maxWidth="sm">
결과: 입력창이 Container의 가로 폭 전체를 차지*/}