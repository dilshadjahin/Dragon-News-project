// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdsFoSm-tnbWqTgcQLXW0IvGhV-mT6X38",
  authDomain: "dragon-news-auth-1ce3d.firebaseapp.com",
  projectId: "dragon-news-auth-1ce3d",
  storageBucket: "dragon-news-auth-1ce3d.appspot.com",
  messagingSenderId: "601150024786",
  appId: "1:601150024786:web:a4bfa9755813f0ecc7438b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;