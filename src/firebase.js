// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyB9j49gNQY9RN0NBkKo5b3xye9CGR1aRWk",
    authDomain: "todo-app-by-firebase.firebaseapp.com",
    projectId: "todo-app-by-firebase",
    storageBucket: "todo-app-by-firebase.appspot.com",
    messagingSenderId: "45165851271",
    appId: "1:45165851271:web:0f48694a4a6432c7aabe22",
    measurementId: "G-4KQ52JVWSE"
  
}) 
export const db=firebaseApp.firestore()

  