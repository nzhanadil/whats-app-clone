import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDaDArFJ0txlG7YGnja2pQ5mESTBiLMy5w",
    authDomain: "whats-app-clone-9456c.firebaseapp.com",
    projectId: "whats-app-clone-9456c",
    storageBucket: "whats-app-clone-9456c.appspot.com",
    messagingSenderId: "613126842261",
    appId: "1:613126842261:web:9518869e1dd66f329cb89c",
    measurementId: "G-QSYD3CHL6Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db