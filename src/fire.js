
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCZ3yJLRMf7aJkm2J_nW6MmJsjsyxyomRQ",
  authDomain: "chatweb-755ff.firebaseapp.com",
  projectId: "chatweb-755ff",
  storageBucket: "chatweb-755ff.firebasestorage.app",
  messagingSenderId: "720141105757",
  appId: "1:720141105757:web:15d5e60b42fcb38d032bb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;