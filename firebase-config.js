// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcJ_hNM4swSR1YC4dgGzoKIfYMTq3I71s",
    authDomain: "fouad-coaching.firebaseapp.com",
    projectId: "fouad-coaching",
    storageBucket: "fouad-coaching.firebasestorage.app",
    messagingSenderId: "182941771603",
    appId: "1:182941771603:web:48deea9bc240f1b135e3a6",
    measurementId: "G-80SPFZH1RS"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
}
