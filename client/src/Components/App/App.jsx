import React from 'react';
import "./App.css";
import {Navigate, Route, Routes} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useGetWindowSize} from "../../Hooks/GetWindowSize";
import Home from './Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import useCheckUser from '../../Hooks/CheckUser';
import { useSelector } from 'react-redux';

const App = () => {

  useCheckUser();

  const [width,height] = useGetWindowSize();
  const userData = useSelector((state) => state.userData);

  return (
    <div className='SneakHouse' style={{height: height}}>
      <NavBar />
      <div className='Content' style={{height: `${height - 70}px`}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={localStorage.getItem('loggedin') ? <Navigate end to="/"/> : <Login/>}/>
          <Route path="/contact" element={localStorage.getItem('loggedin') ? <Contact/> : <Navigate end to="/login"/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default React.memo(App);