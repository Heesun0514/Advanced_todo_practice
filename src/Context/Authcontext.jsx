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

import bcrypt from 'bcryptjs'// part 4 
import { found } from '../../node_modules/.vite/deps_temp_026b0709/react-router-dom';



// 1. Context 생성
const AuthContext = createContext();




// 2. Provider 컴포넌트 생성 :: 중앙 집중식 관리
export const AuthProvider = ({ children }) => {


// 3. 사용자 상태 관리 (로컬스토리지에서 초기값 가져옴)
// const [user, setUser] = useState(localStorage.getItem('user') || '');


  // ✅ Part 4 (완전 재작성)

  /* 컴포넌트가 처음 마운트될 때 한 번만 localStorage에서 'user' 값을 가져와서, 
  있으면 JSON 객체로 변환하고 없으면 null로 user 상태를 초기화하라."
 */

  const [user,setUser]=userState(()=>{
    const stored=localStorage.getItem('user');
     return stored ?JSON.parse(stored):null;
  });



    /*
    part 3.
    
    4. 로그인 함수
    
    const login = (username) => {
    localStorage.setItem('user', username);  // 로컬스토리지에 저장

    setUser(username); // 상태 업데이트

  };
    */ 
  
  // part 4 login 함수 개선
 const login=(username,password)=>{


     // 1. localStorage에서 사용자 목록 가져오기
    const users=JSON.parse(localStorage.getItem('users'))||[];

    /* 
    
    1. 'users' 키로 저장된 사용자 목록 가져오기
    2. JSON.parse(): 

// ❌ 객체를 직접 저장할 수 없음
localStorage.setItem('user', {name: "John"}); 
// 결과: "[object Object]" (의미 없는 문자열)

// ✅ 문자열로 변환해서 저장
localStorage.setItem('user', JSON.stringify({name: "John"}));
// 저장된 값: '{"name":"John"}'

// ✅ 읽을 때 다시 객체로 변환
const stored = localStorage.getItem('user'); // 문자열
const user = JSON.parse(stored); // 객체
// user = {name: "John"}





    3. `|| []`: 없으면 빈 배열 사용 (초기 실행 시)


    
    
    */ 

     // 2. 사용자 찾기

     // Array.find(): 조건에 맞는 첫 번째 사용자 찾기
     // u.username === username: 사용자명 일치하는지 검사

     const foundUser =users.find(u=>u.username===username);


     //3. 비밀번호 비교 (bcrypt.compareSync)

     // 1. foundUser가 존재하고
     // 2. bcrypt.compareSync(입력비밀번호, 저장된해시비밀번호) 비교
     // → 일치하면 true
     if ( foundUser && bcrypt.compareSync(password,foundUser.password)){

        // 평문 비밀번호 vs 해시된 비밀번호 비교
        // 예시: compareSync("myPass123", "$2a$10$xyz...") → true/false




        // 로그인 성공 시 현재 사용자 정보 저장
        // JSON.stringify(): 객체 → 문자열 변환
        setUser({username});
        localStorage.setItem('user',JSON.stringify({username}));
        Navigate('/dashboard');
     } else {
        alert ('Invalid credentials')
     };





 }






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