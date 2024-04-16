// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyA8tyzsKAuly1MDqLBb8P0Mfs3UiaEkmHk",
  authDomain: "inernshala-project.firebaseapp.com",
  projectId: "inernshala-project",
  storageBucket: "inernshala-project.appspot.com",
  messagingSenderId: "702123771002",
  appId: "1:702123771002:web:51c749e6ba520b0206e7c3",
  measurementId: "G-CDJJ2JKZ7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth()
export {app,auth}