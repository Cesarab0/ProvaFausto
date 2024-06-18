// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlckOm2n7xqjPdirNSKmKnvgzVIZbPzC4",
  authDomain: "projeto-final-f1e48.firebaseapp.com",
  projectId: "projeto-final-f1e48",
  storageBucket: "projeto-final-f1e48.appspot.com",
  messagingSenderId: "309189822466",
  appId: "1:309189822466:web:395881abf0642be45e3f1b",
  measurementId: "G-EY8MYBPH6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);
export const auth = getAuth(app);


/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm7pPPIpll6VDLcU4cN3T8G4V9lZ8Qo8Y",
  authDomain: "appfirebaserevisao.firebaseapp.com",
  projectId: "appfirebaserevisao",
  storageBucket: "appfirebaserevisao.appspot.com",
  messagingSenderId: "897033270238",
  appId: "1:897033270238:web:297b3e1ac6f28fd370634f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
*/