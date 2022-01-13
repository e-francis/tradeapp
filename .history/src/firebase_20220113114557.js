import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyABZlSAiWaZDP4yxOHksHFh5IKUc38gsc0",
  authDomain: "bitchangedbck.firebaseapp.com",
  projectId: "bitchangedbck",
  storageBucket: "bitchangedbck.appspot.com",
  messagingSenderId: "950495762111",
  appId: "1:950495762111:web:be70a7af9de01e2059180a"
})

export const auth = firebase.auth()
export default app