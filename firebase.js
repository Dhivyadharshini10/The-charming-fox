// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLNb6xIRizOy4gIt72WS7WGgvpCp_WatQ",
  authDomain: "thecharmingfox-1e583.firebaseapp.com",
  projectId: "thecharmingfox-1e583",
  storageBucket: "thecharmingfox-1e583.firebasestorage.app",
  messagingSenderId: "533298704507",
  appId: "1:533298704507:web:3c2db652f8d6cb9e5f72de",
  measurementId: "G-GD4734QBNH"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
