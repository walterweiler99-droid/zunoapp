import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc 
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXM4wo_lmrSYx3TzmdcpOOTrClxVhWHW4",
  authDomain: "zuno-pwa.firebaseapp.com",
  projectId: "zuno-pwa",
  storageBucket: "zuno-pwa.firebasestorage.app",
  messagingSenderId: "452598191701",
  appId: "1:452598191701:web:20344b0ceb722839c5e6dc"
};

const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);
window.db = getFirestore(app);

// Exportar funções para uso global
window.fbCreateUser = createUserWithEmailAndPassword;
window.fbSignIn = signInWithEmailAndPassword;
window.fbSignOut = signOut;
window.fbSendPasswordReset = sendPasswordResetEmail;
window.fbReauth = reauthenticateWithCredential;
window.fbEmailAuthProvider = EmailAuthProvider;
window.fbUpdatePassword = updatePassword;

window.fbDoc = doc;
window.fbSetDoc = setDoc;
window.fbGetDoc = getDoc;
window.fbUpdateDoc = updateDoc;