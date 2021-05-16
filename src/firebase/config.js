import app from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDqy7g0zRRQuJJN-iK45Qw5fbdLOJRVY1o",
  authDomain: "portal-9adb4.firebaseapp.com",
  databaseURL: "https://portal-9adb4.firebaseio.com",
  projectId: "portal-9adb4",
  storageBucket: "portal-9adb4.appspot.com",
  messagingSenderId: "520915628300",
  appId: "1:520915628300:web:82b13a0ab7653086b3d929",
  measurementId: "G-3CPHQXZVKR"
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app};