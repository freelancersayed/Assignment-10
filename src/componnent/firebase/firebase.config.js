// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG37XtjxNnEpYYjc7FWL8AGMHF2GPMtUw",
  authDomain: "tour-of-south-asia.firebaseapp.com",
  projectId: "tour-of-south-asia",
  storageBucket: "tour-of-south-asia.appspot.com",
  messagingSenderId: "191293606422",
  appId: "1:191293606422:web:bcd773325ef33b87890337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;