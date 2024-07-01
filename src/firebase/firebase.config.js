// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeiu2tyo7Wz0W5Z4XFexmvokAxUnEgH-0",
    authDomain: "module51-6907b.firebaseapp.com",
    projectId: "module51-6907b",
    storageBucket: "module51-6907b.appspot.com",
    messagingSenderId: "75690932002",
    appId: "1:75690932002:web:8b299a763fdd8402e9977b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 
