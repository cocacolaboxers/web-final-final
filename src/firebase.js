import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyA8kDI5L6uI-lS8GmoR_cDJnp-IME_3vHs",
    authDomain: "web-force-b7e2b.firebaseapp.com",
    databaseURL: "https://web-force-b7e2b.firebaseio.com",
    projectId: "web-force-b7e2b",
    storageBucket: "web-force-b7e2b.appspot.com",
    messagingSenderId: "1018998974632",
    appId: "1:1018998974632:web:51be66200ed3dbdf39fa9d"
  };
  
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();