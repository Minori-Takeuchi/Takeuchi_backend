// firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import store from "./store/auth";


const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);
const auth = firebase.auth();

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

  firebase.auth().onAuthStateChanged((user) => {
    store.commit("setUser", { user });
  });

export { auth, firebase };