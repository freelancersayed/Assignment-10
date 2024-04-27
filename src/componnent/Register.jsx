import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { BiUser } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaEye, FaEyeSlash, FaGithub, FaFacebook } from "react-icons/fa";
import { AuthContext } from "./Authprovider/Authprovider";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorUser, setErrorUser] = useState("");
  const [chacked, setChacked] = useState("");

const {createUser, user} = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("url");
    const password = form.get("password");
    const Accept = e.target.terms.checked;
    console.log(name, email, photo, password);

    if (password.length < 6) {
      setErrorUser("password must be 6 caracter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorUser("password must be a Uppercass");
      return;
    } else if (!Accept) {
      setChacked("pleace chacked in");
      return;
    }
    setErrorUser("");
    setChacked("");

    createUser(email, password,)
    .then((result)=>{
      console.log(result.user);
      alert('singin successfully')
    })
    .catch((error)=>{
      console.log(error);
    })
  };

  return (
    <div className="min-h-screen w-full">
      <div>
        <div className="bg-black w-80 mx-auto mt-28 shadow-gray-800 shadow">
          <div className="flex text-center login bg-[#161616a8] mb-6">
            <NavLink to="/login" className=" flex-1 p-2 px-4 ">
              Login
            </NavLink>
            <NavLink to="/register" className="register flex-1 p-2 px-4 ">
              Register
            </NavLink>
          </div>
          <form onSubmit={handleRegister} className="p-6 text-left space-y-2">
            <label className="flex items-center">
              <MdOutlineDriveFileRenameOutline className="font-bold absolute" />{" "}
              <input
                className="w-full pl-6 py-2 border-b-2 border-gray-700 outline-none bg-black"
                type="text"
                name="name"
                placeholder="Name"
                id=""
              />
            </label>

            <label className="flex items-center">
              <MdOutlineMailOutline className="font-bold absolute" />{" "}
              <input
                className="w-full pl-6 py-2 border-b-2 border-gray-700 outline-none bg-black"
                type="text"
                name="email"
                placeholder="Email"
                required
                id=""
              />
            </label>

            <label className="flex items-center">
              <FaLink className="font-bold absolute" />{" "}
              <input
                className="w-full pl-6 py-2 border-b-2 border-gray-700 outline-none bg-black"
                type="url"
                name="url"
                placeholder="Photo Url"
                id=""
              />
            </label>

            <label className="flex  items-center">
              <RiLockPasswordLine className="font-bold absolute" />{" "}
              <input
                className="w-full pl-6 py-2 border-b-2  border-gray-700 outline-none bg-black"
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                id=""
              />
              <span className="-ml-4" onClick={() => setShowPass(!showPass)}>
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </label>
            <p className="text-red-500">{errorUser}</p>

            <p className="text-gray-600">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a className="underline" href="">
                privacy policy.
              </a>
            </p>
            <label>
              <input className="mt-4" type="checkbox" name="terms" htmlFor="terms" id="" />{" "}
              <a>Therms & Condition</a>
              <p className="text-red-500  mb-1 underline">{chacked}</p>
            </label>

            <label className="">
              <input
                className="bg-gray-900 w-full p-2 my-4 font-bold"
                type="submit"
                value="Sign-up"
                name=""
                id=""
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
