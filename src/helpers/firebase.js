import firebase from "firebase/app";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD_BNuWuSkQwq-EDDr8i1wdZhSSPFL5RRM",
  authDomain: "pnpals-bb5ee.firebaseapp.com",
  databaseURL: "https://pnpals-bb5ee.firebaseio.com",
  projectId: "pnpals-bb5ee",
  storageBucket: "pnpals-bb5ee.appspot.com",
  messagingSenderId: "444157553282",
  appId: "1:444157553282:web:0a86ed0b022eff345f629b",
  measurementId: "G-HS4K0C4WJ4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const FIREBASE_IMAGE_REF = "contact-image";
export default firebase;
