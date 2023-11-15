// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZHDXgDSMxNXrjFP4dSJbTYcsgseMGqUk",
  authDomain: "rnauthvideo-e7725.firebaseapp.com",
  projectId: "rnauthvideo-e7725",
  storageBucket: "rnauthvideo-e7725.appspot.com",
  messagingSenderId: "669951068482",
  appId: "1:669951068482:web:3ee9b90339442b80ac60db"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);


