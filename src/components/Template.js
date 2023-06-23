import React from 'react'
import Log_in_form from './Log_in_form';
import Sign_up_form from './Sign_up_form';
import frame from "../assets/frame.png";
export const Template = ({image,title,desc,desc2,form_type,set_logged_in}) => {
  return (
    <div className='w-[100vw] relative flex'>
        <div className='relative w-[50%] pt-12 px-[8rem]'>
            <h1 className="text-[30px] font-semibold">{title}</h1>
            <br/>
            <span className='text-[1.1rem] text-richblack-100'>{desc}</span>
            <br/>
            <div className='mb-5 text-[1.1rem] italic text-blue-100'>{desc2}</div>
            {(form_type==="Log_in")?<Log_in_form set_logged_in={set_logged_in} />:<Sign_up_form set_logged_in={set_logged_in}/>}
        </div>
        <div  className='mt-12 relative left-28'>
            <img className="w-[450px] relative z-10 h-[406px]" src={image}/>
            <img className='absolute top-4 left-4 z-0 w-[450px] h-[406px]' src={frame}/>

        </div>
    </div>
  )
}
export default Template;
