import React from 'react';

/*

AuthContext 생성 (가장 먼저)
왜 필요한가?

문제: 여러 컴포넌트에서 로그인 상태 공유 필요
해결: Context API로 전역 상태 관리
변화:
javascript
// ❌ BEFORE: 각 컴포넌트에서 직접 localStorage 접근
const username = localStorage.getItem('user');

// ✅ AFTER: Context를 통한 일관된 접근
const { user, login, logout } = useAuth();



*/




// src/context/AuthContext.jsx
import { createContext, useContext, useState } from 'react';


// 1. Context 생성
const AuthContext = createContext();




// 2. Provider 컴포넌트 생성 :: 중앙 집중식 관리
export const AuthProvider = ({ children }) => {


      // 3. 사용자 상태 관리 (로컬스토리지에서 초기값 가져옴)
  const [user, setUser] = useState(localStorage.getItem('user') || '');



    // 4. 로그인 함수
  const login = (username) => {
    localStorage.setItem('user', username);  // 로컬스토리지에 저장

    setUser(username); // 상태 업데이트

  };



    // 5. 로그아웃 함수
  const logout = () => {
    localStorage.removeItem('user'); // 로컬스토리지에서 제거

    setUser('');// 상태 초기화

  };



    // 6. Context Provider로 감싸기
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// 7. Context 사용을 위한 커스텀 훅
export const useAuth = () => useContext(AuthContext);



/*

이것이 하는 일:
AuthContext를 생성하여 전역으로 사용자 상태 관리
login(), logout() 함수 제공
user 상태를 모든 컴포넌트에서 접근 가능하게 함


*/