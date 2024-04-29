import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'
import { BiUser } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash, FaGithub, FaFacebook} from "react-icons/fa";
import { AuthContext } from './Authprovider/Authprovider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const Logins = () => {

    const [showPass, setShowPass]= useState(false);
    const [error, setError] = useState()

    const {singIn, signInWithGoogle, handleGithubeSign, loadding} = useContext(AuthContext);


    if(loadding){
        return (
            <div className='flex justify-center mt-80 min-h-screen'>
            <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        </div>
          );
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);
        setError([])

        singIn(email, password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })
       
      };
    
      const handleGoogleSign=()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
      }

      const handleGiteSign=()=>{
        handleGithubeSign()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
      }



    return (
        <div className='min-h-screen'>

            <div>

        <div className='bg-black w-80 mx-auto mt-28'>
            <div className='flex text-center login bg-[#161616a8] mb-6'>
                <NavLink to="/login" className=' flex-1 p-2 px-4 '>Login</NavLink>
                <NavLink to="/register" className='register flex-1 p-2 px-4 '>Register</NavLink>
            </div>
        <form onSubmit={handleSignIn} className='p-6 text-left space-y-2'>
      <label className='flex items-center'>
      <MdOutlineMailOutline  className='font-bold absolute' />   <input className='w-full pl-6 py-2 border-b-2 border-gray-700 outline-none bg-black'  type="text" name="email" placeholder='Email' id="" />
      </label>
      <label className='flex items-center '>
      <RiLockPasswordLine className='font-bold absolute' />   <input className='w-full pl-6 py-2 border-b-2 border-gray-700 outline-none bg-black'  type={showPass ? "text" : "password"} name="password" placeholder='Password' id="" />
      <span className='-ml-4' onClick={()=>setShowPass(!showPass)}>
      {
        showPass? <FaEye/>:<FaEyeSlash/>
      }
       </span>
      </label>
    <label>
        <input className='mt-4' type="checkbox" name="" id="" /> <span>Remember me</span>
    </label>
    <label>
       <p className='text-gray-500 mt-6'><a href="">Lost Your password?</a></p>
    </label>
    <label className=''>
        <input className='bg-gray-900 w-full p-2 my-4 font-bold' type="submit" value='login' name="" id="" />
    </label>

    <div className='flex gap-4'>
        <button onClick={handleGoogleSign}>Google</button>
        <button onClick={handleGiteSign}>Github</button>
    </div>
        </form>
        <p className="text-center mb-2 text-red-500 font-bold">{error}</p>

        </div>

            </div>
            
        </div>
    );
};

export default Logins;