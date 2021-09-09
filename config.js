import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyAQlkOmbaWhSD-XejlOpHQHrRYac6590ws",

  authDomain: "project-71-18a1d.firebaseapp.com",

  projectId: "project-71-18a1d",

  storageBucket: "project-71-18a1d.appspot.com",

  messagingSenderId: "269671496132",

  appId: "1:269671496132:web:14b02925f674143e330c91"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

