// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgkFaGyM5kFIm5Vnv9DZRapLfsPMAQr4A",
  authDomain: "fir-test-49ac8.firebaseapp.com",
  projectId: "fir-test-49ac8",
  storageBucket: "fir-test-49ac8.appspot.com",
  messagingSenderId: "1054947533888",
  appId: "1:1054947533888:web:868d7c21ec62eef8e82ba5",
  measurementId: "G-99LEBSFK03"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);