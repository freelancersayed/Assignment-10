import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Naviget = () => {
    const loadNaviget = useLoaderData();
    console.log(loadNaviget);



    // const [item, setItem] = useState([]);


  
    //   const filteredData = loadCategory.filter((item) => item.countryName === name);
    //   setItem(filteredData)
    //   console.log(filteredData);
      
    

    return (
        <div>
            <h1 className='text-center'>Naviget</h1>
        </div>
    );
};

export default Naviget;