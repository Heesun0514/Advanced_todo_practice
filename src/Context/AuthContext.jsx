import { createContext,useContext,useEffect,useState } from "react";
import {auth} from '../firebase'; // firebase.js에서 초기화된 인증 객체




// onAuthStateChanged: 사용자 인증 상태 변화 감지 함수
// signOut: 로그아웃 함수

import {onAuthStatechanged,signOut} from 'firebase/auth'; 
import { AuthProvider } from './Authcontext';


//공유 가능한 데이터 상자" 생성
const AuthContext=createContext();


// AuthProvider 컴포넌트
// 역할: 인증 관련 상태와 함수를 자식 컴포넌트들에게 제공
// children: 모든 자식 컴포넌트들을 포함하는 prop
// 중요성: 앱의 루트에서 이 Provider로 감싸면 전체 앱에서 인증 상태 사용 가능

export const AuthProvider=({children})=>{


// null: 로그인하지 않은 상태
// user 객체: 로그인한 사용자 정보

  const [user,setUser]=userState(null);




  // 인증 상태 감지 (핵심 기능)


  // Step 1: useEffect 실행
useEffect(()=>{


  // 🔵 1. 마운트 시 실행되는 코드
  // Step 2: onAuthStateChanged 설정
  /*
Firebase의 실시간 감시자 설정

동작 원리:
Firebase 인증 상태 변경 감지 시작
상태 변경 시 setUser 함수 호출
변경 사항이 있을 때마다 자동으로 user 상태 업데이트


  */
   

  const unsubscribe=onAuthStatechanged(auth,setUser);


    // 🔴 2. 언마운트 시 실행되는 함수 반환
    // Step 3: 클린업 함수 반환
    /*
 중요성: 메모리 누수 방지
동작: 컴포넌트가 언마운트될 때 감시자 해제
비유: "TV를 보다가 채널을 꼭 바꿔줘야 함"
    
    */
  return ()=>unsubscribe();
},[]);  // 🔵 빈 배열 = 마운트/언마운트 시만 , 즉, 시작과 종료시 한번만 실행



/*
분석:

signOut(auth): Firebase 인증 객체에서 로그아웃 실행
동작 과정:

Firebase 서버에 로그아웃 요청
로컬 토큰 제거
onAuthStateChanged가 감지 → setUser(null) 호출
UI 자동 업데이트


*/

const logout=()=>signOut(auth);

return (
  <AuthContext.Provider value={{user,logout}}>
{children}
  </AuthContext.Provider>
);


};


// 8. useAuth 커스텀 훅
export const useAuth=()=>useContext(AuthContext);


// user: user,      // 현재 사용자 정보 또는 null
//logout: logout   // 로그아웃 함수
