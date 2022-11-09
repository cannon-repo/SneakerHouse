import React from 'react';
import HomeScroll from '../HomeScroll/HomeScroll';
import ShoesView from '../ShoesView/ShoesView';

const Home = () => {
  return (
    <div className='Home' style={{height: '100%'}}>
        <ShoesView></ShoesView>
        <HomeScroll></HomeScroll>
    </div>
  )
}

export default Home;