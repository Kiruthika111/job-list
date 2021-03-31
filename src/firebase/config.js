import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
var firebaseConfig = {
  projectId: "portal-9adb4",
    apiKey: "AIzaSyDqy7g0zRRQuJJN-iK45Qw5fbdLOJRVY1o",
    authDomain: "portal-9adb4.firebaseapp.com",
    databaseURL: "https://portal-9adb4.firebaseio.com",
    
    storageBucket: "portal-9adb4.appspot.com",
    messagingSenderId: "520915628300",
    appId: "1:520915628300:web:82b13a0ab7653086b3d929",
    measurementId: "G-3CPHQXZVKR"
  };
  // Initialize Firebase
  
  const firebase = app.initializeApp(firebaseConfig);
  //const firebase = app.initializeApp({projectId: "portal-9adb4"});
  const firestore = firebase.firestore();

  export { firebase, firestore, app };

  //firebase.analytics();