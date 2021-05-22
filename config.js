import firebase from 'firebase'
require('@firebase/firestore')
 var firebaseConfig = {
    apiKey: "AIzaSyD8XMetOcYYQwev37HLW0jygc1y9zwCQN4",
    authDomain: "storyhub-3e2e9.firebaseapp.com",
    projectId: "storyhub-3e2e9",
     databaseURL: 'https://storyhub-3e2e9.firebaseio.com',
    storageBucket: "storyhub-3e2e9.appspot.com",
    messagingSenderId: "912604166709",
    appId: "1:912604166709:web:7215b2ba7aa8f3a17acf7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()