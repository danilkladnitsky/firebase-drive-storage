import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDfG0xLE-7rLg5v2VMcLoEXlhdCGQETyOE",
  authDomain: "fir-drive-storage-c53a7.firebaseapp.com",
  projectId: "fir-drive-storage-c53a7",
  storageBucket: "fir-drive-storage-c53a7.appspot.com",
  messagingSenderId: "938857109040",
  appId: "1:938857109040:web:e647620e7a8ed84c767ff5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }