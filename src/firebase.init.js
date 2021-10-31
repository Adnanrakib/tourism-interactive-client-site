import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebase.Config";

const firebaseInitialization = () => {
          return initializeApp(firebaseConfig);
};

export default firebaseInitialization;