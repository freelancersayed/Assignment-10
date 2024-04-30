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
          <img className="lg:h-[450px] h-[300px] w-full  border-x-2 border-orange-400" src="/slider/1.jpg" alt="" />
        </div>
        <div className="">
        <img className="lg:h-[450px] h-[300px] w-full border-r-2 border-orange-400" src="/slider/2.jpg" alt="" />
        </div>
        <div>
        <img className="lg:h-[450px] h-[300px] w-full border-r-2 border-orange-400" src="/slider/sy3.jpg" alt="" />
        </div>
        <div>
        <img className="lg:h-[450px] h-[300px] w-full border-r-2 border-orange-400" src="/slider/sat4.jpg" alt="" />
        </div>
        <div>
        <img className="lg:h-[450px] h-[300px] w-full border-r-2 border-orange-400" src="/slider/sun5.jpg" alt="" />
        </div>
        <div>
        <img className="lg:h-[450px] h-[300px] w-full border-r-2 border-orange-400" src="/slider/cox6.jpg" alt="" />
        </div>
      </Slider>
      <div className="flex flex-col">
      <div className="lg:-mt-[456px] -mt-[306px]  absolute justify-center flex flex-col items-center  w-full h-[300px] lg:h-[450px] bg-[#00000070] items-center ">
       <div className=" lg:flex items-center gap-2">
       <h1 className="lg:text-5xl text-3xl text-center font-bold text-white">TOUR OF ASIA ||</h1>
     
     <h1 className="text-3xl lg:text-7xl">
        {' '}
        {/* Using the Typewriter component */}
        <span style={{ color: 'rgb(255, 136, 0)', fontWeight: 'bold',  }}>
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

</form>
      </div>
    </div>
  );
}

export default AutoPlay;
