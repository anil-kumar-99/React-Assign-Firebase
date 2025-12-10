import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsOk9dgbRXxDUNk-eWv4HYfRzQYwjifCE",
  authDomain: "ai-text-summary-7c3b6.firebaseapp.com",
  projectId: "ai-text-summary-7c3b6",
  storageBucket: "ai-text-summary-7c3b6.appspot.com", // fix typo if needed
  messagingSenderId: "638986515656",
  appId: "1:638986515656:web:12e3bef5f522c5b76e21fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
