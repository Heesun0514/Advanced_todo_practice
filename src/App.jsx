import React from "react";
import { Routes,Route,Navigate} from 'react-router-dom'; // 추가 // // Navigate 추가
import Login from "./pages/Login";// 추가
import Dashboard from './pages/Dashboard';// 추가
import { useAuth } from "./Context/Authcontext"; // part 3추가
import Signup from "./pages/Signup";// part 4 추가

const App=()=>{
  // localStorage에서 사용자 정보 확인

  const {user}=useAuth(); // part 4 추가



  return(
   
    <Routes>
   <Route path="/" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
     </Routes>
    
   
  );
};
export default App;


{/*

  element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
  
  사용자가 로그인 상태면 → /dashboard로 자동 이동
  로그인 상태가 아니면 → 로그인 페이지 표시 (<Login />)

  */}