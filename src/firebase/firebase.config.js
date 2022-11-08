// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrmfULqbBB3gKKtMYQOSqzD0s3YjD94Oc",
  authDomain: "snap-with-amit.firebaseapp.com",
  projectId: "snap-with-amit",
  storageBucket: "snap-with-amit.appspot.com",
  messagingSenderId: "689701085793",
  appId: "1:689701085793:web:4723b64d67082c7d280020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;