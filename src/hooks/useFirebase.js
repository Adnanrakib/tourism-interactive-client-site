import { useState } from 'react'
import { signOut, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialization from "../firebase.init";

firebaseInitialization()

//provides

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  //google sign in
  function signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
      }).catch(error => {
        setError(error.message)
      })
  }


  //sign out
  function logOut() {

    const auth = getAuth();
    signOut(auth)
      .then((result) => {
        setUser({});
      }).catch((error) => {
        setError(error.message)
      });

  }

  return {
    signInWithGoogle,
    logOut,
    user,
    error,
  };
};

export default useFirebase;