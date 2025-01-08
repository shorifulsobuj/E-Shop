import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABt_-5KgtVAMtrRKsSUZd-PCadWv4FW8k",
  authDomain: "e-bangla-app.firebaseapp.com",
  projectId: "e-bangla-app",
  storageBucket: "e-bangla-app.firebasestorage.app",
  messagingSenderId: "841209356986",
  appId: "1:841209356986:web:df7aa7625e16d0ae3a5883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;