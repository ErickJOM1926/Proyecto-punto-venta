// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3oNY6WuaVKsAfzevls_IhJi_2__ZbiV4",
    authDomain: "punto-venta-ea5dc.firebaseapp.com",
    projectId: "punto-venta-ea5dc",
    storageBucket: "punto-venta-ea5dc.appspot.com",
    messagingSenderId: "409503339598",
    appId: "1:409503339598:web:fa4b13e6d245411e0b5f1f"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;