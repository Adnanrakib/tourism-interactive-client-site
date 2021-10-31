import {  Link } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';
import './Login.css'
import travel from "../images/travel.jpg"

const Login = () => {
  const {signInWithGoogle} = useAuth();
  return (
    <div className="row">
    <div className="col-lg-12 col-12">
      <img src={travel} alt="" />
    </div>
    <div className="login">

      <h1 className="booking">BOOKING SERVICE</h1>
       <Link to="/cart"><button onClick={signInWithGoogle} className="btn btn-danger">Google SignIn</button></Link>
    </div>
    </div>
  );
};

export default Login;