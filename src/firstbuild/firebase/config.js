import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZgxRyE8Gu6axpvL4mChYos8dQmeKpmMo",
    authDomain: "swift-yew-310603.firebaseapp.com",
    projectId: "swift-yew-310603",
    storageBucket: "swift-yew-310603.appspot.com",
    messagingSenderId: "503878089038",
    appId: "1:503878089038:web:783b18b42cc247b99d061f",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const fireAuth = getAuth();

export { fireAuth, firestore, app };