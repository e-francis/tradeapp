import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.BITCHANGETRADING_APP_FIREBASE_API_KEY,
    authDomain: process.env.BITCHANGETRADING_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.BITCHANGETRADING_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.BITCHANGETRADING_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.BITCHANGETRADING_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.BITCHANGETRADING_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.BITCHANGETRADING_APP_FIREBASE_APP_ID,
    measurementId: process.env.BITCHANGETRADING_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app