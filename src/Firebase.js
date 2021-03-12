import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCQlcq8xDu21NZG1sIwbQJmAr27NFhKzNE",
    authDomain: "dynamiccategorie.firebaseapp.com",
    projectId: "dynamiccategorie",
    storageBucket: "dynamiccategorie.appspot.com",
    messagingSenderId: "871896618675",
    appId: "1:871896618675:web:792747123112de46a802c6",
    measurementId: "G-6200N865XS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;  


