import React from 'react';
import {photo} from '../assets/login.png';
import Template from '../components/Template';
export const Log_in = () => {
  return (
    <form>
      <div className='flex space-x-5 text-richblack-200 bg-richblack-700 w-fit px-1 py-1 rounded-[30px]'>
        <div className='active:bg-richblack-900 px-5 py-2 rounded-[30px]'>
          Student
        </div>
        <div className='active:bg-richblack-900 px-5 py-2 rounded-[30px]'>
          Instructor
        </div>
      </div>
      <div>
        <div>
          <div>
            <label for = "f_name">First Name</label>
            <input type="text" id="f_name"></input>
          </div>
          <div>
            <label for = "l_name">Last Name</label>
            <input type="text" id="l_name"></input>
          </div>
          <div>
            <label for = "email"></label>
            <input type="text" id="email">Email Address</input>
          </div>
          <div>
            <div>
              <label for = "create_pass"></label>
              <input type="text" id="create_pass">Create Password</input>
            </div>
            <div>
              <label for = "cnf_pass"></label>
              <input type="text" id="cnf_pass">Confirm Password</input>
            </div>
          </div>
          {/* <button> Create Account</button>
          <div class="flex w-full items-center my-4 gap-x-2">
            <div class="w-full h-[1px] bg-richblack-700"></div>
            <p class="text-richblack-700 font-medium leading[1.375rem]">OR</p>
            <div class="w-full h-[1px] bg-richblack-700"></div>
          </div> */}
        </div>

      </div>

    </form>
  )
}
export default Log_in;