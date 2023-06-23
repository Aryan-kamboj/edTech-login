import "./App.css";
import Nav from './components/Nav'
import About from "./components/About"
import Contact from './components/Contact'
import Log_in from "./pages/Log_in"
import Sign_up from "./pages/Sign_up"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Private_route from "./components/Private_route" 
import {Routes, Route, useNavigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {useState} from 'react'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const [is_logged_in,set_logged_in]=useState(false);
  const navigator = useNavigate();
return <div className="bg-richblack-900 max-h-fit min-h-[100vh] text-white flex flex-col">
        <Nav  navigator={navigator} is_loged_in={is_logged_in} set_logged_in={set_logged_in}/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/log_in" element = {<Log_in set_logged_in = {set_logged_in}/>}/>
          <Route path="/sign_up" element = {<Sign_up set_logged_in = {set_logged_in}/>}/>
          <Route path="/dashboard" element = {<Private_route is_logged_in={is_logged_in}/>}/>
          <Route path="*" element = {<Error/>}/>
        </Routes>
      <ToastContainer/>
  </div>;
}

export default App;