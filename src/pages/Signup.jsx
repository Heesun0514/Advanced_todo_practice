




import React,{useState} from "react";
import { useAuth } from "../Context/Authcontext";
import { Container, TextField, Typography,Button } from "@mui/material";


const Signup=()=>{
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');


// 이 signup 함수를 가져옴
 // 1. 중복 체크
 // 2. 비밀번호 암호화
  // 3. 사용자 정보 저장
  // 4. 자동 로그인

const {signup} = useAuth();  



const handleSubmit=(e)=>{

  //"브라우저의 기본 폼 제출 동작(페이지 새로고침)을 막아라"
  e.preventDefault(); 

  signup(username.trim(),password) //사용자명에서 공백 제거,입력된 비밀번호 전달

};


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

export default Signup;