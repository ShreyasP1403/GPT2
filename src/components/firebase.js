// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword,} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

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
const auth = getAuth(app);
const db = getFirestore(app);


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  
};
