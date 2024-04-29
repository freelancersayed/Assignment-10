import React from 'react';
import Navebar from './Navebar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
        
            <Navebar ></Navebar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;