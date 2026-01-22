import React from "react";
import {Routes,Route} from 'react-router-dom'; // 추가
import Login from "./pages/Login"; // 추가
import Dashboard from './pages/Dashboard';// 추가

const App=()=>{
  return(
   <Routes>
    <Route path ="/" element={<Login/>}/>
    <Route path ="/dashboard " element={<Dashboard/>}/> {/* 추가 */}
   </Routes>
  );
};
export default App;