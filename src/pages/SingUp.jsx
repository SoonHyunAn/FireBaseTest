import React, { useState } from "react";
import { register } from "../api/firebase.js";

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [user, setUser] = useState(null);


  return (
    <div style={{ margin: '20px' }}>
      <form onSubmit={handleSubmit}>

      </form>
    </div>
  );
}