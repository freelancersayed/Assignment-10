import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from './Authprovider/Authprovider';

const SpotDetails = () => {
    const {user}= useContext(AuthContext);

    const details = useLoaderData();
    const {_id} = useParams();
    const detail = details.find((detail)=> detail._id === _id);
    console.log(detail);

    const {photo, spotName, countryName, location, cost, seasonality, time, perYear, email, userName, description} = detail;


    return (
        <div className='max-w-[1280px] mx-auto'>
           <div className=' bg-black mt-5 '>
         <div><img className=' w-full' src={photo} alt="" /></div>
           <div className='p-5'>
            <h1 className='text-4xl'>{spotName}</h1>
            <p>{countryName}</p>
            <p>{location}</p>
            <p>{seasonality}</p>
            <p>{time}</p>

           </div>
           <div className='flex justify-end'>
        
           </div>
           
         </div>
        </div>
    );
};

export default SpotDetails;