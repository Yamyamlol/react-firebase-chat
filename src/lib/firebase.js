import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPSxybvWm1NMlaHJla2z2zQa-0seAy-SU",
  authDomain: "finalmessenger-d71ce.firebaseapp.com",
  projectId: "finalmessenger-d71ce",
  storageBucket: "finalmessenger-d71ce.appspot.com",
  messagingSenderId: "354835196260",
  appId: "1:354835196260:web:30dbf09314f3390a1fb271",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
