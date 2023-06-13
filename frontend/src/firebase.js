// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI_ce7lFv7dFJAleo19mrE5ix1n7XBN4U",
  authDomain: "quora-clone-4b9d4.firebaseapp.com",
  projectId: "quora-clone-4b9d4",
  storageBucket: "quora-clone-4b9d4.appspot.com",
  messagingSenderId: "774592367953",
  appId: "1:774592367953:web:5c989487fe35c6dc1d1770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth,provider};