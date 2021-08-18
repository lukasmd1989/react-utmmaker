import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyC5A1bId0FJkSpZUc70XLd2E7MREPBSbDQ",
    authDomain: "project1-utm.firebaseapp.com",
    projectId: "project1-utm",
    storageBucket: "project1-utm.appspot.com",
    messagingSenderId: "992292576214",
    appId: "1:992292576214:web:30600b6b1bd2241b5be277",
    measurementId: "G-KHE2T5JNZL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
    
  export default db;
