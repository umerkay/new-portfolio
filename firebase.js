import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZksddHjaCm_KPQUjygPYL_SN4mIpJDZY",
    authDomain: "slider-dbf2a.firebaseapp.com",
    projectId: "slider-dbf2a",
    storageBucket: "slider-dbf2a.appspot.com",
    messagingSenderId: "743027575927",
    appId: "1:743027575927:web:5d8a133276bfc438314a72",
    measurementId: "G-3C77JPG400",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(app);
export default db;