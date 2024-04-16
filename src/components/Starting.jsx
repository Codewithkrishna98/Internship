/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import Typewriter from "typewriter-effect"
 import { motion } from "framer-motion"
 const Starting = () => {
   
   return (
    <>
       <div className="w-full  flex justify-center">
<nav className=" text-4xl nav ">
   dribbble
   </nav>
    </div>
  
   <div className="w-full  flex justify-center items-center flex-col">
<div className=" mediastart text-6xl font-bold slogan  w-full  text text-center">
 <Typewriter
 options={{
   strings:[ "Discover the world's top" ,"Designers & Creatives! " ],
   autoStart:true,
   loop:true,

   cursor:"",
   wrapperClassName:"typewritertext"
 }}
 />

</div>
{/* <div className=" mediastart text-6xl font-bold slogan  w-full  text text-center">
 <Typewriter
 options={{
   strings:[ "Designers & Creatives "],
   autoStart:true,
   loop:true,
   delay:100,
   cursor:"",
   wrapperClassName:"typewritertext"
 }}
 />

</div> */}
{/* <div className=" mediastart text-6xl font-bold slogan  w-full  text text-center">Discover the world&#39;s top</div> */}

{/* <div className=" mediastart text-6xl font-bold slogan  w-full text text-center">Designers & Creatives</div> */}
   </div >
   <div className="  flex justify-center media-poster mt-10">
<motion.div
initial={{
   x:"-60%",
   opacity:0,
}}whileInView={{
   x:0,
   opacity:1,
   transition: {
      duration: 1.5,
      type:"spring", 
       delay:0.5,
       bounce:0.3,
       ease:"easeInOut"
       


   }
}}
>

    <img className="  poster" src='https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_960_720.png' alt="poster" />
</motion.div>
   </div>

   <div className="w-full last   gap-3 flex justify-center  text-center   mt-10 ">
      <Link to="./signup" ><button type="button" className="btn btn-primary">Sign Up</button></Link>
      <Link to="./login" > <button type="button" className="btn btn-secondary">Login</button></Link>
 
   
   </div>
   <div className="w-full last  gap-3 sm:gap-0 flex justify-center media-last text-center ">
 
   <span className="  text-xl  line">if u already </span>
   <span className="  text-xl  line  sign">Sign up </span>
   <span className="  text-xl  line   "> ? please login to continue</span>
   {/* <span className="  text-xl     "> ? please login to continue</span> */}
   {/* <span className="  text-xl     "> ? please login to continue</span> */}
    
   </div>
  
   
   </>
   )
 }
 
 export default Starting