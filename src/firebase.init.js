// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV_eWASrrYQnV5sKkH2NSzhKoxDgTQqYM",
    authDomain: "national-computer-d42f8.firebaseapp.com",
    projectId: "national-computer-d42f8",
    storageBucket: "national-computer-d42f8.appspot.com",
    messagingSenderId: "374286777268",
    appId: "1:374286777268:web:4de2980423bdab73be50e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth