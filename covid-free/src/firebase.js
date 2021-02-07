// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBkqws-axBaGhHYvAjgdrHfCGNTs7jwCow",
    authDomain: "covidfree-c4429.firebaseapp.com",
    databaseURL: "https://covidfree-c4429-default-rtdb.firebaseio.com",
    projectId: "covidfree-c4429",
    storageBucket: "covidfree-c4429.appspot.com",
    messagingSenderId: "452716135641",
    appId: "1:452716135641:web:674d24e867616185dd6ac8",
    measurementId: "G-17NT51Q1MQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;