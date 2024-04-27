import React from 'react';
import { Link } from 'react-router-dom';

const SpotCard = ({spotData}) => {

    const {_id, user, photo, spotName, countryName, location, cost, seasonality, time, perYear, email, userName, description} = spotData;


    return (
        <div className=''>
         <div className=' bg-black mt-5 '>
         <div><img className='h-52 w-full' src={photo} alt="" /></div>
           <div className='p-5'>
            <h1 className='text-4xl'>{spotName}</h1>
            <p>{countryName}</p>
            <p>{location}</p>
            <p>{seasonality}</p>
            <p>{time}</p>
            <p>{user.email}</p>

           
           </div>
           <div className='flex justify-end'>
            <Link to={`/details/${_id}`} className='py-1 px-5 text-orange-500'>Details</Link>
           </div>
           
         </div>
         
        </div>
    );
};

export default SpotCard;