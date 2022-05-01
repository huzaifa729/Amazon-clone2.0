
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBCdxZriQrJtgb5OgpqjjNsAABOIW6VQmo",
    authDomain: "clone2-5c132.firebaseapp.com",
    projectId: "clone2-5c132",
    storageBucket: "clone2-5c132.appspot.com",
    messagingSenderId: "297767635109",
    appId: "1:297767635109:web:a01784c3daaaf9e118654c",
    measurementId: "G-LESRFSZR8M"
};




const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

  export{db, auth}