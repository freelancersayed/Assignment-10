
import { Link, useLoaderData } from "react-router-dom";
import AutoPlay from "./Slider";
import SpotCard from "./SpotCard";
import { useEffect, useState } from "react";




const Home = () => {
   
    const spotdata = useLoaderData();
    // console.log(spotdata);
    const newSpotData = spotdata.slice(0,6);

    // const [spot, setSpotdata] = useState([]);
    const [con, setCon]= useState(newSpotData);
    


    const handleAll = ()=>{
        setCon(newSpotData)
    }
    const handleFilter = ()=>{
        // setCon([])
        const filteredData = newSpotData.filter((item) => item.countryName === "Bangladesh");
        setCon(filteredData)
    }
    
    const handleJapn = ()=>{
        // setCon([])
        const filteredData = newSpotData.filter((item) => item.countryName === "japan");
        setCon(filteredData)
    }

  


        // useEffect(()=>{
        //     fetch('http://localhost:5000/addspot')
        //     .then(res=> res.json())
        //     .then(data=> setSpotdata(data))
        // },[])  
        // console.log(spot);
 
    console.log(con.length);
    return (
        <div className=''>
        <AutoPlay></AutoPlay>
        <div className="">
        <h1 className="text-6xl text-center my-5 mt-10">Like Your Place</h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
        <div className="max-w-[1280px] mx-auto">

  
    <div className="dropdown mt-20 ">
  <div tabIndex={0} role="button" className="border px-5 py-1 rounded-r m-1">Select Country</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded w-52">
    <li onClick={handleAll}><a>All</a></li>
    <li onClick={handleFilter}><a>Banglades</a></li>
    <li  onClick={handleJapn}><a>japn</a></li>
  </ul>
</div>
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