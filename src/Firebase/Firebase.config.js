// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAxAeNg23Bq50FbVr8lHOsry8nnvys2HY",
  authDomain: "house-of-cse.firebaseapp.com",
  projectId: "house-of-cse",
  storageBucket: "house-of-cse.appspot.com",
  messagingSenderId: "68556383340",
  appId: "1:68556383340:web:5bb2d29fdaca8aa27d6449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;