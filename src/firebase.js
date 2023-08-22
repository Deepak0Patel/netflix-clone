// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9QhU2-tI9lyLotaLIsQSJNhGk5J_6OP8",
  authDomain: "netflix-clone-68c98.firebaseapp.com",
  projectId: "netflix-clone-68c98",
  storageBucket: "netflix-clone-68c98.appspot.com",
  messagingSenderId: "540000782710",
  appId: "1:540000782710:web:4678c3c44839b6b1b25257",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
