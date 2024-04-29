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
      <div className="-mt-[390px] absolute justify-center flex items-center  w-full h-96 bg-[#00000050] ">
        <h1 className="text-5xl text-center">slaiders</h1>
        <div className='App'>
      <Typewriter  />
    </div>
      </div>
    </div>
  );
}

export default AutoPlay;
