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
        <div className='max-w-[1280px] mx-auto ' data-aos="fade-left">
           <div className=' bg-black mt-5  gap-2 border-2 border-orange-400 min-h-screen'>
         <div className='flex h-[500px] flex-1 border-2 border-orange-400'><img className=' w-full' src={photo} alt="" /></div>


  <table className="table flex-1 ">
    {/* head */}
    <thead>
      <tr className='text-4xl text-orange-400 font-bold'>
        <th>SPOT NAME</th>
        <th> {spotName}</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>COUNTRY NAME</td>
        <td> {countryName}</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>LOCATION</td>
        <td> {location}</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>SEASONALITY</td>
        <td>{seasonality}</td>
      </tr>
      <tr>
        <td>COST</td>
        <td>{cost}</td>
      </tr>
      <tr>
        <td>DATE</td>
        <td>{time}</td>
      </tr>
      <tr>
        <td>PER YEAR</td>
        <td>{perYear}</td>
      </tr>
      <tr>
        <td>DESCRIPTION</td>
        <td>{description}</td>
      </tr>
      <tr>
        <td>CREATED BY</td>
        <td>{userName}</td>
      </tr>
      
    </tbody>
  </table>
</div>
         
        </div>
    );
};

export default SpotDetails;