import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

export const fireabseApp = firebase.initializeApp({
    apiKey: "AIzaSyARvJyuLNsCZ1k0yLYEF-2cK2H1jwzdj1c",
    authDomain: "fir-auth-5ff5a.firebaseapp.com",
    projectId: "fir-auth-5ff5a",
    storageBucket: "fir-auth-5ff5a.appspot.com",
    messagingSenderId: "342043682671",
    appId: "1:342043682671:web:41937fc9092bba2497aa9a",
    measurementId: "G-5710TH7PMD"
});

export const auth = fireabseApp.auth();
export const firestore = fireabseApp.firestore();
export const storage = fireabseApp.storage();
export const functions = fireabseApp.functions('asia-south1');

