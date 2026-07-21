import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAhOjp92LtySE6RWyTAt-iyP1Dhkpc2sY0",

  authDomain: "shopsphere-67b04.firebaseapp.com",

  projectId: "shopsphere-67b04",

  storageBucket: "shopsphere-67b04.firebasestorage.app",

  messagingSenderId: "709597506562",

  appId: "1:709597506562:web:c18e3dfb7bd6d52ddccb1b",

};

const app = initializeApp(firebaseConfig);

// Firebase Authentication

export const auth = getAuth(app);

// Google Authentication

export const googleProvider = new GoogleAuthProvider();

// Firestore Database

export const db = getFirestore(app);