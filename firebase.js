import { 
    initializeApp 
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";


import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";


import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";



const firebaseConfig = {

    apiKey: "AIzaSyAGFMk28nkFgO58YNKircKq8WKhV9So51A",

    authDomain: "sistemamedicamentos.firebaseapp.com",

    projectId: "sistemamedicamentos",

    storageBucket: "sistemamedicamentos.firebasestorage.app",

    messagingSenderId: "1098170580891",

    appId: "1:1098170580891:web:f53f622d1acb997ca72b3e"

};



const app = initializeApp(firebaseConfig);



const db = getFirestore(app);



const auth = getAuth(app);



// Firestore

window.db = db;

window.collection = collection;

window.addDoc = addDoc;

window.getDocs = getDocs;

window.deleteDoc = deleteDoc;

window.doc = doc;


// Login

window.auth = auth;


console.log("🔥 Firebase conectado com Login");
