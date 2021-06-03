import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClfXdpnt7uccC93mjeKXqwRwg40jLQBV4",
  authDomain: "eiva-e-commerce.firebaseapp.com",
  projectId: "eiva-e-commerce",
  storageBucket: "eiva-e-commerce.appspot.com",
  messagingSenderId: "975242584339",
  appId: "1:975242584339:web:15076e941261575a767ae6",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

