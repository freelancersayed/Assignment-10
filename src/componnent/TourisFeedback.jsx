import React, { useContext, useState } from 'react';
import { AuthContext } from './Authprovider/Authprovider';
import { useLoaderData } from 'react-router-dom';
import { FaUserAstronaut } from 'react-icons/fa';
import { SlUser } from 'react-icons/sl';
import { GrUserManager } from 'react-icons/gr';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from 'react-helmet';
// import Swal from 'sweetalert2';

const UserFeedback = () => {

    const feedData = useLoaderData()
    // const {user} = useContext(AuthContext)

    console.log(feedData);
    const [feed, setFeed]= useState([])


  


    const handleFeedback = e =>{
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;

        const newUser = {feedback}

        console.log(newUser);


        fetch('http://localhost:5000/user',{
            method: 'POST',
            headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Feedback Added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div className='min-h-screen max-w-[1280px] mx-auto pt-5'>
           <Helmet>
        <title>Tour Asia | Feedback</title>
        </Helmet>
           <h1 className='text-center'>
        {' '}
        {/* Using the Typewriter component */}
        <span style={{ color: 'orange', fontWeight: 'bold', fontSize: '50px' }}>
          <Typewriter
            words={['Please Give Your Feedback']}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

     <div className=' mb-8 items-center'>

   <form onSubmit={handleFeedback}>
   <label className='flex items-center border border-orange-400 rounded '>
     <input name="feedback"  type="text" placeholder="Type your feedback" className=" py-2 w-full outline-none px-2 rounded " />
     <span className='bg-orange-400 text-white py-2 px-5 mr-0  h-full rounded-r-sm'><input className=' cursor-pointer' type="submit"  id="" /></span>
     </label>
   </form>

        {
            feedData.map(data=> 
               <div className='shadow shadow-gray-600 bg mt-5 flex items-center p-5 gap-10'  data-aos="flip-up">
               <div>
               <GrUserManager className='text-7xl' />
               </div>
                 <div className=' justify-center bg- rounded-lg flex-1'>
                <h1 className='text-3xl text-orange-400'>{data.feedback}</h1>
          
                </div>
               </div>
            )
        }  
     </div>


        </div>
    );
};

export default UserFeedback;