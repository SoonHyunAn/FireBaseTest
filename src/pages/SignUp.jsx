import React, { useState } from "react";
import { register, loginWithGithub } from '../api/firebase';
import { useNavigate, Link } from "react-router-dom";
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_URL_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_SECRET_CODE
});

// 이미지 업로드 함수
export const uploadImage = async (file) => {
  try {
    // Cloudinary에 이미지 업로드
    const result = await cloudinary.uploader.upload(file, {
      upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET // Cloudinary 대시보드에서 설정한 업로드 프리셋 이름
    });

    // 업로드된 이미지의 URL 반환
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw error; // 에러를 호출자에게 다시 던집니다.
  }
};

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({email:'', password:'', name:'', photo:''});
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const handleChange = e => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value});
  }
  const handleSubmit = e => {
    e.preventDefault();
    register(userInfo);
    navigate('/signIn');
  }
  const handleGithub = e => {
    loginWithGithub();
    navigate(-1);
  }
  const handleUpload = e => {
    setFile(e.target.files && e.target.files[0]);
    uploadImage(file)
      .then(url => setUserInfo({...userInfo, ['photo']: url}));
  }

  return (
    <div style={{margin: '20px'}}>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' value={userInfo.email} placeholder="이메일"
          onChange={handleChange} /><br />
        <input type="password" name='password' value={userInfo.password} placeholder="패스워드"
          onChange={handleChange} /><br />
        <input type="text" name='name' value={userInfo.name} placeholder="이름"
          onChange={handleChange} /><br />
        <input type="file" accept="/image/*" name='file' onChange={handleUpload} /><br />
        <button onClick={handleSubmit}>사용자 등록</button>
      </form><br />
      <span>계정이 있으신가요?</span>
      <Link to='/signIn'>로그인</Link><br /><br />
      <button onClick={handleGithub}>깃허브 로그인</button>

    </div>
  )
}