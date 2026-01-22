import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom'; // 추가 // // Navigate 추가
import Login from "./pages/Login"; // 추가
import Dashboard from './pages/Dashboard';// 추가

const App=()=>{
  // localStorage에서 사용자 정보 확인

const isLoggedIn=!!localStorage.getItem('user');

{/*const isLoggedIn = !!localStorage.getItem('user');

✔ 의미

localStorage.getItem('user')

브라우저의 로컬 스토리지(localStorage) 에서 'user' 키 값을 가져옴
사용자가 이전에 로그인한 정보가 저장되어 있다면, 그 값을 반환
값이 없으면 null 반환

!! (double exclamation)
값을 불리언(Boolean) 으로 변환

값이 있으면 true, 없으면 false

즉, isLoggedIn은 사용자가 로그인 상태인지 아닌지를 확인하는 변수입니다. */}

  return(
   <Routes>
    <Route path ="/" 
    element={ isLoggedIn ? <Navigate to="/Dashboard" /> :<Login/>}
    />


    <Route path ="/Dashboard"
     element={ isLoggedIn ? <Dashboard/> : <Navigate to= "/"/>}
     /> 
   </Routes>
  );
};
export default App;


{/*

  element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
  
  사용자가 로그인 상태면 → /dashboard로 자동 이동
  로그인 상태가 아니면 → 로그인 페이지 표시 (<Login />)

  */}