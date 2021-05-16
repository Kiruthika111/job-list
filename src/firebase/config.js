import app from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx1o",
  authDomain: "portal-xxxxx.firebaseapp.com",
  databaseURL: "https://portal-xxxxx.firebaseio.com",
  projectId: "portal-xxxxx",
  storageBucket: "portal-xxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxxx",
  appId: "x:xxxxxxxxxxx:web:82bxxxxxxxxxxxxb3d929",
  measurementId: "x-xxxxxxxxxx"
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app};
