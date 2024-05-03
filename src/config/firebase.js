import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBpbomMBq3yIxpIAglH6IR1JWU4NqaXe0k",
  authDomain: "it-sysarch32-store-cormanes.firebaseapp.com",
  projectId: "it-sysarch32-store-cormanes",
  storageBucket: "it-sysarch32-store-cormanes.appspot.com",
  messagingSenderId: "426044042517",
  appId: "1:426044042517:web:9aa3dc8dc404ee5418cd1c",
  measurementId: "G-CEY364E19X"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);