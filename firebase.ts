// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf9Z0olF_LARnhhUo0Pjcd2IhtUxjRVLs",
  authDomain: "netflix-clone-46639.firebaseapp.com",
  projectId: "netflix-clone-46639",
  storageBucket: "netflix-clone-46639.appspot.com",
  messagingSenderId: "1064423025431",
  appId: "1:1064423025431:web:24270dd1c08132b448a552",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
