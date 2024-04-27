
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPhoneAlt  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
                <footer className="footer  py-40 px-4 text-xl" data-aos="fade-up"
     data-aos-duration="3000">
          <div className=" lg:mx-auto  justify-between mb-20">
          <div className="grid grid-cols-2 gap-2 lg:flex justify-between lg:w-[1280px]">
          <div>
          <h1 className="text-4xl font-bold">TOUR OF <br /> <span className="text-orange-400">SOUTH ASIA</span></h1>
          </div>

          <div>
            <h1 className="font-bold text-xl">Address</h1>
            <p className="flex gap-2 items-center"><FaLocationDot /> 5508 Satkhira, Kulna, Bangladesh</p>
          </div>

          <div>
            <h1 className="font-bold text-xl">Homes</h1>
            <p>Reatured Listings</p>
            <p>New Construction</p>
          </div>

          <div>
            <h1 className="font-bold text-xl">Development</h1>
            <p>Home Building</p>
            <p>House Plans</p>
          </div>

          <div>
            <h1 className="font-bold text-xl">SELF More..</h1>
            <p><a href="">About</a></p>
            <p><a href="">History</a></p>
            <p><a href="">Contact Us</a></p>
          </div>
          </div>

          <div className="w-96 lg:w-[1280px] mx-auto col-span-">
          <div className="text-center lg:text-left flex flex-col">
            <h1 className="font-bold text-xl">Contact</h1>
            <p className="flex gap-2 items-center"><FaPhoneAlt /> 01908-945145</p>
            <p className="flex gap-2 items-center"><MdEmail /> freelancersayed45@gmail.com</p>
            <div className="flex gap-4 mt-2  w-full justify-center lg:justify-start">
              <a href="facebook.com"><FaFacebook className="text-2xl" /></a>
              <a href="facbook.com"><FaXTwitter className="text-2xl" /></a>
              <a href="facbook.com"><FaInstagramSquare  className="text-2xl"/></a>
              <a href="facbook.com"><FaLinkedin   className="text-2xl"/></a>
            </div>
          </div>
          </div>
          </div>
      </footer>
        </div>
    );
};

export default Footer;