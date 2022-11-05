// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxJ6KrIfJG4ALDniRhiWWWENmXPXybeoM',
  authDomain: 'house-market-37742.firebaseapp.com',
  projectId: 'house-market-37742',
  storageBucket: 'house-market-37742.appspot.com',
  messagingSenderId: '751019030827',
  appId: '1:751019030827:web:b39b92d8e4092bafa4ad6e',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
