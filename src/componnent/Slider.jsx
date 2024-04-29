import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter'

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container ">
      <Slider {...settings} className="">
        <div className="">
          <img className="h-96 w-full  border-x-2 border-orange-400" src="/slider/1.jpg" alt="" />
        </div>
        <div className="">
        <img className="h-96 w-full border-r-2 border-orange-400" src="/slider/2.jpg" alt="" />
        </div>
        <div>
        <img className="h-96 w-full border-r-2 border-orange-400" src="/slider/sy3.jpg" alt="" />
        </div>
        <div>
        <img className="h-96 w-full border-r-2 border-orange-400" src="/slider/sat4.jpg" alt="" />
        </div>
        <div>
        <img className="h-96 w-full border-r-2 border-orange-400" src="/slider/sun5.jpg" alt="" />
        </div>
        <div>
        <img className="h-96 w-full border-r-2 border-orange-400" src="/slider/cox6.jpg" alt="" />
        </div>
      </Slider>
      <div className="flex flex-col">
      <div className="-mt-[390px] absolute justify-center flex flex-col items-center  w-full h-96 bg-[#00000070] items-center ">
       <div className="flex items-center gap-2">
       <h1 className="text-5xl text-center font-bold text-white">TOUR OF ASIA ||</h1>
     
     <h1>
        {' '}
        {/* Using the Typewriter component */}
        <span style={{ color: 'rgb(255, 136, 0)', fontWeight: 'bold', fontSize: '80px' }}>
          <Typewriter
            words={['Please Visit Your Website!', '& Explore more!', 'The Better Exprience!']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </span>
      </h1>
       </div>
     </div>
     <form action="">

<input type="text" name="" id="" />
</form>
      </div>
    </div>
  );
}

export default AutoPlay;
