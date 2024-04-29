import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';



const PrivetRout = ({children}) => {
    const {user}= useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
  
    if(user){
        return children
     }
     else{
         return <Navigate state={location.pathname} to="/login"></Navigate>
     }

};

export default PrivetRout;