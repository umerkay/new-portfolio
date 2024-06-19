// src/firebase.js
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZksddHjaCm_KPQUjygPYL_SN4mIpJDZY",
  authDomain: "slider-dbf2a.firebaseapp.com",
  projectId: "slider-dbf2a",
  storageBucket: "slider-dbf2a.appspot.com",
  messagingSenderId: "743027575927",
  appId: "1:743027575927:web:5d8a133276bfc438314a72",
  measurementId: "G-3C77JPG400",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db };
