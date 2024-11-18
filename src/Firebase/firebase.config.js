// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8BSVM6V75MwE9_CxISo09AqFOXLvyru0",
  authDomain: "dragon-news-b92f5.firebaseapp.com",
  projectId: "dragon-news-b92f5",
  storageBucket: "dragon-news-b92f5.firebasestorage.app",
  messagingSenderId: "497703835775",
  appId: "1:497703835775:web:142625d729cdc714f0074a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);