// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQMS4_07JAQIdwD-ou6famfGbRu6fA3Bc",
  authDomain: "appsico-77015.firebaseapp.com",
  projectId: "appsico-77015",
  storageBucket: "appsico-77015.appspot.com",
  messagingSenderId: "469493998872",
  appId: "1:469493998872:web:94be50d49ca6ac53552a6d",
  measurementId: "G-SY2CYWDN8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);