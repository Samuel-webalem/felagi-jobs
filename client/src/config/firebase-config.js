
import { initializeApp } from "firebase/app";
import  { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlgJci0ZmIkgrwM7AfuhTTP9StiTy4jwY",
  authDomain: "felagi-jobs.firebaseapp.com",
  projectId: "felagi-jobs",
  storageBucket: "felagi-jobs.appspot.com",
  messagingSenderId: "392201693514",
  appId: "1:392201693514:web:3c34d38b2c7673269139b3",
  measurementId: "G-BYKRG9WFNZ",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)