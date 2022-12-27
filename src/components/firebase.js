// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDudkyT8pRy-5N8niDpTMeQJ4c4TD0JBTk",
  authDomain: "gpt-2-c3019.firebaseapp.com",
  projectId: "gpt-2-c3019",
  storageBucket: "gpt-2-c3019.appspot.com",
  messagingSenderId: "995114931692",
  appId: "1:995114931692:web:dc65953051c8e3b6bedcc9",
  measurementId: "G-7HTPRDVG3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
