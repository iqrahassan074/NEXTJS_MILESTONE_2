import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="Hero"className='min-h-screen bg-no-repeat bg-[url(/banner_bg.png)]  bg-cover'
      style={{
        backgroundImage: "url('/iqra.jpeg')",
      
        backgroundSize: "35%", backgroundPosition: "left 100px top 100px"
      }}
    >
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'> 
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
        <div>
            <p data-aos="flip-left">I 𝒶𝓂 </p>
            <p data-aos="flip-left">I𝓆𝓇𝒶 </p>
            <p data-aos="flip-left">H𝒶𝓈𝓈𝒶𝓃</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;







