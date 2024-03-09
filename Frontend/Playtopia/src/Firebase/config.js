// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyDTj803OlZpMqzkh3HFNtFZ_ehEya-qad4",

  authDomain: "playtopia-9e74b.firebaseapp.com",

  projectId: "playtopia-9e74b",

  storageBucket: "playtopia-9e74b.appspot.com",

  messagingSenderId: "44307124350",

  appId: "1:44307124350:web:cc81c9be2332b1dac2482f",

  measurementId: "G-EJNTL24DS9"

};

  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);