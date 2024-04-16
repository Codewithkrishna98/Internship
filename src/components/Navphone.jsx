/* eslint-disable react/prop-types */
 
 
 const Navphone = ({menuOpen}) => {
   return (
     <div className={`navPhone ${menuOpen ? "navPhonecomes":""}`}>
      <div className="w-[100%]  h-fit flex justify-start flex-col">

      <span className="   bg-black font-semibold text-sm text-white ">
          Inspiration
        </span>
        <span className="   bg-black font-semibold text-sm text-white ">
          Find Work
        </span>
        <span className="   bg-black  font-semibold text-sm text-white ">
          Learn Design
        </span>
        <span className="  bg-black  font-semibold text-sm text-white ">
          Go Pro
        </span>
        <span className="  bg-black  font-semibold text-sm text-white">
          Hire Designers
        </span>
      </div>
     </div>
   )
 }
 
 export default Navphone
