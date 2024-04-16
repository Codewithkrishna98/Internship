 import { Link,useNavigate } from "react-router-dom"
 import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
 const Login = () => {
  const navigate=useNavigate()
  const [value, setValue] = useState({
    
    email: "",
    pass: "",
  });
  const [error, setError] = useState("");
  const handleOnsubmission = () => {
    if ( !value.email || !value.pass) {
      setError("Please fill all fields!");
      return;
    } else {
      setError("");
    }
    console.log(value);
//     step-1 
    signInWithEmailAndPassword(auth,value.email,value.pass).then(()=>{
     // step-2 
     
      
     //  step-3 
     navigate("/home")
     
    }).catch((err)=>setError(err.message))
  };
   return (
    <>
    
    <div className=" flex justify-center  flex-col first medialogin signpage">
    <div className="w-[60%] mt-5  bg-white  flex justify-center">
          <Link to="/" className=" bg-white  text-5xl nav">
            dribbble
          </Link>
          <b className=" text-center font-medium text-red-700 text-xl bg-white">
          {error}
        </b>
        </div>
      
     
     <div className="w-[70%]  flex justify-start bg-white">

     <label className=" bg-white label text-xl font-semibold" > Email</label>
      </div>
     <div className=" w-[70%] flex justify-start border "> 
<input type="text"  placeholder="Enter Your @gmail" className="w-full  bg-white p-1 "
onChange={(e) => {
  setValue((prev) => ({ ...prev, email: e.target.value }));
}}
/>
     </div>
     <br />
     <div className="w-[70%]  flex justify-start bg-white">

<label className=" bg-white label text-xl font-semibold" > Password</label>
 </div>
<div className=" w-[70%] flex justify-start border "> 
<input type="text"  placeholder="6+ character" className="w-full  bg-white p-1 "
onChange={(e) => {
  setValue((prev) => ({ ...prev, pass: e.target.value }));
}}
/>
</div>


<button type="button" className="btn btn-primary" onClick={handleOnsubmission}>Login</button>
<div className="w-[70%]  medialoginspan bg-white flex justify-center">
          <span className=" bg-white">if u don&#39;t  have account? </span>

          <span className=" bg-white  text-black font-bold">
            <Link to="/signup" className=" bg-white">
              Signup
            </Link>
          </span>
        </div>

     </div>
     
   </>
   )
 }
 
 export default Login