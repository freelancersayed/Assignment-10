import { Link, useLoaderData } from "react-router-dom";
import AutoPlay from "./Slider";
import SpotCard from "./SpotCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const spotdata = useLoaderData();
  // console.log(spotdata);
  const newSpotData = spotdata.slice(0, 6);

  // // const [spot, setSpotdata] = useState([]);
  // const [con, setCon]= useState([]);


  return (
    <div className="">
      <Helmet>
        <title>Tour Asia | home</title>
      </Helmet>
      <AutoPlay></AutoPlay>
      <div className="">
        <h1
          className="text-6xl text-center my-5 mt-10 font-bold"
          data-aos="fade-left"
        >
          Like Your Place
        </h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
        <div className="max-w-[1280px] mx-auto">
        </div>
      </div>

        
      <div className="max-w-[1280px] mx-auto flex  justify-end px-2">
        <Link
          to="/addspot"
          className="text-right flex px-2 py-1 rounded bg-orange-500 text-white"
        >
          Add your Spot
        </Link>
      </div>
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-3 px-2 gap-4">
        {newSpotData.map((spot) => (
          <SpotCard key={spot._id} spotData={spot}></SpotCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
