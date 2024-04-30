import React, {  useState } from 'react';
import { Link, NavLink, useLoaderData,  } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";
import 'animate.css';
import { Helmet } from 'react-helmet';



const Category = () => {

  const loadCategory = useLoaderData()
  console.log(loadCategory);
  // const navigate = useNavigate();

  // const [allItem, setAllItem] = useState(loadCategory)
  const [item, setItem] = useState(loadCategory);

const handleAll = ()=>{
  setItem(loadCategory)
}
  const handleCategory=(name)=>{
    const filteredData = loadCategory.filter((item) => item.countryName === name);
    setItem(filteredData)
    console.log(filteredData);
    
  }

  // const handleNaviget=()=>{
  //   navigate(`/naviget/${'Bangladesh'}`)
  // }

console.log(item);


  // Function to sort items by name
 
    return (
        <div className='grid grid-cols-5 min-h-screen gap-4 category-card scrol'>

<Helmet>
        <title>Tour Asia | All Tourist</title>
        </Helmet>
       
  <div className='text-left gap-6 '>
  <div className='absolute min-h-screen -ml-96 py-10  shadow-2xl sidbar translate-x-[230px] -mt-1 bg- w-[390px] pl-44'>
    <div className=' p-2'>
      <h1 className='text-2xl font-bold mb-5'></h1>
      <h1 className="lg:text-2xl">
        {' '}
        {/* Using the Typewriter component */}
        <span style={{ color: '', fontWeight: 'bold',  }}>
          <Typewriter
            words={['Select Category!',]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <hr className='border-gray-500' />
    </div>
     <div className='flex flex-col gap-2 mt-5'>
     <h1 onClick={handleAll} className='cursor-pointer px-2 py- shadow-2xl font-bold hover:bg-gray-500 hover:text-black'>All Category</h1>
     <h1 onClick={()=>handleCategory('Bangladesh')} className='cursor-pointer px-2 py- shadow-2xl font-bold hover:bg-gray-500 hover:text-black'>Bangladesh</h1>
     <h1 onClick={()=>handleCategory('japan')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-500 font-bold hover:text-black'>Japn</h1>
     <h1 onClick={()=>handleCategory('inia')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-500 font-bold hover:text-black'>India</h1>
     <h1 onClick={()=>handleCategory('pakisthan')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-500 font-bold hover:text-black'>Pakisthan</h1>
     <h1 onClick={()=>handleCategory('indonasia')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-500 font-bold hover:text-black'>Indonasia</h1>
     <h1 onClick={()=>handleCategory('dubai')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-500 font-bold hover:text-black'>Dubai</h1>
     <h1 onClick={()=>handleCategory('saudi')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-500 font-bold hover:text-black'>Saudi</h1>
     <h1 onClick={()=>handleCategory('iran')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-500 font-bold hover:text-black'>Iran</h1>
     </div>
       </div>
  </div>
   
      <div className='col-span-4 scorlcard mt-5 shadow-2xl'>
       <div>

       </div>
     <div className='grid grid-cols-3 gap-4 '>
     {
          item.map(items=><>
        <div className=' shadow-lg' data-aos="flip-left">
        <div><img className='h-52 w-full' src={items.photo} alt="" /></div>
           <div className='p-5'>
            <Fade><h1 className='text-4xl'>{items.spotName}</h1></Fade>
            <p>{items.countryName}</p>
            <p>{items.location}</p>
            <p>{items.seasonality}</p>
            <p>{items.time}</p>
            <p>{items.userEmail}</p>
           
           </div>
           <div className='flex justify-between px-5 items-center'>
           <p className='text-sm'>Created by : {items.userName}</p>
            <Link to={`/details/${items._id}`} className='py-1  text-orange-500'>Details</Link>
           </div>
        </div>
          </>)
        }
     </div>
   
      </div>
        </div>

    );
};

export default Category;