
import { Link, useLoaderData } from "react-router-dom";
import AutoPlay from "./Slider";
import SpotCard from "./SpotCard";
import { useEffect, useState } from "react";




const Home = () => {
   
    const spotdata = useLoaderData();
    // console.log(spotdata);

    // const [spot, setSpotdata] = useState([]);
    const [con, setCon]= useState(spotdata);
    


    const handleFilter = (name)=>{
        setCon([])
       if(name){
        const filtered = con.filter(country =>country?.countryName === name);
         return setCon(filtered);
       }
     
        
       
    }
  


        // useEffect(()=>{
        //     fetch('http://localhost:5000/addspot')
        //     .then(res=> res.json())
        //     .then(data=> setSpotdata(data))
        // },[])  
        // console.log(spot);
 
    console.log(con);
    return (
        <div className=''>
        <AutoPlay></AutoPlay>
        <div className="">
        <h1 className="text-6xl text-center my-5 mt-10">Like Your Place</h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
        <div className="max-w-[1280px] mx-auto">

     <ul>
        <li> <button onClick={()=>handleFilter('Bangladesh')}>Bangladesh</button></li>
        <li></li>
     </ul>

            {/* <button onClick={()=>handleFilter(!'Bangladesh')}>Bangladesh</button> */}
            <button onClick={()=>handleFilter('japan')}>japa</button>
            </div>
        </div>
        <div>
            {
                
            }
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4">
        {
                con.map(spot=><SpotCard key={spot._id} spotData={spot}></SpotCard>)
            }
        </div>

        </div>

    );
};

export default Home;