import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyCZayfc-sGgzSlAERUBEDmJYWhQD3J1qXg",
    authDomain: "fb-clone-415fe.firebaseapp.com",
    projectId: "fb-clone-415fe",
    storageBucket: "fb-clone-415fe.appspot.com",
    messagingSenderId: "528081881542",
    appId: "1:528081881542:web:5b0bd7e8e3efc9d2c28ac7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) 
const db = firebaseApp.firestore(); 
export const auth = firebase.auth(); 
// supporting google login
export const provider =  new firebase.auth.GoogleAuthProvider(); 

export default db 