import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDxHcyuqLH4pkpKwnXUzqRFE97JsCB6u24",
  authDomain: "my-app-a009a.firebaseapp.com",
  projectId: "my-app-a009a",
  storageBucket: "my-app-a009a.appspot.com", 
  messagingSenderId: "535841998708",
  appId: "1:535841998708:web:8a5efd429023a138d4ce21"
};
  // Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}



  export default firebase.firestore()

