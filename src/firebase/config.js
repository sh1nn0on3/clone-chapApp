// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoy2jBTKontrpiOYyeMWAwbSCiRG8S8Ig",
  authDomain: "demo1-57073.firebaseapp.com",
  projectId: "demo1-57073",
  storageBucket: "demo1-57073.appspot.com",
  messagingSenderId: "6981368181",
  appId: "1:6981368181:web:a9a0b949fa3ece9075bb3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
