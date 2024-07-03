// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCv7e61hLMH-k056GwrNNjqO_PqRzhdtGc",
  authDomain: "netflixgpt-d9927.firebaseapp.com",
  projectId: "netflixgpt-d9927",
  storageBucket: "netflixgpt-d9927.appspot.com",
  messagingSenderId: "230274110536",
  appId: "1:230274110536:web:78d8be0550043744b8747d",
  measurementId: "G-GZCB82H9J8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
