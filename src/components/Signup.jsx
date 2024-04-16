import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Signup = () => {
     const navigate=useNavigate()
  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [error, setError] = useState("");
  const handleOnsubmission = () => {
    if (!value.name || !value.email || !value.pass) {
      setError("Please fill all fields!");
      return;
    } else {
      setError("");
    }
    console.log(value);
//     step-1 
    createUserWithEmailAndPassword(auth,value.email,value.pass).then(async(res)=>{
     // step-2 
     const user = res.user;
      await updateProfile(user,{displayName:value.name})
     //  step-3 
     navigate("/home")
     console.log(user)
    }).catch((err)=>setError(err.message))
  };
  return (
    <>
      <div className=" flex justify-center mediasign   flex-col first signpage">
        <div className="w-[60%] mt-5  bg-white  flex justify-center">
          <Link to="/" className=" bg-white  text-5xl nav">
            dribbble
          </Link>
        </div>
        <b className=" text-center font-medium text-red-700 text-xl bg-white">
          {error}
        </b>
        <div className="w-[70%]  flex justify-start bg-white">
          <label className=" bg-white label text-xl font-semibold"> Name</label>
        </div>
        <div className=" w-[70%] flex justify-start border  flex-col ">
          <input
            type="text"
            onChange={(e) => {
              setValue((prev) => ({ ...prev, name: e.target.value }));
            }}
            placeholder="Enter Your name"
            className="w-full  bg-white p-1 "
          />
        </div>
        <br />
        <div className="w-[70%]  flex justify-start bg-white">
          <label className=" bg-white label text-xl font-semibold">
            {" "}
            Email
          </label>
        </div>
        <div className=" w-[70%] flex justify-start border ">
          <input
            type="text"
            onChange={(e) => {
              setValue((prev) => ({ ...prev, email: e.target.value }));
            }}
            placeholder="Enter Your @gmail"
            className="w-full  bg-white p-1 "
          />
        </div>
        <br />
        <div className="w-[70%]  flex justify-start bg-white">
          <label className=" bg-white label text-xl font-semibold">
            {" "}
            Password
          </label>
        </div>
        <div className=" w-[70%] flex justify-start border ">
          <input
            type="text"
            onChange={(e) => {
              setValue((prev) => ({ ...prev, pass: e.target.value }));
            }}
            placeholder="6+ character"
            className="w-full  bg-white p-1 "
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleOnsubmission}
        >
          SignUp
        </button>
        <div className="w-[70%]  bg-white flex justify-center">
          <span className=" bg-white">if u already account? </span>

          <span className=" bg-white  text-black font-bold">
            <Link to="/login" className=" bg-white">
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signup;
