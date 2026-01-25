




import React,{useState} from "react";
import { useAuth } from "../Context/Authcontext";
import { Container, TextField, Typography,Button } from "@mui/material";



/*
useAuth 제거 → 직접 Firebase 호출
useNavigate 추가 → 컴포넌트가 직접 페이지 이동 관리
Firebase 함수 직접 임포트

*/
import { useNavigate } from "react-router-dom"; // part 5 added 
import { createUserWithEmailAndPassword } from "firebase/auth"; // part 5 added
import { auth } from "../firebase";  // part 5 added


const Signup=()=>{


  // part 5 delete 
// const [username,setUsername]=useState('');


// part 5: Email 
/*
Firebase는 이메일을 기본 식별자로 사용
사용자명 대신 이메일: 더 보편적이고 고유한 식별자
실제 서비스에서의 일반적인 관행 반영
*/
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const navigate =useNavigate(); //part 5 added


{/* part 4
  
  // 이 signup 함수를 가져옴
 // 1. 중복 체크
 // 2. 비밀번호 암호화
  // 3. 사용자 정보 저장
  // 4. 자동 로그인

const {signup} = useAuth();  

const handleSubmit=(e)=>{

  //"브라우저의 기본 폼 제출 동작(페이지 새로고침)을 막아라"
  e.preventDefault(); 

//사용자명에서 공백 제거,입력된 비밀번호 전달
  signup(username.trim(),password) // AuthContext에 위임
 // AuthContext가: 1) 저장 2) 로그인 3) 이동

파트 4: Context에 위임



};
  */}





//파트 5: 직접 처리
/*

단순화: 중간 계층(AuthContext) 제거
명확성: 코드 흐름이 직관적
제어력: 컴포넌트가 모든 것을 직접 관리


*/


const handleSignup =async()=>{
  try{


      // 1. Firebase에 직접 회원가입 요청

    await createUserWithEmailAndPassword (auth,email,password);


    // 2. 직접 페이지 이동

    navigate('/dashboard');
  }catch(err){

     // 3. 직접 에러 처리

    alert(err.message);
  }
};

{/* part 4
  
   return (
    <Container>
      <Typography variant="h5">Sign up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" fullWidth margin="normal" onChange={e=>setUsername(e.target.value)}/>
        <TextField label="Password" type="password" fullWidth margin="normal" onChange={e=>setPassword(e.target.value)}/>
        <Button type="submit" variant="contained" fullWidth>Sign up</Button>

      </form>
    </Container>
  )
};
  

  */}



  /*
  
파트 4: 전통적인 HTML 폼 방식 (e.preventDefault() 필요)
파트 5: React 방식 (폼 제출 기본 동작이 필요 없음)
현대적 패턴: 단일 페이지 앱(SPA)에서는 폼 기본 동작을 피하는 것이 일반적
  
  */

  return (
    <Container maxWidth="sm" sx={{mt:10}}>
      <Typography variant="h4"> Sign up</Typography>
      <TextField fullWidth label="Email" onChange={e=>setUsername(e.target.value)}/>
       <TextField fullWidth label="Password" type="password" sx={{mt:2}} onChange={e=>setPassword(e.target.value)}/>
       <Button fullWidth variant="contained" sx={{mt:2}} onClick={FileSystemHandle}>Sign up</Button>
    </Container>
  )
};

export default Signup;