/* eslint-disable react/prop-types */
import "./home.css"
import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import Navphone from "./Navphone";
// import { useState } from "react";
 const Navbar = ({name}) => {


   return (
     <>
     <div className="  navbarrr w-[1390px]  h-[100px]  flex justify-between    bg-white">
      <div className=" text-center flex     nav1  w-[60%] gap-6 ">
        <span className="  bg-white text-3xl font-bold  ml-4 logoname">dribbble</span>
        
        <span className=" mediaspan bg-white   font-semibold text-sm text-cyan-700 hov">
          Inspiration
        </span>
        <span className=" mediaspan bg-white   font-semibold text-sm text-cyan-700 hov">
          Find Work
        </span>
        <span className=" mediaspan bg-white   font-semibold text-sm text-cyan-700 hov">
          Learn Design
        </span>
        <span className=" mediaspan bg-white   font-semibold text-sm text-cyan-700 hov">
          Go Pro
        </span>
        <span className=" mediaspan bg-white   font-semibold text-sm text-cyan-700 hov">
          Hire Designers
        </span>
      </div>
      
      <div className="w-[40%] nav2  sm:visible bg-white flex justify-center items-center">
      {/* <button className="  lg:hidden menubar">

<GiHamburgerMenu   className=" text-3xl bg-white  cursor-pointer"
onClick={()=>setMenuopen(!menuOpen)}
/>
</button> */}
{/* <Navphone menuOpen={menuOpen} className=" bg-black sm:w-full h-[200px] sm:visible lg:hidden"/> */}
        <span className=" text-sm bg-gray-300 border h-[40px] flex search border-none outline-none nav3">
          <FaSearch className=" bg-gray-300 border-none outline-none icon" />
        </span>
       
        <input
          type="text"
          className=" nav3 input border-none outline-none w-[100px] h-[40px]  p-2 bg-gray-300 pl-3 text-gray-400"
          placeholder="Search"
        />
        <span className="flex justify-center  nav3 ml-5 bg-white">
        <FaBagShopping  className=" bg-white text-xl"/>
        </span>

        <div className=" w-[200px] h-fit flex justify-center   gap-1 right">

<span className="  text-xl font-bold bg-white"> <IoPersonCircle className=" bg-white" /></span>
<span className=" final text-sm font-bold bg-white"> {name}</span>
<span className=" nav3 w-[70px] h-[30px]  bg-rose-600 rounded-md flex justify-center ml-3 upload">
  <button className=" nav3 bg-rose-600   font-light  text-sm text-white  btnupload" >Upload</button>
</span>
<span  className=" final  sm:visible w-50px flex justify-center text-center lastdiv bg-white">
  <Link to="/" className=" sm:visible bg-white logout"> Logout</Link>
</span>


        </div>
      </div>
    </div>
     
     </>
   )
 }
 
 export default Navbar