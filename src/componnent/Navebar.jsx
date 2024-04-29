
import { Link, NavLink } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { MdHelpOutline, MdFeedback, MdOutlineSupervisorAccount } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './Authprovider/Authprovider';


const Navebar = () => {

  const { user, logOut} = useContext(AuthContext);

  const [theme, setTheme] = useState('light');

  useEffect(()=>{
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme', localTheme)
  },[theme])


  const handleToggle = e =>{
    if(e.target.checked){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }

  console.log(theme);

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
       <div className='active'>
   <div className="navbar bg[#000000ad] ">
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
  <div className="navbar-center  hidden lg:flex">
    <ul className="gap-8 menu-horizontal px-1">
     {NavLinks}
    </ul>
  </div>


  <div className="navbar-end">
    {
      !user?<Link to="/login">  <BiUser  className='text-2xl' /></Link>:
       <>
      
  {/* theme ====================================================================== */}
  <div className='mr-10'>
  <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleToggle} type="checkbox" className="theme-controller"/>
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  </div>

        <div className="dropdown dropdown-hover dropdown-end text-white ">
          
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