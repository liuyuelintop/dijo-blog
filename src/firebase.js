// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiP3_1ACeDA8_kXhWjuM7DElp_N74XNSg",
  authDomain: "au-bluering.firebaseapp.com",
  projectId: "au-bluering",
  storageBucket: "au-bluering.appspot.com",
  messagingSenderId: "400543289930",
  appId: "1:400543289930:web:dedd8d5047f79a7c280cb3",
  measurementId: "G-B4VYPHDKLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};