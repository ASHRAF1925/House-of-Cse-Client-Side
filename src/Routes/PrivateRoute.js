import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    let location=useLocation();
    if(loading){
        return  <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }

    if(user && user.uid)
    {
        return children;
    }
    
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;