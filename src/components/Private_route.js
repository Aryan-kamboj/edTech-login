import React from 'react'
import Dashboard from '../pages/Dashboard';
import { Navigate } from 'react-router-dom';

export const Private_route = (props) => {
    const is_logged_in = props.is_logged_in;
  return (
    <div>
        {is_logged_in?<Dashboard/>:<Navigate to="/log_in"/>}
    </div>
  )
}
export default Private_route;