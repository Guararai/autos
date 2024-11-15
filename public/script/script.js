import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyBVJIKGivD0wnr4FxAMB-kz8oCNtcLmtYs",
    authDomain: "autos-34b01.firebaseapp.com",
    projectId: "autos-34b01",
    storageBucket: "autos-34b01.appspot.com",
    messagingSenderId: "903227924701",
    appId: "1:903227924701:web:90d4301331b1259765bb34",
    measurementId: "G-PY6L785E86"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {

        const username = document.getElementById("username");
        console.log(user);
        username.textContent = user.displayName ? user.displayName : user.email;

    } else {
        window.location = "/login";
    }
});

const logout = document.getElementById("logout");
logout.onclick = function (e) {
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location = "/login";
    }).catch((error) => {

    });
};


