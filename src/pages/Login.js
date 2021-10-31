// import React from 'react';
// import { useLocation, useHistory, Link } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';


// const Login = () => {
//   const { signInWithGoogle, handleEmail, handlePass, handleReg } = useAuth()
//   return (
//     <div className="w-50 mx-auto shadow p-5 my-5">
//       <form onSubmit={handleReg}>
//         <div class="mb-3">
//           <label for="exampleInputEmail1" class="form-label">Email address</label>
//           <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div class="mb-3">
//           <label for="exampleInputPassword1" class="form-label">Password</label>
//           <input onBlur={handlePass} type="password" class="form-control" id="exampleInputPassword1" />
//         </div>
//         <button type="submit" class="btn btn-primary">Submit</button>
//         <div><p>Are you a new user? Please <Link to="/signup">Sign up</Link> </p></div>
//       </form>
//       <div className="mt-4">--------Or login with---------</div>
//       <div className="fs-1 text-danger">
//         <i onClick={signInWithGoogle} class="fab fa-google"></i>
//       </div>
//     </div>
//   )
// }

// export default Login;

import {  Link } from 'react-router-dom';
import React from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const {signInWithGoogle} = useAuth();
  return (
    <div>
       <Link to="/login"><button onClick={signInWithGoogle} className="btn btn-danger">Google SignIn</button></Link>
    </div>
  );
};

export default Login;