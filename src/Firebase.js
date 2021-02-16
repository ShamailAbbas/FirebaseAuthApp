import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyD2C6Mkck_qowKYlKuAFIUWXGIs9BcaDE4',
  authDomain: 'user-authantication-baf55.firebaseapp.com',
  projectId: 'user-authantication-baf55',
  storageBucket: 'user-authantication-baf55.appspot.com',
  messagingSenderId: '64748228826',
  appId: '1:64748228826:web:a2c18cf75b26e4f471d5e3',
})

export const auth = app.auth()
export const db = app.firestore()
export default app
