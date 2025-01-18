import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDjnBhLeMxIHkweljwrmieemUQuRR1z-_0",
  authDomain: "fir-crud-48497.firebaseapp.com",
  projectId: "fir-crud-48497",
  storageBucket: "fir-crud-48497.firebasestorage.app",
  messagingSenderId: "701192435711",
  appId: "1:701192435711:web:679f227d4752c2a15c59ca",
  measurementId: "G-L42TTKH6Y0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);