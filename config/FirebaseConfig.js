// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "geometric-bay-415807.firebaseapp.com",
  projectId: "geometric-bay-415807",
  storageBucket: "geometric-bay-415807.appspot.com",
  messagingSenderId: "288273396912",
  appId: "1:288273396912:web:d8c0aed54b393c4f35f775",
  measurementId: "G-YV4RKHJ8K1"
};

// Initialize Firebase
export const app =initializeApp(firebaseConfig);