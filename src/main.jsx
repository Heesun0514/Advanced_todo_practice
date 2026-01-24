import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom'; // 추가
import { AuthProvider } from './Context/Authcontext.jsx';



ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 추가 */}
    <AuthProvider>   {/* Part 3 : 앱 전체를 AuthProvider로 감쌈 */}
    <App/>
    </AuthProvider>
    </BrowserRouter> {/* 추가 */}
  </React.StrictMode>
);


/* Part 3 :

앱 전체를 AuthProvider로 감싸 모든 컴포넌트가 인증 상태 접근 가능
BrowserRouter 안에 위치시켜 라우팅도 가능하게 함*/ 
