import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaN1HsVQavG3hMo6vKtBGSHy6uqcP47K4",
  authDomain: "vtaste-fa233.firebaseapp.com",
  databaseURL: "https://vtaste-fa233-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vtaste-fa233",
  storageBucket: "vtaste-fa233.appspot.com",
  messagingSenderId: "566273163079",
  appId: "1:566273163079:web:127bc4dac704bc0938d662"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
