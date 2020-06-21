import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBJl9eCBaC7GADb5LWgKeywJfZQR0FDeOY",
    authDomain: "book-santa-app-dab9b.firebaseapp.com",
    databaseURL: "https://book-santa-app-dab9b.firebaseio.com",
    projectId: "book-santa-app-dab9b",
    storageBucket: "book-santa-app-dab9b.appspot.com",
    messagingSenderId: "802051064349",
    appId: "1:802051064349:web:e7ff16da6ddf7f39187cf4",
    measurementId: "G-PF9EK3CRDC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();