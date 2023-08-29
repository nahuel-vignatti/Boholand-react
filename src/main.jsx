import ReactDOM from "react-dom/client";
import React from 'react';
import "./index.css";
import App from "./app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBnkcO6FHdYJh8YyG16QGZqJYSc8-cO93E",
  authDomain: "boholand-store.firebaseapp.com",
  projectId: "boholand-store",
  storageBucket: "boholand-store.appspot.com",
  messagingSenderId: "540770884309",
  appId: "1:540770884309:web:c0131373b279b59643605c",
  measurementId: "G-73WYQJREDJ",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
