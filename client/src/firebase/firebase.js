import firebase from "firebase/app";
import firebaseauth from "firebase/auth";


var config = {
    apiKey: "AIzaSyApZqee1TLs3Etohoz6nCBfH25zjduDFl8",
    authDomain: "virtualhostel-b81c5.firebaseapp.com",
    databaseURL: "https://virtualhostel-b81c5.firebaseio.com",
    projectId: "virtualhostel-b81c5",
    storageBucket: "virtualhostel-b81c5.appspot.com",
    messagingSenderId: "390197625647"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

export {
  auth,
};