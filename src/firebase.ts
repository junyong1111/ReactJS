// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5QuG2dNMzh9TPPeBQuDOWdPfkHk7tiTE",
  authDomain: "clone-jwitter.firebaseapp.com",
  projectId: "clone-jwitter",
  storageBucket: "clone-jwitter.appspot.com",
  messagingSenderId: "1098376192316",
  appId: "1:1098376192316:web:274b1a837dc9f9d5187e39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 