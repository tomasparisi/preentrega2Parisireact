import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA06i1PTFOIVWjtyODRVTlQ7CGrUPN_qVc",
  authDomain: "react-d23fc.firebaseapp.com",
  projectId: "react-d23fc",
  storageBucket: "react-d23fc.appspot.com",
  messagingSenderId: "1040514649776",
  appId: "1:1040514649776:web:2f99c5465538aca5223575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

