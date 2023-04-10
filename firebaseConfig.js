import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhn8qWdtJJ77jse2f-ezG_ms1Sad8Jn4k",
    authDomain: "rebuild-e58a3.firebaseapp.com",
    projectId: "rebuild-e58a3",
    storageBucket: "rebuild-e58a3.appspot.com",
    messagingSenderId: "976316802654",
    appId: "1:976316802654:web:1a4fca2c3f1a9a35e2b6cf",
    measurementId: "G-8QQH4JJWFG"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
