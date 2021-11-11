import { useEffect, useState } from 'react'
import { signOut, getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import firebaseInitialization from "../firebase.init";

firebaseInitialization()

//provides

const auth = getAuth();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  useEffect( ()=>{
    onAuthStateChanged(auth, user=>{
        if(user){
            setUser(user)
            setIsLoading(false)
        }else{
            setUser(null)
            setIsLoading(false)
        }
    })
},[])



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
    isLoading,
  };
};

export default useFirebase;