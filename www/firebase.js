import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAId0OS7_KbyhEfq5uVRw6a4-vXxsax_6o",
  authDomain: "play-lucky-7bfc3.firebaseapp.com",
  projectId: "play-lucky-7bfc3",
  storageBucket: "play-lucky-7bfc3.firebasestorage.app",
  messagingSenderId: "1069302292524",
  appId: "1:1069302292524:web:9f423b9be1596aafc97189"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
