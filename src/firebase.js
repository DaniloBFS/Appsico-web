// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyBQMS4_07JAQIdwD-ou6famfGbRu6fA3Bc",
  authDomain: "appsico-77015.firebaseapp.com",
  databaseURL: "https://appsico-77015-default-rtdb.firebaseio.com",
  projectId: "appsico-77015",
  storageBucket: "appsico-77015.appspot.com",
  messagingSenderId: "469493998872",
  appId: "1:469493998872:web:31f69c0c5a6cee83552a6d",
  measurementId: "G-DCJC0DP8BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);  
