// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcl_hWN4swSRlYC4dgGzoKIfYMTq3I71s",
  authDomain: "fouad-coaching.firebaseapp.com",
  projectId: "fouad-coaching",
  storageBucket: "fouad-coaching.firebasestorage.app",
  messagingSenderId: "182941771603",
  appId: "1:182941771603:web:40deea9bc240f1b135e3a6",
  measurementId: "G-00SPYZH1RS"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
 //const auth = firebase.auth();
//const db = firebase.firestore();
}
