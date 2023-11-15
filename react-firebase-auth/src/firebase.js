// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwB8hrC87lBB6thUkyCy6CiO2bbvZoY00",
  authDomain: "react-auth-4dcd8.firebaseapp.com",
  projectId: "react-auth-4dcd8",
  storageBucket: "react-auth-4dcd8.appspot.com",
  messagingSenderId: "315861019675",
  appId: "1:315861019675:web:308c47b6f54ab337471cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app); //ERRO INDICADO PELO NAVEGADOR
