
import { Link, NavLink } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { MdHelpOutline, MdFeedback, MdOutlineSupervisorAccount } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

import { useContext } from 'react';
import { AuthContext } from './Authprovider/Authprovider';


const Navebar = () => {

  const { user, logOut} = useContext(AuthContext);


  const handleSignOut = () => {
    logOut()
    .then(result=>{
      console.log('logOute', result.user);
    })
    .catch(error=>{
      console.log('not logoute', error);
    });
  };



    const NavLinks = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/spot">All Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to="/addspot">Add Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to="/mylist">My List</NavLink>
          </li>
          <li>
            <NavLink to="/feedback">Touris Feedback</NavLink>
          </li>
          <li>
            <NavLink to="/category">Category</NavLink>
          </li>
    
        
        </>
        )


    return (
       <div>
   <div className="navbar bg-[#000000ad] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {NavLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">TOUR OF SOUTH ASIA </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {NavLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      !user?<Link to="/login">  <BiUser  className='text-2xl' /></Link>:
       <>
      
       
        <div className="dropdown dropdown-hover dropdown-end ">
                  <div tabIndex={0} role="button" className="">
                    <img
                      className="rounded-full w-10 h-10  border-gray-400 relative"
                      src={user.photoURL}
                      alt=""
                    />
                    <FaAngleDown className="flex -mt-3 ml-7 bg-black rounded-full absolute" />{" "}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-black -ml-[20px] rounde w-[285px] py-4 flex border-b border-orange-00"
                  >
                    <h1 className=" shadow-white mb-4 ">
                      <Link
                        to="/profile"
                        className="text-xl font-bold w-full flex items-center"
                      >
                        {" "}
                        <img
                          className="rounded-full mr-2 w-10 h-10 border- border-gray-400 items-center"
                          src={user.photoURL}
                          alt=""
                        />{" "}
                        {user.displayName} <FaAngleDown />
                      </Link>
                    </h1>
                    <hr className=" border-gray-700" />

                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link to="/login">
                        <p className="flex gap-2">
                          {" "}
                          <MdOutlineSupervisorAccount className="text-2xl" />
                          Add account
                        </p>
                      </Link>{" "}
                    </li>
                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link to="/update">
                        <p className="flex gap-2">
                          {" "}
                          <RxUpdate className="text-2xl" />
                          Update Profile
                        </p>
                      </Link>{" "}
                    </li>

                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link to="/setting">
                        <p className="flex gap-2">
                          {" "}
                          <IoSettingsOutline className="text-2xl" />
                          Settings & privacy
                        </p>
                      </Link>{" "}
                    </li>
                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link className="flex" to="*">
                      <MdHelpOutline className="text-2xl" />
                        <p>
                         
                          Help & support{" "}
                        </p>
                      </Link>
                    </li>

                    <li className="text-left mt-2 text-center text-xl  ">
                      <Link className="flex" to="*">
                        <MdFeedback className="text-2xl " />
                        <p> Give Feedback </p>
                      </Link>{" "}
                    </li>
                    <li className="text-left mt-2 text-center text-xl  ">
                    <Link className='flex'>
                    <IoLogOutOutline  className="text-2xl text-white  " />
                    <button onClick={handleSignOut}>LogOute</button>
                    </Link>
                    </li>

                    <p className="my-4">
                      <a className="hover:underline" href="#">
                        Privacy
                      </a>{" "}
                      ·{" "}
                      <a className="hover:underline" href="#">
                        Terms
                      </a>{" "}
                      ·{" "}
                      <a className="hover:underline" href="#">
                        Advertising
                      </a>{" "}
                      ·{" "}
                      <a className="hover:underline" href="#">
                        Ad Choices
                      </a>{" "}
                      ·{" "}
                      <a className="hover:underline" href="#">
                        Cookies
                      </a>{" "}
                      · ·{" "}
                      <a className="hover:underline" href="#">
                        Sayed © 2024
                      </a>
                    </p>
                  </ul>
                </div>
       </>
    }


  </div>
</div>
       </div>
            
    );
};

export default Navebar;