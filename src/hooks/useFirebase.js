import {useEffect, useState} from 'react'
import {signOut, getAuth, signInWithPopup,onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import firebaseInitialization from "../firebase.init";

firebaseInitialization()

//provides
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
          const [user, setUser] = useState({});
          const [error, setError] = useState("");
          
//google sign in
function signInWithGoogle() {
         return signInWithPopup(auth, googleProvider)
          .then(result =>{
          setUser(result.user);
          }).catch(error =>{
          setError(error.message)
          })
}

 //get the currently signed-in user

useEffect( ()=> {
        const unsubscribe=  onAuthStateChanged(auth,
           (signedInUser) => {
                    if (signedInUser) {
                    setUser(signedInUser);
                    }
                    
                  });
                  return () => unsubscribe;
}, [])

//sign out
function logOut (){

          const auth = getAuth();
signOut(auth)
.then((result) => {
          setUser({});
}).catch((error) => {
setError(error.message)
});

}

          return {signInWithGoogle, 
                    logOut,
                    user,
                    error,
          };
};

export default useFirebase;