// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-2ndtry.firebaseapp.com",
  projectId: "real-estate-2ndtry",
  storageBucket: "real-estate-2ndtry.appspot.com",
  messagingSenderId: "1003251710556",
  appId: "1:1003251710556:web:1df00851755cff7f3d8499"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);