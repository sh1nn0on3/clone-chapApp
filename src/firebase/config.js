// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGeZt82KntR9z5JtsZwl3kH7Wkr9N6vSs",
  authDomain: "fir-48fe1.firebaseapp.com",
  projectId: "fir-48fe1",
  storageBucket: "fir-48fe1.appspot.com",
  messagingSenderId: "635464196374",
  appId: "1:635464196374:web:4732323ed9ead77c4e3037",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
