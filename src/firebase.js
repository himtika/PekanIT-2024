// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// eslint-disable-next-line no-undef
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: `${import.meta.env.PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: `${import.meta.env.PROJECT_ID}.appspot.com`,
  messagingSenderId: import.meta.env.SENDER_ID,
  appId: import.meta.env.APP_ID,
  measurementId: import.meta.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
