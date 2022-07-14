import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBWnqlzQm9PnmU_5kL38wRjI8sKST1H0pA",
  authDomain: "shadman-shakib-portfolio.firebaseapp.com",
  projectId: "shadman-shakib-portfolio",
  storageBucket: "shadman-shakib-portfolio.appspot.com",
  messagingSenderId: "286157881385",
  appId: "1:286157881385:web:8de6ec847500e587e05c38",
  measurementId: "G-QTGKC5XFLC",
};

const firebaseApp = getApps();
function initFirebase() {
  if (typeof window !== "undefined" && !firebaseApp.length) {
    initializeApp(firebaseConfig);
    console.log("firebase initialized");
  }
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { initFirebase, db, app };
