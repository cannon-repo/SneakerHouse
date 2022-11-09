import React from 'react';
import "./App.css";
import {Route, Routes} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ShoesView from "../ShoesView/ShoesView";
import HomeScroll from "../HomeScroll/HomeScroll";
import {useGetWindowSize} from "../../Hooks/GetWindowSize";

const App = () => {
  const [width,height] = useGetWindowSize();

  console.log(height);

  return (
    <div className='SneakHouse' style={{height: height}}>
      <NavBar />
      <div className='Content' style={{height: `${height - 70}px`}}>
        <ShoesView></ShoesView>
        <HomeScroll></HomeScroll>
      </div>
    </div>
  )
}

export default App;