import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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
const db = getFirestore(Firebase_app);

export default db;
