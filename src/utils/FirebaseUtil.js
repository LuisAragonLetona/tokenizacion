// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export function firebaseConfig() {
  const config = {
    apiKey: "AIzaSyBUp5eDLA-mcv3am_qrNyMXNMj6bybRNok",
    authDomain: "tokenizacion-e9a35.firebaseapp.com",
    projectId: "tokenizacion-e9a35",
    storageBucket: "tokenizacion-e9a35.appspot.com",
    messagingSenderId: "730930262103",
    appId: "1:730930262103:web:5f31927dbd4a967314b312",
    measurementId: "G-N5Y6THYSDL"
  };

  // Initialize Firebase
  const app = initializeApp(config);
  const analytics = getAnalytics(app);
}