import React,{useState} from "react";
import { 
  Container,
  Typography,
 TextField,
 Button// 추가

 } from '@mui/material';



 {/* 1. useNavigate import의 의미

import { useNavigate } from 'react-router-dom';
✔ 무엇을 하는 코드인가?
react-router-dom 라이브러리에서 페이지 이동(라우팅)을 담당하는 함수를 가져옵니다.
즉, 버튼 클릭이나 특정 조건이 만족되었을 때 다른 페이지로 이동할 수 있게 해줍니다.
✔ 왜 필요한가?
React는 기본적으로 페이지가 하나(Single Page Application) 이기 때문에
HTML의 <a href=""> 대신 JavaScript로 화면 전환을 제어합니다.
 */}


// import { useNavigate } from "react-router-dom"; // 추가, part 4  delete






 // part 3 추가 ✅ Context API 사용 ,part 5 delete

 // import { useAuth } from "../Context/Authcontext";

 // part 4 추가 , part 5 delete
 // import {Link} from 'react-router-dom'; 





 /*
 
 part 5
Context API 의존성 제거 → Firebase 직접 호출
useAuth() 제거 → Firebase SDK 직접 사용

 
 */ 
 //part 5 추가 
 import { useNavigate } from "react-router-dom"; 
 
 // ✅ Firebase 함수 직접 임포트

 import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
 import {auth,googleProvider} from '../firebase'

 
const Login=()=>{

  // const [username,setUsername]=useState(''); "username" 사용
  // part 5 delete


  // part 5 , "email"로 변경
  /*
  
  Firebase는 이메일을 기본 식별자로 사용
  사용자명 대신 이메일로 인증 통일

  
  */
  const[email,setEmail]=useState('');



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
  // const navigate = useNavigate();// 추가

  // part 4 
const [password,setPassword]=useState('');

  // part 3: Context API 사용, AuthContext에서 가져옴 
  // const {login} = useAuth();  part 5 delete






 {/* part 3 

 const handleLogin =()=>{
    if (username){ 

         // Context의 login 함수 호출
         
         
         관심사 분리: 로그인 로직이 AuthContext에 캡슐화됨
         일관성: 모든 컴포넌트가 동일한 방식으로 로그인 처리
         유지보수: 로직 변경 시 한 곳만 수정하면 됨
         
         

      login(username);
      navigate ('/dashboard'); // 라우팅 / 조건이 만족되면 /dashboard 페이지로 이동한다
 
    }
  }; */}


  const navigate = useNavigate(); //  페이지 이동을 관리하는 훅





  {/* part 5 delete 
    
    const handleSubmit=(e)=>{

  //"브라우저의 기본 폼 제출 동작(페이지 새로고침)을 막아라"
  e.preventDefault(); 

  login(username.trim(),password) //사용자명에서 공백 제거,입력된 비밀번호 전달

    */}



    /*
    
    책임 분리: 인증 로직이 AuthContext에서 Login 컴포넌트로 이동
    직접성: Firebase SDK를 직접 호출하여 중간 계층 제거
    에러 처리: try-catch로 명확한 에러 처리
    
    */
const handleEmailLogin=async()=>{
  try {


    // 1. Firebase 함수 직접 호출

    await signInWithEmailAndPassword(auth,email,password);


      // 2. 컴포넌트에서 직접 navigate 처리

    navigate('/dashboard');
  } catch (err) {
    alert (err.message);
  }
};


/*
Firebase의 강력한 기능 활용
사용자 편의성 증대 (비밀번호 불필요)
다양한 인증 방식 지원 시작

*/
const handleGoogleLogin =async()=>{
  try{
    await signInWithPopup(auth,googleProvider);
    navigate('/dashboard');
  } catch(err){
    alert(err.message);
  }
};






  {/* part 3 
    
    return (
  
<Container maxWidth="sm" sx={{mt:10}}> 
<Typography variant="h4" gutterBottom> Login </Typography>
<TextField fullWidth label="Username" onChange={(e)=>setUsername(e.target.value)}/>
<Button variant="contained" // 배경색이 채워진 버튼 sx={{mt:2}} onClick={handleLogin}>
 Login </Button>

</Container> );};

fullWidth:  입력창(TextField)의 너비를 부모 요소의 100%로 설정한다 --> 부모 요소: <Container maxWidth="sm">
결과: 입력창이 Container의 가로 폭 전체를 차지 

sm 화면이 아무리 커도 이 Container의 최대 너비는 약 600px까지만 허용한다 
텍스트 아래쪽에 기본 여백(margin-bottom)을 자동으로 추가
sx는 Material UI 전용 스타일 속성(system prop) 
marginTop → 위쪽 여백 
MUI spacing 규칙 /기본값: 1 = 8px /
marginTop: 8 / 8 × 8px = 64px/ Box의 위쪽에 64픽셀의 여백 


*/}
  

{/* part 4

  return (
     <Container>
       <Typography variant="h5">Login</Typography>
       <form onSubmit={handleSubmit}>
         <TextField label="Username" fullWidth margin="normal" onChange={e=>setUsername(e.target.value)}/>
         <TextField label="Password" type="password" fullWidth margin="normal" onChange={e=>setPassword(e.target.value)}/>
         <Button type="submit" variant="contained" fullWidth>Login</Button>
         <Typography variant="body2" mt={2}>
          No account? <Link to="/signup">Sign up</Link>
          </Typography>
 
       </form>
     </Container>
   )
 };
 
  
  
  
  
  
  */}
  return (
     <Container maxWidth="sm" sx={{mt:10}}>
       <Typography variant="h4">Login</Typography>
     
         <TextField fullWidth label="Email" onChange={e=>setUsername(e.target.value)}/>
         <TextField fullWidth label="Password" type="password" sx={{mt:2}} onChange={e=>setPassword(e.target.value)}/>
         <Button fullWidth variant="contained" sx={{mt:2}} onClick={handleEmailLogin}>Login</Button>
         <Button fullWidth variant="outlined" sx={{mt:2}} onClick={handleGoogleLogin}>Login with Google</Button>
        
 
  
     </Container>
   )
 };
 

export default Login;
