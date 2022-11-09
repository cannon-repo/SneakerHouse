import React from 'react';
import "./App.css";
import {Route, Routes} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import {useGetWindowSize} from "../../Hooks/GetWindowSize";
import Home from './Home';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';

const App = () => {
  const [width,height] = useGetWindowSize();

  console.log(height);

  return (
    <div className='SneakHouse' style={{height: height}}>
      <NavBar />
      <div className='Content' style={{height: `${height - 70}px`}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;