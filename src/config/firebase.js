// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7-gvqrRMOjV9da3ua7eUR9V16rMrZedM",
  authDomain: "stuffandapps-fea50.firebaseapp.com",
  projectId: "stuffandapps-fea50",
  storageBucket: "stuffandapps-fea50.appspot.com",
  messagingSenderId: "565333841659",
  appId: "1:565333841659:web:0051ba04b76ba3ecb2c25e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
