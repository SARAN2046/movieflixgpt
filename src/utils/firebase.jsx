// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWVwa6Nj-uuhCAzD28mRZS-uQKlDEQUFE",
  authDomain: "movieflixgpt-8e943.firebaseapp.com",
  projectId: "movieflixgpt-8e943",
  storageBucket: "movieflixgpt-8e943.firebasestorage.app",
  messagingSenderId: "1013620231018",
  appId: "1:1013620231018:web:ab2bcf970e5665bfb87313",
  measurementId: "G-MFQD11F7ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()