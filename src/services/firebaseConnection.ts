
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDz_HCAzIRjb3lp8oYwbt6ySXQ3C8A8ZGI",
  authDomain: "devlinks-d31d1.firebaseapp.com",
  projectId: "devlinks-d31d1",
  storageBucket: "devlinks-d31d1.firebasestorage.app",
  messagingSenderId: "479470657231",
  appId: "1:479470657231:web:04d3ef526d91c9c77021ba"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


export {auth, db}