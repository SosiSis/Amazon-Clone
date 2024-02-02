// Import the functions you need from the SDKs you need

import {initializeApp} from "Firebase/app"; 
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use // https://firebase.google.com/docs/web/setup@available-Libraries

// Your web app's Firebase configuration

// For Firebase 35 SDK v7.20.0 and later, measurement Id is optional

const firebaseConfig={
apikey: "Alza5yCdtZ27Suq1XzVranTeMz126c03ТОТОМИ",
authDomain: "fir-deaea, firebaseapp.com",
projectid: "fir 4eaes", 
storageBucket: "fir-deaea.appspot.com",
messagingSenderId: "704004796350",
appId: "1:704004796350: web:acd481a7154cae35ded3ef",
measurement Id: "G-K9HG560708"
};
// Initialite Firebate
const app =initializeApp(firebaseConfig)
const auth = getAuth(app);
export {auth}
const app initializeApp(firebaseConfig);