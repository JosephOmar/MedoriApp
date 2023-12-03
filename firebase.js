import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWDe9zRtVPU1Rd4l-t16LprlXCXlYvX5k",
    authDomain: "medoriapp.firebaseapp.com",
    projectId: "medoriapp",
    storageBucket: "medoriapp.appspot.com",
    messagingSenderId: "406308038378",
    appId: "1:406308038378:web:78cd2a00988bce3ff79993"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };