 import { initializeApp } from "firebase/app";
 import { getStorage } from "firebase/storage";

 const firebaseConfig = {
   apiKey: "AIzaSyB07rXhVEHdiAylU-lP9MCQrV5KyT1aHTk",
   authDomain: "img-upload-3c7ec.firebaseapp.com",
   projectId: "img-upload-3c7ec",
   storageBucket: "img-upload-3c7ec.appspot.com",
   messagingSenderId: "1096381255361",
   appId: "1:1096381255361:web:66fa9a2a2fb2fad8958e40",
 };

 const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app);
