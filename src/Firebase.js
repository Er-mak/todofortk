import * as firebase from 'firebase/app';
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDPgJ8ZzW7Cm3qsuO5PwBClc5xKLIw6zVo",
  authDomain: "todofortk.firebaseapp.com",
  databaseURL: "https://todofortk.firebaseio.com",
  projectId: "todofortk",
  storageBucket: "todofortk.appspot.com",
  messagingSenderId: "600418825393",
  appId: "1:600418825393:web:126ca254950a41e5"
};
firebase.initializeApp(config);

export default firebase;
