import React from 'react'
import Template from '../components/Template'
import signUpImg from '../assets/signup.png'
export const Sign_up = (props) => {
  return (
    <div className='h-fit'><Template set_logged_in={props.set_logged_in} image={signUpImg} title={"Join the millions learning to code with StudyNotion for free"} desc={"Build skills for today, tomorrow, and beyond."} desc2={"Education to future-proof your career."} form_type={"Sign_up"}/></div>
  )
}
export default Sign_up;
