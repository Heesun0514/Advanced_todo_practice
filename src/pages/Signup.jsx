import bcrypt from "bcryptjs";
import React from "react";





Signup=(username,password)=>{




    // 1. 기존 사용자 목록 가져오기

const users = JSON.parse(localStorage.getItem('users'))||[];


 // 2. 중복 사용자 체크

 const exsiting = users.find(u=>u.username===username);
 if (exsiting){
    alert('User already exists');
    return;
 }

// 3. 비밀번호 암호화
// bcrypt.hashSync(평문비밀번호, salt라운드)
// salt 라운드 10: 해싱 강도 (높을수록 강력하지만 느림)
// 결과: "$2a$10$N9qo8uLOickgx2ZMRZoMye..."


const hashed = bcrypt.hashSync(password,10);


// 4. 새 사용자 추가
// 평문 비밀번호 대신 해시된 비밀번호 저장
// 예: { username: "john", password: "$2a$10$N9qo8uLOickgx2ZMRZoMye..." }
users.push({username,password:hashed});


 // 5. localStorage에 저장
 localStorage.setItem('user',JSON.stringify(users));


  // 6. 자동 로그인
  Login(username,password)





  
};
export default Signup;