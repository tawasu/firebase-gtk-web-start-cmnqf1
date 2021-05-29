// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

async function main() {
  // Add Firebase project configuration object here
  var firebaseConfig = {
    apiKey: 'AIzaSyAJGJEVzx5QLblVU-_dgxbYjFf-mjbv8lM',
    authDomain: 'fir-web-codelab-b3130.firebaseapp.com',
    projectId: 'fir-web-codelab-b3130',
    storageBucket: 'fir-web-codelab-b3130.appspot.com',
    messagingSenderId: '459321090316',
    appId: '1:459321090316:web:f563e7891fc0c8759c2929'
  };
  // var firebaseConfig = {};

  // firebase.initializeApp(firebaseConfig);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      }
    }
  };
  // Initialize the FirebaseUI widget using Firebase
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  // Listen to RSVP button clicks
  startRsvpButton.addEventListener('click', () => {
    ui.start('#firebaseui-auth-container', uiConfig);
  });
}
main();
