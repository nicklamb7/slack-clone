import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAp71-Sw0LHjaGmECVwQybxio6UZZzVy5E",
    authDomain: "slack-demo-d0381.firebaseapp.com",
    projectId: "slack-demo-d0381",
    storageBucket: "slack-demo-d0381.appspot.com",
    messagingSenderId: "428034079644",
    appId: "1:428034079644:web:0c17bbed50ccf4c6b4e659"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };