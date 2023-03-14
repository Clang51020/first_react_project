import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAm5wdKgGFMCHWqTptvfV7M_QkQ_IMNmvY",
    authDomain: "i-don-t-care-what-to-eat.firebaseapp.com",
    projectId: "i-don-t-care-what-to-eat",
    storageBucket: "i-don-t-care-what-to-eat.appspot.com",
    messagingSenderId: "991386326001",
    appId: "1:991386326001:web:09ae9b1a729a034db5ea50",
    measurementId: "G-ZBS0ZSBQQQ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();