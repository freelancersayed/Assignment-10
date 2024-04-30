import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import { Box, CircularProgress } from '@mui/material';



const PrivetRout = ({children}) => {
    const {user, loadding }= useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loadding){
        return (
            <div className='flex justify-center mt-80 min-h-screen'>
            <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        </div>
          );
    }
  
    if(user){
        return children
     }
     else{
         return <Navigate state={location.pathname} to="/login"></Navigate>
     }

};

export default PrivetRout;