// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBptt2RB62YwGc4CW_ijyS9sBQGPtTpdh4",
  authDomain: "unitheapp-deedd.firebaseapp.com",
  projectId: "unitheapp-deedd",
  storageBucket: "unitheapp-deedd.appspot.com",
  messagingSenderId: "230372004385",
  appId: "1:230372004385:web:c6d85dcaa08f0341180960",
  measurementId: "G-L0B7VLZEF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }