import React, { useContext } from 'react';
import { AuthContext } from './Authprovider/Authprovider';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const AddSpot = () => {

    const {user} = useContext(AuthContext)


    const handleAdd = e =>{
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
        const email = form.email.value;
        const userName = form.userName.value;
        const description = form.descreption.value;

        const newData = {user, photo, spotName, countryName, location, cost, seasonality, time, perYear, email, userName, description};

        console.log(newData);

        fetch('http://localhost:5000/addspot',{
            method: 'POST',
            headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newData)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Turists spot addeded successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    return (
    <div className='bg-black'>
<div className='max-w-[1280px] mx-auto content-center min-h-scree' >
<form onSubmit={handleAdd} className='lg:w-4/5 mx-auto bg-black shadow-sm shadow-gray-700 px-6  py-10 mb-10' action="">

<h1 className='text-5xl text-center text-white font-bold mb-4'>Add Your Tourists Spot</h1>
<hr className=' border-gray-500 border-2' />

<div className='justify-center grid grid-cols-2 gap-4 mt-32'>
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]' type="url" name="url" placeholder='Photo URL' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="spotName" placeholder='Spot Name' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="countryName" placeholder='Country Name' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="location" placeholder='Location' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="cost" placeholder='Average Cost' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="seasonality" placeholder='Seasonality' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="time" placeholder='Trabel Time' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="perYear" placeholder='Total Visitors Per Year' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="email" name="email" placeholder='Email' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700]'   type="text" name="userName" placeholder='User Name' id="" />
<input className='w-full outline-none py-2 px-2 border-b border-gray-600 bg-black text-[#FFC700] col-span-2'  type="text" name="descreption" placeholder='Short Description' id="" />
<input className='w-full py-1 rounded px-2 cursor-pointer bg-orange-400 text-white font-bold col-span-2 mt-8'  type="submit" name="submit" value="Add Spot" placeholder='' id="" />
</div>
              
</form>
</div>


        </div>
    );
};

export default AddSpot;