import React, { useState } from "react";
import { register } from "../api/firebase.js";

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [user, setUser] = useState(null);


  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={userInfo.email} placeholder="이메일" onChange={handleChange}/><br />
      <input type="password" name="password" value={userInfo.password} placeholder="패스워드" onChange={handleChange}/><br />
      <button onClick={handleSubmit}>사용자 등록</button>
      </form>
    </div>
  );
}