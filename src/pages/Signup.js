import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
          return (
                    <div>
                             <form action="">
                                       <h4 className="btn btn-primary">Please  Before Register</h4>
                                       <br />
                                      <input type="Register" placeholder="Your Name"/> 
                                      <br />
                                      <input type="Your Mail" placeholder="Your Email"/>
                                      <br />
                                      <input type="Password" placeholder="Your password"/>
                                      <br />
                                      <Link to="/login">Already Register?</Link>
                                      <br />
                                    <Link to="/login">
                                    <button className="btn-secondary">Submit</button>
                                    </Link>
                                     
                                       </form> 
                    </div>
          );
};

export default Signup;