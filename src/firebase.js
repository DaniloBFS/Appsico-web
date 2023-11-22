//Imports necessários
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

//Config de API
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

// Chamado do Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Conexão para a autenticação
export const auth = getAuth(app);  

//Conexão com o banco
export const db = getFirestore(app);
