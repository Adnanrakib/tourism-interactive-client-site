import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
          return (
                    <div>
                             <h1>404</h1> 
                             <h2>Page Not Found</h2>
                             <Link to="/home">
                             <button className="btn btn-warning">Back Home</button>
                             </Link>
                    </div>
          );
};

export default NotFound;