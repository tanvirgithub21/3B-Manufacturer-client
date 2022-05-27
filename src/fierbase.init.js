// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDexMIM9ZXNpW-aktIUh5a9x2WqjWOTwA",
  authDomain: "manufactur-website.firebaseapp.com",
  projectId: "manufactur-website",
  storageBucket: "manufactur-website.appspot.com",
  messagingSenderId: "763441560527",
  appId: "1:763441560527:web:f312e6b06402f585f230ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth