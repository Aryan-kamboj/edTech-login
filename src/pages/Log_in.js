import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"
export const Log_in = (props) => {
  console.log(props);
  return (
    <div><Template set_logged_in={props.set_logged_in} image={loginImg} title={"Welcome Back"} desc={"Build skills for today, tomorrow, and beyond."} desc2={"Education to future-proof your career."} form_type={"Log_in"}/></div>
  )
}
export default Log_in;