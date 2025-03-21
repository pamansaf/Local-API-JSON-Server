// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUW6bxBcbQ1AGv7EDV6cwl_P34_Npfz0Q",
  authDomain: "jebubat-a49c9.firebaseapp.com",
  databaseURL: "https://jebubat-a49c9-default-rtdb.firebaseio.com",
  projectId: "jebubat-a49c9",
  storageBucket: "jebubat-a49c9.firebasestorage.app",
  messagingSenderId: "72844382482",
  appId: "1:72844382482:web:f83c0428804eeb830ee3cb",
  measurementId: "G-0Q9G4LF0KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)