
import {initializeApp} from "firebase/app";
import {getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig= {
    apiKey: "AIzaSyCaKdM1mj_uAt9Cfc50VhNxJaimYS5g-Ec",  

    authDomain: "vuechat-c27a8.firebaseapp.com",  
    
    projectId: "vuechat-c27a8",  
    
    storageBucket: "vuechat-c27a8.appspot.com",  
    
    messagingSenderId: "713413651968",  
    
    appId: "1:713413651968:web:93c490d79df8c319cf2e5"
};

// Initialize Firebase

const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

export {auth,db};




