import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmlprvG_rY3sppGThxl19IyaWZnLyvz-w",
    authDomain: "netflix-7aad1.firebaseapp.com",
    projectId: "netflix-7aad1",
    storageBucket: "netflix-7aad1.appspot.com",
    messagingSenderId: "964033775766",
    appId: "1:964033775766:web:3ba319ab77a27dd3b21ab7",
    measurementId: "G-XSVVHYCSGQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }