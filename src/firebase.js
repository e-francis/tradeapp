import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: process.env.BITCHANGETRADING_APP_API_KEY,
  authDomain: process.env.BITCHANGETRADING_APP_AUTH_DOMAIN,
  projectId: process.env.BITCHANGETRADING_APP_PROJECT_ID,
  databaseURL: process.env.BITCHANGETRADING_APP_DATABASE_URL,
  storageBucket: process.env.BITCHANGETRADING_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.BITCHANGETRADING_APP_MESSAGING_SENDER_ID,
  appId: process.env.BITCHANGETRADING_APP_APP_ID,
  measurementId: process.env.BITCHANGETRADING_APP_MEASUREMENT_ID
})

export const auth = app.auth()
export default app
