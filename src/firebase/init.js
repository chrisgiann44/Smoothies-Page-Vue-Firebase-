import firebase from 'firebase/app'
// eslint-disable-next-line
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD8Cpaw0-oew0HDCcIU3buxo62HCYwOmIQ",
    authDomain: "smoothies-b1489.firebaseapp.com",
    databaseURL: "https://smoothies-b1489.firebaseio.com",
    projectId: "smoothies-b1489",
    storageBucket: "smoothies-b1489.appspot.com",
    messagingSenderId: "375664064818",
    appId: "1:375664064818:web:f92a5d50ec4169f8247f2b",
    measurementId: "G-PLE59TJ4ZD"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()