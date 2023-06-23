import React from 'react'
import logo from "../assets/Logo.svg"
import { NavLink } from 'react-router-dom'
// import { FaAccessibleIcon } from "react-icons/fa";

export const Nav = (props) => {
  // console.log(props.is_loged_in);
  function logout_handler(){
    props.navigator("/");
    console.log("logout")
    props.set_logged_in(false);
  }
  return (
    <div className="py-5 text-white flex justify-between items-center px-[8rem]">
      <img className="h-[35px]" src={logo}></img>
      <div className='space-x-6  text-richblack-100'>
        <NavLink to="">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className='text-richblack-200 space-x-4'>
        {props.is_loged_in?<span className="rounded-[10px] border-richblack-700 border p-3 bg-richblack-800" onClick={logout_handler}>Log out</span>:<NavLink className="rounded-[10px] border-richblack-700 border p-3 bg-richblack-800" to="/log_in">Log in</NavLink>}
        {props.is_loged_in?<NavLink className="rounded-[10px] border-richblack-700 border p-3 bg-richblack-800" to="/dashboard">Dashboard</NavLink>:<NavLink className="rounded-[10px] border-richblack-700 border p-3 bg-richblack-800" to="/sign_up">Sign Up</NavLink>}
      </div>
      
    </div>
  )
}
export default Nav;