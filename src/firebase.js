// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhuohjbRudPSo0Z_dYi1O7JVuF83dbwJc",
  authDomain: "fir-basics-9fbde.firebaseapp.com",
  databaseURL:
    "https://fir-basics-9fbde-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-basics-9fbde",
  storageBucket: "fir-basics-9fbde.appspot.com",
  messagingSenderId: "546191099276",
  appId: "1:546191099276:web:8a41b8eb024120dd8882a9",
  measurementId: "G-FHQ0S319LJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
