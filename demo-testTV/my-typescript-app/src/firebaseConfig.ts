// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAvvsvp80q3y_1aKvp70aCnMljAgLgOCbM",
    authDomain: "my-typescript-app-e3150.firebaseapp.com",
    projectId: "my-typescript-app-e3150",
    storageBucket: "my-typescript-app-e3150.firebasestorage.app",
    messagingSenderId: "764832318234",
    appId: "1:764832318234:web:17eaeb2676e1002896a2a3",
    measurementId: "G-634Z83Q75N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

console.log("Firebase Config Loaded");
console.log('db_show', db);

export { db };