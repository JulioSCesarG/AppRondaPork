import firebase from 'firebase';
//import {firebaseui} from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDHb2ojohy8_UkMZb7Cp_H-psf-cT8ckvA",
    authDomain: "fir-react-pork.firebaseapp.com",
    databaseURL: "https://fir-react-pork.firebaseio.com",
    projectId: "fir-react-pork",
    storageBucket: "fir-react-pork.appspot.com",
    messagingSenderId: "518288165673",
    appId: "1:518288165673:web:2f2d1084fa352ef5378538"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();


