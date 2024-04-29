import React, {  useState } from 'react';
import { NavLink, useLoaderData,  } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';



const Category = () => {

  const loadCategory = useLoaderData()
  console.log(loadCategory);
  // const navigate = useNavigate();

  const [item, setItem] = useState([]);


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
        <div className='grid grid-cols-5 min-h-screen category-card'>
  <div className='text-left gap-6 side'>
  <div className='absolute min-h-screen -ml-96 py-10   shadow-2xl sidbar  -mt-1 bg- w-[390px] pl-44'>
    <div className=' p-2'>
      <h1 className='text-2xl font-bold mb-5'>Select Category</h1>
      <hr className='border-gray-500' />
    </div>
     <div className='flex flex-col gap-2 mt-5'>
     <NavLink onClick={()=>handleCategory('Bangladesh')} className='cursor-pointer px-2 py- shadow-2xl font-bold hover:bg-gray-400 hover:text-black'>bangladesh</NavLink>
     <NavLink onClick={()=>handleCategory('japan')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-400 font-bold hover:text-black'>japn</NavLink>
     <NavLink onClick={()=>handleCategory('inia')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-400 font-bold hover:text-black'>india</NavLink>
     <NavLink onClick={()=>handleCategory('pakisthan')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-400 font-bold hover:text-black'>pakisthan</NavLink>
     <NavLink onClick={()=>handleCategory('indonasia')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-400 font-bold hover:text-black'>indonasia</NavLink>
     <NavLink onClick={()=>handleCategory('dubai')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-400 font-bold hover:text-black'>dubai</NavLink>
     <NavLink onClick={()=>handleCategory('saudi')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-400 font-bold hover:text-black'>saudi</NavLink>
     <NavLink onClick={()=>handleCategory('iran')} className=' cursor-pointer px-2 py- shadow-2xl hover:bg-gray-400 font-bold hover:text-black'>iran</NavLink>
     </div>
       </div>
  </div>
   
      <div className='col-span-4'>
     <div className='grid grid-cols-3'>
     {
          item.map(items=><>
         <div className='text-center'>
          <img src={items.photo} alt="" />
         <p>{items.countryName}</p>
         </div>
          </>)
        }
     </div>
     <div className='flex justify-center mt-52 -ml-80 mr-32 h-full type '>

     </div>
      </div>
        </div>

    );
};

export default Category;