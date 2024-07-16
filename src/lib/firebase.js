import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "get your own api key lol it was just for college project so i hard coded this",
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
