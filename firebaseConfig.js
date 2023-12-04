import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWDe9zRtVPU1Rd4l-t16LprlXCXlYvX5k",
    authDomain: "medoriapp.firebaseapp.com",
    projectId: "medoriapp",
    storageBucket: "medoriapp.appspot.com",
    messagingSenderId: "406308038378",
    appId: "1:406308038378:web:78cd2a00988bce3ff79993"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);