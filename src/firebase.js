import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1QHVWCw2OERvExLfCRqdjiGUCLNSt4Wc",
  authDomain: "sanyampoint.firebaseapp.com",
  projectId: "sanyampoint",
  storageBucket: "sanyampoint.appspot.com",
  messagingSenderId: "321025964629",
  appId: "1:321025964629:web:77fac76e00706a91bab2dc",
  measurementId: "G-N3V5MXFHXL",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);

export {
  db,
  auth,
  signOut,
  signInWithEmailAndPassword,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot
};
