// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7LsjuR_5XjLH8byceHsBR9Kd6KU56Nyk",
  authDomain: "auth-integration-private-f281d.firebaseapp.com",
  projectId: "auth-integration-private-f281d",
  storageBucket: "auth-integration-private-f281d.appspot.com",
  messagingSenderId: "797373486684",
  appId: "1:797373486684:web:bdd4893ba06713acf2f899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;