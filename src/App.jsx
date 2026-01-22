import React from "react";
import {Routes,Route} from 'react-router-dom'; // 추가
import Login from "./pages/Login"; // 추가

const App=()=>{
  return(
   <Routes>
    <Route path ="/" element={<Login/>}/>
   </Routes>
  );
};
export default App;