import { useLoaderData } from "react-router-dom";
import AutoPlay from "./Slider";
import SpotCard from "./SpotCard";




const Home = () => {
   
    const spotdata = useLoaderData();
    return (
        <div className=''>
        <AutoPlay></AutoPlay>
        <div className="">
        <h1 className="text-6xl text-center my-5 mt-10">Like Your Place</h1>
        <hr className="w-2/3 mx-auto border-gray-600" />
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-4">
        {
                spotdata.map(spot=><SpotCard key={spot._id} spotData={spot}></SpotCard>)
            }
        </div>

        </div>

    );
};

export default Home;