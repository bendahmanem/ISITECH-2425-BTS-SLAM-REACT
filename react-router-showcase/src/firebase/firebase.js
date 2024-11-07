// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAicpgqwVJJKTpfNw4YIZDfx4dpzR0R8QY",
  authDomain: "esi4-react.firebaseapp.com",
  projectId: "esi4-react",
  storageBucket: "esi4-react.firebasestorage.app",
  messagingSenderId: "400235866133",
  appId: "1:400235866133:web:7725294f051bef0814c61c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };
