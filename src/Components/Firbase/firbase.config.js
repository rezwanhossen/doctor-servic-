import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_9S1nPNgEv1bkkNbhJsFZXkE5JxWvgCs",
  authDomain: "doctoe-servics.firebaseapp.com",
  projectId: "doctoe-servics",
  storageBucket: "doctoe-servics.appspot.com",
  messagingSenderId: "96089320166",
  appId: "1:96089320166:web:e415dab458a1b1e6c36927",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
