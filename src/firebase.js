import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA0X-Jxg1iGd3kVAbJNL6OcJ6Xf0Ey3RK0",
  authDomain: "auth-dev-eb714.firebaseapp.com",
  projectId: "auth-dev-eb714",
  storageBucket: "auth-dev-eb714.appspot.com",
  messagingSenderId: "701530536218",
  appId: "1:701530536218:web:433f239b0a32f4bee614a3",
});

const firestore = app.firestore();
export const auth = app.auth();

export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = app.storage()
export default app;
