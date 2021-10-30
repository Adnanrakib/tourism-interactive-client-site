import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Login = () => {
  const {signInWithGoogle} = useAuth()
          return (
         
            <div>
            <h1>Please Login</h1>
            <form action="">
              <input type="email" placeholder="Your Email" />
              <br />
              <input type="Password" placeholder="Password"/>
              <br />
           <button className="btn btn-primary" onClick={signInWithGoogle}>Google Sign-In</button>
           <br />
           <Link to="/signup"> <p>Create Account</p></Link>
           </form>
           </div>
          );
};

export default Login;