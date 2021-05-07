import firebase from 'firebase'


  const firebaseApp = firebase.initializeApp(
    {
      apiKey: "AIzaSyBDJcE3uVmIaT_f0N7350VwMg2JjANoPEw",
      authDomain: "stack-clone-bc709.firebaseapp.com",
      projectId: "stack-clone-bc709",
      storageBucket: "stack-clone-bc709.appspot.com",
      messagingSenderId: "712235560390",
      appId: "1:712235560390:web:9161319a9b1c46c9f056c7",
      measurementId: "G-T5YM0L4CFT"
    }
  
  )
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
export {db,auth,provider}