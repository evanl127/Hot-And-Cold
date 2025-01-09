/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
/* === Firebase Setup === */
const firebaseConfig = {
    apiKey: "AIzaSyA_5IthEUtKAyFSxzC_34WRao2LrcSP_v4",
    authDomain: "hot-and-cold-cfcee.firebaseapp.com",
    projectId: "hot-and-cold-cfcee",
    storageBucket: "hot-and-cold-cfcee.firebasestorage.app",
    messagingSenderId: "946628246857",
    appId: "1:946628246857:web:49b60d1ac2a6a2203dee98",
    measurementId: "G-WNFC7ZN58B"
}
/* === UI === */

/* == UI - Elements == */
const signOutButtonEl = document.getElementById("sign-out-btn")
const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */
signOutButtonEl.addEventListener("click", authSignOut)
signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
console.log(auth)
console.log(app.options.projectId)

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignOut() {
  /*  Challenge:
       Import the signOut function from 'firebase/auth'


      Use the code from the documentation to make this function work.
      
      If the log out is successful then you should show the logged out view using showLoggedOutView()
      If something went wrong, then you should log the error message using console.error.
  */
      signOut(auth).then(() => {
        showLoggedOutView()
      }).catch((error) => {
        console.error(error.message)
      });
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
    const email = emailInputEl.value
    const password= passwordInputEl.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      showLoggedInView()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error.message)
    });
}

function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
    const email = emailInputEl.value
    const password= passwordInputEl.value
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      showLoggedInView()
    })
    .catch((error) => {
      console.error(error.message)
    });
}

/* == Functions - UI Functions == */


function showLoggedOutView() {
  hideView(viewLoggedIn)
  showView(viewLoggedOut)
}


function showLoggedInView() {
  hideView(viewLoggedOut)
  showView(viewLoggedIn)
}


function showView(view) {
  view.style.display = "flex"
}


function hideView(view) {
  view.style.display = "none"
}


//credit: coursera