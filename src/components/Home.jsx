/* eslint-disable react/prop-types */

import Footer from "./Footer";
import Navbar from "./Navbar";
// import Navphone from "./Navphone";

// import { Link } from "react-router-dom";
const Home = ({name,setMenuopen, menuOpen} ) => {
  return (
    <>
    <Navbar name={name}  setMenuopen={setMenuopen} menuOpen={menuOpen} />
    
    <div className=" main flex mediahome  flex-col text-center gap-1" >
<div  className="  sm:font-semibold   homeheading h-[100px] w-[100%] pt-[20px] mt-4  bg-white text-5xl  font-bold font-poppins"> What brings you to dribbble ?</div>

<div className="  mediamain  homeheading text-gray-500 text-xl  font-medium flex justify-center text-center  w-full h-[100px] bg-white">
Select the option that describe you. Don&#39;t worry,you can explore other option later.
    </div>


    <div className=" w-[100vw] h-[400px]  mediaposter  mt-3  flex  justify-evenly align-middle  bg-white  ">
      <div className=" w-[200px] h-[300px]  mediaposter justify-end posterhome flex flex-col "> 
      <div className=" w-fit  h-fit  divposter pic1 ">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkDcyP0Pe3UI3hb4lYjkr91M7HcF0e38fhuwRy58D2g&s" alt="poster" className=" pl-1  photo bg-cover bg-white cover " />
      </div>
<div className=" bg-white w-[220px] homeheading h-fit pl-4  text-base mb-1 font-bold text-center" >
I&#39;m  a designer  looking to share my work
</div>
      </div>





      <div className=" w-[200px] h-[300px]  mediaposter justify-end posterhome flex flex-col "> 
      <div className=" w-fit  h-fit  divposter">
<img src="https://cdn-icons-png.freepik.com/512/3159/3159310.png" alt="poster" className="  photo bg-cover cover" />
      </div>
<div className=" bg-white w-[220px] homeheading h-fit pl-4  text-base mb-1 font-bold text-center" >
I&#39;m  looking to hire designer
</div>
      </div>

      <div className=" w-[200px] h-[300px]  mediaposter justify-end posterhome flex flex-col "> 
      <div className=" w-fit  h-fit divposter ">
<img src="https://www.pngfind.com/pngs/b/110-1104452_web-design-icon-png-account-setting-icon-transparent.png" alt="poster" className="  photo bg-cover cover" />
      </div>
<div className=" bg-white w-[220px] homeheading h-fit pl-4  text-base mb-1 font-bold text-center" >
I&#39;m  looking for design inspiration
</div>
      </div>

    </div>




    
    </div>
   <Footer/>
    </>
  )
};

export default Home;
