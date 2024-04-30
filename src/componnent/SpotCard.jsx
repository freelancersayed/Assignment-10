import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const SpotCard = ({spotData}) => {

// console.log(spotData);


    const {_id, userEmail, photo, spotName, countryName, location, cost, seasonality, time, perYear, email, userName, description} = spotData;




    return (
        <div className=''>
         <div className=' bg[#000000ad] shadow-2xl mt-5 ' data-aos="flip-left">
         <div><img className='h-52 w-full' src={photo} alt="" /></div>
           <div className='p-5'>
            <Fade><h1 className='text-4xl'>{spotName}</h1></Fade>
            <p>{countryName}</p>
            <p>{location}</p>
            <p>{seasonality}</p>
            <p>{time}</p>
            <p>{userEmail}</p>
           </div>
           <div className='flex justify-end'>
            <Link to={`/details/${_id}`} className='py-1 px-5 text-orange-500'>Details</Link>
           </div>
           
         </div>
         
        </div>
    );
};

export default SpotCard;