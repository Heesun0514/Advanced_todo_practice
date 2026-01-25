// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8QuKv7z5t2wDZUWld4Ue5MqRf3guXZbs",
  authDomain: "advtodo-9a486.firebaseapp.com",
  projectId: "advtodo-9a486",
  storageBucket: "advtodo-9a486.firebasestorage.app",
  messagingSenderId: "577012438590",
  appId: "1:577012438590:web:d7c3bd3d9916edbeb5236f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const googleProvider= new GoogleAuthProvider();