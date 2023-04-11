import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAD35hkzFh75ilVn6xgdEeC8wm7D5IZck0",
  authDomain: "powerkraft-02.firebaseapp.com",
  projectId: "powerkraft-02",
  storageBucket: "powerkraft-02.appspot.com",
  messagingSenderId: "631585704333",
  appId: "1:631585704333:web:474ccfcf6284da447655c4",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
