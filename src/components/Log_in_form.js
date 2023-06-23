import React, { useState } from 'react'
// import React from 'react';
import { FaEye , FaEyeSlash} from "react-icons/fa";
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
export const Log_in = (props) => {
    const navigator = useNavigate();
    const [input_data,input_data_seter] = useState({pass:"",email:""}) 
    const[hide_pass,toggle_hide]=useState(true);
    function pass_hide(event){
        const pass_id = event.currentTarget.dataset.id_for_hide_show_fn;
        hide_pass?document.getElementById(pass_id).type="text" : document.getElementById(pass_id).type="password";
        toggle_hide(!hide_pass);
    }
    function change_handler(event){
      const id = event.target.id;
      input_data_seter(()=>({
        ...input_data,
        [id]:event.target.value
      }));
    }
    function submit_handler(event){
      event.preventDefault();
      navigator("/dashboard");
      props.set_logged_in(true);
      console.log(input_data)
    }
  return (
    <div className='w-[100vw] '>
    <form onSubmit={submit_handler}  className='w-[50%] pr-[15rem] space-y-6'>
          <div className='flex flex-col'>
            <label htmlFor = "email">Email Address<sup className="text-pink-200">*</sup></label>
              <input required onChange={change_handler} className='bg-richblack-800 rounded-lg p-2' placeholder='Enter Email Address' type="email" id="email"></input>
          </div>
            <div className='flex flex-col relative'>
              <label htmlFor = "create_pass">Password<sup className="text-pink-200">*</sup></label>
              <div className='flex items-center bg-richblack-800 rounded-lg w-[100%] relative'>
                <input required onChange={change_handler} className='p-2 bg-transparent w-[100%] rounded-lg' placeholder='Enter Password' type="password" id="pass"></input><span data-id_for_hide_show_fn="pass" onClick={pass_hide} className='cursor-pointer absolute right-3'>{hide_pass?<FaEyeSlash/>:<FaEye/>}</span></div>
              <div className='text-xs text-right text-blue-100 pt-1'>Forgot Password</div>
            </div>
          <button className='w-[100%] p-2 bg-yellow-50 rounded-lg text-black'>Sign In</button>
          <div className='w-[100%] flex items-center space-x-4'>
            <div className='h-[1px] bg-richblack-800 w-full'/><span className='text-richblack-800'>OR</span><div className='h-[1px] bg-richblack-800 w-full'/>
          </div>
          <button  className='flex border-[1px] border-richblack-800 text-richblack-200 font-bold rounded-lg w-[100%] items-center justify-center space-x-3 p-2 '>
            <FcGoogle/><span>Sign Up with Google</span>
          </button>
    </form>
  </div>
  )
}
export default Log_in;