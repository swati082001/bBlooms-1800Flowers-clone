import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyBof4zJRMPsuWDVh6kccfxy8_kAludhy28",
  authDomain: "bblooms-dd023.firebaseapp.com",
  projectId: "bblooms-dd023",
  storageBucket: "bblooms-dd023.appspot.com",
  messagingSenderId: "666302783606",
  appId: "1:666302783606:web:8cabfe3b9481ce2f383f57"
}

const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore();



export {auth,db};