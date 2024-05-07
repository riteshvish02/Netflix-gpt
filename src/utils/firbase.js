// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOOHkSIsOYrWTfIqxU5pefzfC7WFD0H7w",
  authDomain: "netflix-3184e.firebaseapp.com",
  projectId: "netflix-3184e",
  storageBucket: "netflix-3184e.appspot.com",
  messagingSenderId: "1032361098171",
  appId: "1:1032361098171:web:d3844c51d872a63440a29e",
  measurementId: "G-XMZXP7S3VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();