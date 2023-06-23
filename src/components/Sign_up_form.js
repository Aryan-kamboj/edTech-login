import React,{useEffect, useState} from 'react';
import { FaEye , FaEyeSlash} from "react-icons/fa";
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

export const Sign_up = (props) => {
  const[input_data,set_input_data] = useState({
    user_type : "Student",
    f_name : "",
    l_name : "",
    email : "",
    pass : "",
    confirm_pass : ""
  })
  const[hide_pass,toggle_hide]= useState ({create_pass:true,cnf_pass:true});
  const[usr_type,toggle_usr_type] = useState("Student");
  const navigator = useNavigate();
  function user_handler(event){
    if(event.target.innerHTML===usr_type);
    else{
      event.target.classList.add("bg-richblack-900");
      event.target.classList.add("text-white");
      toggle_usr_type((prev)=>{
        document.getElementById(prev).classList.remove("bg-richblack-900");
        document.getElementById(prev).classList.remove("text-white");
        return event.target.innerHTML});
    }
  }
  function data_handler(event){
    // console.log(event.target.id);
    // event.target.value
    set_input_data((prev_input_data)=>({
      ...prev_input_data,
      [event.target.id]:event.target.value
    }))
  }
  useEffect(()=>{
    set_input_data((prev)=>({
      ...prev,
      user_type:usr_type
    }))
  },[usr_type])
  
    // function pass_hide(event){
    //   console.log(event.currentTarget);
    //   console.log(hide_pass[event.currentTarget.id])
    //     toggle_hide(() => {
    //                   let hide_pass_dup = hide_pass;
    //                   hide_pass_dup[event.currentTarget.id]=!hide_pass_dup[event.currentTarget.id]
    //                   return hide_pass_dup;
    //               });
    // }
    // we can't simply copy the prev hide_pass object to another object and change the data in that and return it to toggle_hide 
    // because a simple " = " operator dose not create a seperate copy of the object it makes copies the reference to the original object
    // yes exactly like a pointer and yes any data changed in either of the objects will change the data of the other 
    // so we use the "..." spread operator (which creates a deep copy of the object's properties and a shallow copy(means a reference) of the properties which are objects themself)
    // Now on why we cant use references ...... because the useState hook wont work with references 
    //
    // const myInput = useRef();
    function pass_hide(event){
      const { id } = event.currentTarget;
      const id_for_showing_text = event.currentTarget.dataset.id_for_hide_show_fn;
      function show_pass(){
        hide_pass[id]?document.getElementById(id_for_showing_text).type="text" : document.getElementById(id_for_showing_text).type="password";
        // console.log( event.currentTarget.dataset.id_for_hide_show_fn);
      }
      show_pass();
      toggle_hide((prevState) => ({
        ...prevState,
        [id]: !prevState[id]
      }));
    }
    function check_pass(){
      return (input_data.pass===input_data.confirm_pass)?1:0;
    }
    function submitHandler(event){
      event.preventDefault();
      if(check_pass()){
        console.log(input_data);
        props.set_logged_in(true);
        navigator("/dashboard");
      }
      else {
        toast.error("Passwords don't match",{position: toast.POSITION.TOP_CENTER,progress:undefined});
      }
    }
  return (
    <div className='w-[100vw] '>
      <form  className='w-[50%] pr-[15rem] space-y-6' onSubmit={submitHandler}>
        <div className='flex space-x-5 text-richblack-200 bg-richblack-800 w-fit px-1 py-1 rounded-[30px]'>
          <div onClick={user_handler} id="Student" className='bg-richblack-900 text-white px-5 py-2 rounded-[30px]'>
            Student
          </div>
          <div onClick={user_handler} id="Instructor" className=' px-5 py-2 rounded-[30px]'>
            Instructor
          </div>
        </div>
          <div className='flex space-x-2'>
              <div className='flex flex-col w-[50%]'>
                <label htmlFor = "f_name">First Name<sup className="text-pink-200">*</sup></label>
                <input onChange={data_handler} required className='bg-richblack-800 rounded-lg p-2' placeholder='Enter First Name' type="text" id="f_name" value={input_data.f_name}></input>
              </div>
              <div className='flex flex-col w-[50%]'>
                <label htmlFor = "l_name">Last Name<sup className="text-pink-200">*</sup></label>
                <input onChange={data_handler} required className='bg-richblack-800 rounded-lg p-2' placeholder='Enter Last Name' type="text" id="l_name" value={input_data.l_name}></input>
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor = "email">Email Address<sup className="text-pink-200">*</sup></label>
              <input onChange={data_handler} required className='bg-richblack-800 rounded-lg p-2' placeholder='Enter Email Address' type="email" id="email" value={input_data.email}></input>
            </div>
            <div className='flex space-x-2'>
              <div className='relative flex flex-col w-[50%]'>
                <label htmlFor = "create_pass">Create Password<sup className="text-pink-200">*</sup></label>
                <div className='flex items-center bg-richblack-800 rounded-lg '>
                  <input onChange={data_handler} required className='p-2 bg-transparent rounded-lg w-full' placeholder='Enter Password' type="password" id="pass" value={input_data.pass}></input>
                  <div data-id_for_hide_show_fn="pass" className="absolute right-4" id="create_pass" onClick={pass_hide}>{hide_pass.create_pass?<FaEyeSlash/>:<FaEye/> }</div>              
                </div>
              </div>
              <div className='flex flex-col w-[50%]'>
                <label htmlFor = "">Confirm Password<sup className="text-pink-200">*</sup></label>
                <div className='relative flex items-center bg-richblack-800 rounded-lg pr-2'>
                  <input onChange={data_handler} required className='p-2 bg-transparent rounded-lg w-full '  placeholder='Confirm Password' type="password" id="confirm_pass" value={input_data.confirm_pass} ></input>
                  <div data-id_for_hide_show_fn="confirm_pass" className="absolute right-4" id="cnf_pass" onClick={pass_hide}>{hide_pass.cnf_pass ? <FaEyeSlash/>:<FaEye/>}</div>
                </div>
              </div>
            </div>
            <button className='w-[100%] p-2 bg-yellow-50 rounded-lg text-black'>Create Account</button>
            <div className='w-[100%] flex items-center space-x-4'>
              <div className='h-[1px] bg-richblack-800 w-full'/><span className='text-richblack-800'>OR</span><div className='h-[1px] bg-richblack-800 w-full'/>
            </div>
            <button className='flex border-[1px] border-richblack-800 text-richblack-200 font-bold rounded-lg w-[100%] items-center justify-center space-x-3 p-2 '>
              <FcGoogle/><span>Sign Up with Google</span>
            </button>
      </form>
    </div>
  )
}
export default Sign_up;