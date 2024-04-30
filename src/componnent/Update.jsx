import React, { useContext } from 'react';
import { AuthContext } from './Authprovider/Authprovider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typewriter } from 'react-simple-typewriter';


const Update = () => {
    
    const {user, loadding} = useContext(AuthContext)

    const updateSpot = useLoaderData();
console.log(updateSpot);  

    const {_id, userEmail, photo, spotName, countryName, location, cost, seasonality, time, perYear, email, userName, description}= updateSpot;



    // if(loadding){
    //     return (
    //         <div className='flex justify-center items-center'>
    //             <Box sx={{ display: 'flex' }}>
    //           <CircularProgress />
    //         </Box>
    //         </div>
    //       );
    // }



    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const photo = form.url.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const perYear = form.perYear.value;
        const userEmail = form.email.value;
        const userName = form.userName.value;
        const description = form.descreption.value;
        // const email = user.email;
        const updateDate = {userEmail, photo, spotName, countryName, location, cost, seasonality, time, perYear, email, userName, description};

        console.log(updateDate);


        
        fetch(`http://localhost:5000/addspot/${_id}`,{
            method: 'PUT',
            headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateDate)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Turists spot Update successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    return (
    <div className='bg-black'>
        
<div className='max-w-[1280px] mx-auto content-center min-h-scree' >
<form onSubmit={handleUpdate} className='lg:w-4/5 mx-auto bg-black shadow-sm shadow-gray-700 px-6  py-10 mb-10' action="">

{/* <h1 className='text-5xl text-center text-white font-bold mb-4'>Update Your Tourists Spot</h1> */}
<h1 className='text-center mb-5'>
        {' '}
        {/* Using the Typewriter component */}
        <span style={{ color: 'rgb(255, 136, 0)', fontWeight: 'bold', }} className='text-2xl lg:text-6xl'>
          <Typewriter
            words={['Update Your Tourists Spot!', 'Update Your Tourists Spot!', 'Update Your Tourists Spot!']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
<hr className=' border-gray-500 border-2' />

<div className='justify-center grid grid-cols-2 gap-4 mt-32'>
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="url"   defaultValue={photo}       name="url"          placeholder='Photo URL' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={spotName}     name="spotName"    placeholder='Spot Name' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={countryName} name="countryName"  placeholder='Country Name' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={location}    name="location"     placeholder='Location' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={cost}        name="cost"         placeholder='Average Cost' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={seasonality} name="seasonality"  placeholder='Seasonality' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={time}        name="time"         placeholder='Trabel Time' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={perYear}     name="perYear"      placeholder='Total Visitors Per Year' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="email" defaultValue={userEmail}   name="email"        placeholder='Email' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text"  defaultValue={userName}    name="userName"     placeholder='User Name' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700] col-span-2' type="text"   defaultValue={description}  name="descreption" placeholder='Short Description' id="" />
<input className='w-full py-1 rounded px-2 cursor-pointer bg-[#f8731a] text-white font-bold col-span-2 mt-8'  type="submit" name="submit" value="Add Spot" placeholder='' id="" />
</div>
              
</form>
</div>


        </div>
    );
};

export default Update;