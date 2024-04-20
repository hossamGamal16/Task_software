import { doc, getDoc } from "firebase/firestore";
import db from "./FirestoreConfig"
import Firebase_Auth from './Config'
const getdata=async ()=>{
const docRef = doc(db, "users", Firebase_Auth.currentUser.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
}
