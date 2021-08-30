import app from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  //your credentials
};

const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app};
