// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb0gveloW9hiSnzsDAG_UtuXd6TsA6XGQ",
  authDomain: "test3-60438.firebaseapp.com",
  projectId: "test3-60438",
  storageBucket: "test3-60438.appspot.com",
  messagingSenderId: "505969228606",
  appId: "1:505969228606:web:7c451fb02259b158338a6f"
};

// Initialize Firebase

  const Firebase_app = initializeApp(firebaseConfig);


const Firebase_Auth=getAuth(Firebase_app)

export default Firebase_Auth ;
