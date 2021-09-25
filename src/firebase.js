import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyACRYSrmQo47FsAh28w-qycnVP27eaGGZ8",
    authDomain: "chat-application-d7b3c.firebaseapp.com",
    projectId: "chat-application-d7b3c",
    storageBucket: "chat-application-d7b3c.appspot.com",
    messagingSenderId: "986798751748",
    appId: "1:986798751748:web:091084dabbb2f593e3f551"
  }).auth();