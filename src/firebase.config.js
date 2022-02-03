import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB__DSv1_tckHZWgiLRWchI5yla-SZKcPE",
  authDomain: "algothon-2021.firebaseapp.com",
  projectId: "algothon-2021",
  storageBucket: "algothon-2021.appspot.com",
  messagingSenderId: "258557273674",
  appId: "1:258557273674:web:7ccbdfd8bf34aa263fe8b3",
  measurementId: "G-Z1EJZYTKPZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
