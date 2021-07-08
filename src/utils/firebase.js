import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD7kA-r2-ypbaba5VBj_YVUrVk4V5CFWBs",
  authDomain: "api-crud-wcs.firebaseapp.com",
  databaseURL: "https://api-crud-wcs-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "api-crud-wcs",
  storageBucket: "api-crud-wcs.appspot.com",
  messagingSenderId: "65608122087",
  appId: "1:65608122087:web:039564c9c1a2c100c16c42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
