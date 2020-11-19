import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaThOMCZhThc3sKATNVUbXuBvTypyTCAM",
    authDomain: "facebook-clone-1378c.firebaseapp.com",
    databaseURL: "https://facebook-clone-1378c.firebaseio.com",
    projectId: "facebook-clone-1378c",
    storageBucket: "facebook-clone-1378c.appspot.com",
    messagingSenderId: "705217135011",
    appId: "1:705217135011:web:5495210e5a7daee2a35a16",
    measurementId: "G-Y0KPLV4T1D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;