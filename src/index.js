import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require ('firebase/firestore');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBgz7O3XTRjM1l-a77rXApOF5HYbt0ppOQ",
  authDomain: "evernote-clone-dd802.firebaseapp.com",
  databaseURL: "https://evernote-clone-dd802.firebaseio.com",
  projectId: "evernote-clone-dd802",
  storageBucket: "evernote-clone-dd802.appspot.com",
  messagingSenderId: "424245480470",
  appId: "1:424245480470:web:a3ad7a11c227e75435b937",
  measurementId: "G-VP4PG1VQ4H"
});
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
