// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv5cRdoaenWSoe5iG_Dd5NJ1BvazHJwgs",
  authDomain: "groca-2cea6.firebaseapp.com",
  projectId: "groca-2cea6",
  storageBucket: "groca-2cea6.appspot.com",
  messagingSenderId: "142617441415",
  appId: "1:142617441415:web:436eaf6c3fbc6ae88ab422",
  // apiKey: process.env.REACT_APP_ApiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
